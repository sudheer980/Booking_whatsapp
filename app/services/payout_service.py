from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.payout import Payout, PayoutHistory
from app.schemas.payout import PayoutCreate, PayoutUpdate


class PayoutService:
    @staticmethod
    async def list_payouts(db: AsyncSession, vendor_id: int | None = None):
        query = select(Payout)
        if vendor_id:
            query = query.where(Payout.vendor_id == vendor_id)
        result = await db.execute(query)
        return result.scalars().all()

    @staticmethod
    async def create_payout(db: AsyncSession, data: PayoutCreate) -> Payout:
        payout = Payout(**data.dict())
        db.add(payout)
        await db.flush()
        history = PayoutHistory(
            vendor_id=payout.vendor_id, shop_id=payout.shop_id, event="payout_created", amount=payout.payout_amount
        )
        db.add(history)
        return payout

    @staticmethod
    async def update_payout(db: AsyncSession, payout_id: int, data: PayoutUpdate) -> Payout | None:
        result = await db.execute(select(Payout).where(Payout.id == payout_id))
        payout = result.scalar_one_or_none()
        if not payout:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(payout, field, value)
        await db.flush()
        return payout
