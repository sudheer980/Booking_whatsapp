from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel

from app.models.payout import PayoutStatus


class PayoutBase(BaseModel):
    vendor_id: int
    shop_id: int
    period_start: Optional[date]
    period_end: Optional[date]
    total_orders: int = 0
    gross_amount: float = 0
    commission_amount: float = 0
    payout_amount: float = 0
    currency: str = "INR"
    status: PayoutStatus = PayoutStatus.pending
    payout_reference: Optional[str]


class PayoutCreate(PayoutBase):
    pass


class PayoutUpdate(BaseModel):
    status: Optional[PayoutStatus]
    payout_reference: Optional[str]


class PayoutOut(PayoutBase):
    id: int
    requested_at: Optional[datetime]
    processed_at: Optional[datetime]
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
