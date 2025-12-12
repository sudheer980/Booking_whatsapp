from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.session_state import Session
from app.schemas.session_state import SessionCreate, SessionUpdate


class SessionService:
    @staticmethod
    async def get_or_create(db: AsyncSession, channel: str, external_id: str, user_id: int | None = None) -> Session:
        result = await db.execute(select(Session).where(Session.channel == channel, Session.external_id == external_id))
        session = result.scalar_one_or_none()
        if session:
            return session
        session = Session(channel=channel, external_id=external_id, user_id=user_id)
        db.add(session)
        await db.flush()
        return session

    @staticmethod
    async def update_session(db: AsyncSession, session_id: int, data: SessionUpdate) -> Session | None:
        result = await db.execute(select(Session).where(Session.id == session_id))
        session = result.scalar_one_or_none()
        if not session:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(session, field, value)
        await db.flush()
        return session
