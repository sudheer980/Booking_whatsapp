from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel

from app.models.support import TicketStatus


class SupportTicketBase(BaseModel):
    subject: str
    description: str
    priority: Optional[str] = "normal"


class SupportTicketCreate(SupportTicketBase):
    pass


class SupportTicketUpdate(BaseModel):
    status: Optional[TicketStatus]
    priority: Optional[str]


class SupportMessageCreate(BaseModel):
    message: str


class SupportMessageOut(SupportMessageCreate):
    id: int
    sender_id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True


class SupportTicketOut(SupportTicketBase):
    id: int
    created_by_id: int
    status: TicketStatus
    created_at: Optional[datetime]
    messages: List[SupportMessageOut] = []

    class Config:
        orm_mode = True
