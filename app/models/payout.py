from datetime import datetime, date
from enum import Enum

from sqlalchemy import Column, Date, DateTime, Enum as PgEnum, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import relationship

from app.db.session import Base


class PayoutStatus(str, Enum):
    pending = "pending"
    processing = "processing"
    completed = "completed"
    failed = "failed"


class Payout(Base):
    __tablename__ = "payouts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    vendor_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    shop_id = Column(Integer, ForeignKey("shops.id"), nullable=False)
    period_start = Column(Date)
    period_end = Column(Date)
    total_orders = Column(Integer, nullable=False, default=0)
    gross_amount = Column(Numeric(12, 2), nullable=False, default=0)
    commission_amount = Column(Numeric(12, 2), nullable=False, default=0)
    payout_amount = Column(Numeric(12, 2), nullable=False, default=0)
    currency = Column(String(10), nullable=False, default="INR")
    status = Column(PgEnum(PayoutStatus, name="payout_status"), nullable=False, default=PayoutStatus.pending)
    payout_reference = Column(String(120))
    requested_at = Column(DateTime(timezone=True))
    processed_at = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    orders = relationship("PayoutOrder", back_populates="payout", cascade="all, delete-orphan")


class PayoutOrder(Base):
    __tablename__ = "payout_orders"

    id = Column(Integer, primary_key=True, autoincrement=True)
    payout_id = Column(Integer, ForeignKey("payouts.id", ondelete="CASCADE"), nullable=False)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    payout = relationship("Payout", back_populates="orders")


class PayoutHistory(Base):
    __tablename__ = "payout_history"

    id = Column(Integer, primary_key=True, autoincrement=True)
    vendor_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    shop_id = Column(Integer, ForeignKey("shops.id"), nullable=False)
    event = Column(String(120), nullable=False)
    amount = Column(Numeric(12, 2), nullable=False, default=0)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
