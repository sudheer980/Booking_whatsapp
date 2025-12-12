from datetime import datetime
from enum import Enum

from sqlalchemy import Boolean, Column, DateTime, Enum as PgEnum, ForeignKey, Integer, String, Text

from app.db.session import Base


class NotificationType(str, Enum):
    order_created = "order_created"
    order_status_changed = "order_status_changed"
    payout_created = "payout_created"
    payout_status_changed = "payout_status_changed"
    low_stock = "low_stock"
    system = "system"


class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    type = Column(PgEnum(NotificationType, name="notification_type"), nullable=False)
    title = Column(String(200), nullable=False)
    body = Column(Text)
    related_order_id = Column(Integer, ForeignKey("orders.id"))
    related_payout_id = Column(Integer, ForeignKey("payouts.id"))
    is_read = Column(Boolean, nullable=False, default=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
