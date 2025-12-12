from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.notification import Notification
from app.schemas.notification import NotificationCreate, NotificationUpdate


class NotificationService:
    @staticmethod
    async def list_notifications(db: AsyncSession, user_id: int):
        result = await db.execute(select(Notification).where(Notification.user_id == user_id))
        return result.scalars().all()

    @staticmethod
    async def create_notification(db: AsyncSession, data: NotificationCreate) -> Notification:
        notification = Notification(**data.dict())
        db.add(notification)
        await db.flush()
        return notification

    @staticmethod
    async def update_notification(db: AsyncSession, notification_id: int, data: NotificationUpdate) -> Notification | None:
        result = await db.execute(select(Notification).where(Notification.id == notification_id))
        notification = result.scalar_one_or_none()
        if not notification:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(notification, field, value)
        await db.flush()
        return notification
