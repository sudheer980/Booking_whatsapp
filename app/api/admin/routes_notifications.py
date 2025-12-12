from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.models.notification import Notification
from app.schemas.notification import NotificationCreate, NotificationOut, NotificationUpdate
from app.services.notification_service import NotificationService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/notifications", tags=["admin-notifications"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[NotificationOut])
async def list_notifications(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Notification))
    return result.scalars().all()


@router.post("", response_model=NotificationOut)
async def create_notification(payload: NotificationCreate, db: AsyncSession = Depends(get_db)):
    return await NotificationService.create_notification(db, payload)


@router.patch("/{notification_id}", response_model=NotificationOut)
async def update_notification(notification_id: int, payload: NotificationUpdate, db: AsyncSession = Depends(get_db)):
    notification = await NotificationService.update_notification(db, notification_id, payload)
    if not notification:
        raise not_found("Notification")
    return notification
