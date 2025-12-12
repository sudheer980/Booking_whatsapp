from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.models.order import Order
from app.models.payout import Payout
from app.models.shop import Shop

router = APIRouter(prefix="/api/vendor/dashboard", tags=["vendor-dashboard"], dependencies=[Depends(vendor_required)])


@router.get("")
async def vendor_dashboard(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    shop_ids_query = select(Shop.id).where(Shop.owner_id == current_vendor.id)
    shop_ids = (await db.execute(shop_ids_query)).scalars().all()
    orders_count = (await db.execute(select(func.count()).where(Order.shop_id.in_(shop_ids)))).scalar_one()
    revenue = (await db.execute(select(func.coalesce(func.sum(Order.vendor_amount), 0)).where(Order.shop_id.in_(shop_ids)))).scalar_one()
    payouts = (await db.execute(select(func.count()).where(Payout.shop_id.in_(shop_ids)))).scalar_one()
    return {"orders": orders_count, "revenue": float(revenue), "payouts": payouts}
