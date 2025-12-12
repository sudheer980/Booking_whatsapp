import uuid
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.order import Order, OrderItem
from app.schemas.order import OrderCreate, OrderUpdate


class OrderService:
    @staticmethod
    async def list_orders(db: AsyncSession):
        result = await db.execute(select(Order))
        return result.scalars().all()

    @staticmethod
    async def list_orders_for_shop(db: AsyncSession, shop_id: int):
        result = await db.execute(select(Order).where(Order.shop_id == shop_id))
        return result.scalars().all()

    @staticmethod
    async def create_order(db: AsyncSession, data: OrderCreate) -> Order:
        order = Order(
            order_number=str(uuid.uuid4())[:12].upper(),
            customer_id=data.customer_id,
            shop_id=data.shop_id,
            shipping_address_id=data.shipping_address_id,
            subtotal_amount=data.subtotal_amount,
            commission_rate=data.commission_rate,
            commission_amount=(data.subtotal_amount * data.commission_rate) / 100,
            vendor_amount=data.subtotal_amount - (data.subtotal_amount * data.commission_rate) / 100,
            total_amount=data.total_amount,
            payment_status=data.payment_status,
            order_status=data.order_status,
            notes=data.notes,
        )
        db.add(order)
        await db.flush()
        for item in data.items:
            oi = OrderItem(order_id=order.id, **item.dict())
            db.add(oi)
        await db.flush()
        return order

    @staticmethod
    async def update_order(db: AsyncSession, order_id: int, data: OrderUpdate) -> Order | None:
        result = await db.execute(select(Order).where(Order.id == order_id))
        order = result.scalar_one_or_none()
        if not order:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(order, field, value)
        await db.flush()
        return order
