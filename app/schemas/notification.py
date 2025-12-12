from datetime import datetime
from typing import Optional

from pydantic import BaseModel

from app.models.notification import NotificationType


class NotificationBase(BaseModel):
    type: NotificationType
    title: str
    body: Optional[str]
    related_order_id: Optional[int]
    related_payout_id: Optional[int]


class NotificationCreate(NotificationBase):
    user_id: int


class NotificationUpdate(BaseModel):
    is_read: Optional[bool]


class NotificationOut(NotificationBase):
    id: int
    user_id: int
    is_read: bool
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
