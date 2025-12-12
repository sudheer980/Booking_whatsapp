from typing import Dict, Any

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.session_state import ChannelType
from app.schemas.session_state import SessionUpdate
from app.services.session_service import SessionService
from app.services.order_service import OrderService
from app.schemas.order import OrderCreate, OrderItemCreate


class WhatsAppService:
    @staticmethod
    async def handle_message(db: AsyncSession, external_id: str, message: str) -> Dict[str, Any]:
        session = await SessionService.get_or_create(db, channel=ChannelType.whatsapp, external_id=external_id)
        state = session.state or "menu"
        state_data = session.state_data or {}

        if state == "menu":
            reply = "Welcome! Reply with a category to browse: pickles, dresses, ornaments."
            await SessionService.update_session(db, session.id, SessionUpdate(state="awaiting_category", state_data={} ))
            return {"reply": reply}
        if state == "awaiting_category":
            state_data["category"] = message.strip()
            reply = f"You selected {message}. Reply with product name to add to cart."
            await SessionService.update_session(db, session.id, SessionUpdate(state="awaiting_product", state_data=state_data))
            return {"reply": reply}
        if state == "awaiting_product":
            cart = state_data.get("cart", [])
            cart.append({"product": message, "quantity": 1, "price": 100})
            state_data["cart"] = cart
            reply = "Item added. Reply 'checkout' to place order or another product name."
            await SessionService.update_session(db, session.id, SessionUpdate(state="cart", state_data=state_data))
            return {"reply": reply}
        if state == "cart" and message.lower().strip() == "checkout":
            items = [
                OrderItemCreate(
                    product_id=1, variant_id=None, product_name=i["product"], variant_name=None, quantity=i["quantity"],
                    unit_price=i["price"], total_price=i["price"] * i["quantity"]
                )
                for i in state_data.get("cart", [])
            ]
            order = await OrderService.create_order(
                db,
                OrderCreate(
                    customer_id=None,
                    shop_id=1,
                    shipping_address_id=None,
                    subtotal_amount=sum(i.total_price for i in items) or 0,
                    total_amount=sum(i.total_price for i in items) or 0,
                    items=items,
                ),
            )
            await SessionService.update_session(db, session.id, SessionUpdate(state="completed", state_data={}))
            return {"reply": f"Order {order.order_number} placed!"}

        return {"reply": "Sorry, I did not understand. Reply with a category to begin."}
