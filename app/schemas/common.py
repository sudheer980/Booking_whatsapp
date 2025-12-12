from datetime import datetime, date
from typing import Optional

from pydantic import BaseModel


class PaginatedResponse(BaseModel):
    total: int
    page: int
    page_size: int


class MessageResponse(BaseModel):
    message: str


class DateRange(BaseModel):
    start_date: Optional[date]
    end_date: Optional[date]


class TimeStampedModel(BaseModel):
    created_at: Optional[datetime]
    updated_at: Optional[datetime]

    class Config:
        orm_mode = True
