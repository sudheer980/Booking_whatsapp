from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.schemas.payout import PayoutOut
from app.services.payout_service import PayoutService

router = APIRouter(prefix="/api/vendor/payouts", tags=["vendor-payouts"], dependencies=[Depends(vendor_required)])


@router.get("", response_model=list[PayoutOut])
async def list_payouts(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    return await PayoutService.list_payouts(db, vendor_id=current_vendor.id)
