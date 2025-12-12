from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.order import OrderCreate, OrderOut, OrderUpdate
from app.services.order_service import OrderService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/orders", tags=["admin-orders"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[OrderOut])
async def list_orders(db: AsyncSession = Depends(get_db)):
    return await OrderService.list_orders(db)


@router.post("", response_model=OrderOut)
async def create_order(payload: OrderCreate, db: AsyncSession = Depends(get_db)):
    return await OrderService.create_order(db, payload)


@router.patch("/{order_id}", response_model=OrderOut)
async def update_order(order_id: int, payload: OrderUpdate, db: AsyncSession = Depends(get_db)):
    order = await OrderService.update_order(db, order_id, payload)
    if not order:
        raise not_found("Order")
    return order
