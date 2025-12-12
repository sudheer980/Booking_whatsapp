from datetime import datetime
from typing import Optional, Dict, Any

from pydantic import BaseModel

from app.models.session_state import ChannelType


class SessionBase(BaseModel):
    channel: ChannelType
    external_id: str
    state: Optional[str] = None
    state_data: Optional[Dict[str, Any]] = None


class SessionCreate(SessionBase):
    user_id: Optional[int]


class SessionUpdate(BaseModel):
    state: Optional[str]
    state_data: Optional[Dict[str, Any]]


class SessionOut(SessionBase):
    id: int
    user_id: Optional[int]
    last_seen_at: Optional[datetime]
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
