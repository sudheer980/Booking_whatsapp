from datetime import datetime
from enum import Enum

from sqlalchemy import Column, DateTime, Enum as PgEnum, ForeignKey, Integer, JSON, String

from app.db.session import Base


class ChannelType(str, Enum):
    web = "web"
    whatsapp = "whatsapp"


class Session(Base):
    __tablename__ = "sessions"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    channel = Column(PgEnum(ChannelType, name="channel_type"), nullable=False)
    external_id = Column(String(100), nullable=False)
    state = Column(String(80))
    state_data = Column(JSON)
    last_seen_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
