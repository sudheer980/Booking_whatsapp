from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.payout import PayoutCreate, PayoutOut, PayoutUpdate
from app.services.payout_service import PayoutService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/payouts", tags=["admin-payouts"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[PayoutOut])
async def list_payouts(db: AsyncSession = Depends(get_db)):
    return await PayoutService.list_payouts(db)


@router.post("", response_model=PayoutOut)
async def create_payout(payload: PayoutCreate, db: AsyncSession = Depends(get_db)):
    return await PayoutService.create_payout(db, payload)


@router.patch("/{payout_id}", response_model=PayoutOut)
async def update_payout(payout_id: int, payload: PayoutUpdate, db: AsyncSession = Depends(get_db)):
    payout = await PayoutService.update_payout(db, payout_id, payload)
    if not payout:
        raise not_found("Payout")
    return payout
