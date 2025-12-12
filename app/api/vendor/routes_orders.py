from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.schemas.order import OrderOut, OrderUpdate
from app.services.order_service import OrderService
from app.services.shop_service import ShopService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/vendor/orders", tags=["vendor-orders"], dependencies=[Depends(vendor_required)])


@router.get("", response_model=list[OrderOut])
async def list_orders(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    shops = await ShopService.list_vendor_shops(db, current_vendor.id)
    orders = []
    for shop in shops:
        orders.extend(await OrderService.list_orders_for_shop(db, shop.id))
    return orders


@router.patch("/{order_id}", response_model=OrderOut)
async def update_order(order_id: int, payload: OrderUpdate, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    order = await OrderService.update_order(db, order_id, payload)
    if not order:
        raise not_found("Order")
    shops = await ShopService.list_vendor_shops(db, current_vendor.id)
    shop_ids = [s.id for s in shops]
    if order.shop_id not in shop_ids:
        raise not_found("Order")
    return order
