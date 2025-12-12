from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.models.order import Order
from app.models.payout import Payout
from app.models.shop import Shop

router = APIRouter(prefix="/api/admin/dashboard", tags=["admin-dashboard"], dependencies=[Depends(admin_required)])


@router.get("")
async def admin_dashboard(db: AsyncSession = Depends(get_db)):
    orders_count = (await db.execute(select(func.count()).select_from(Order))).scalar_one()
    shops_count = (await db.execute(select(func.count()).select_from(Shop))).scalar_one()
    payouts_count = (await db.execute(select(func.count()).select_from(Payout))).scalar_one()
    revenue = (await db.execute(select(func.coalesce(func.sum(Order.total_amount), 0)))).scalar_one()
    return {
        "orders": orders_count,
        "shops": shops_count,
        "payouts": payouts_count,
        "revenue": float(revenue),
    }
