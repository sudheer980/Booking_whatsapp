from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.schemas.notification import NotificationOut
from app.services.notification_service import NotificationService

router = APIRouter(prefix="/api/vendor/notifications", tags=["vendor-notifications"], dependencies=[Depends(vendor_required)])


@router.get("", response_model=list[NotificationOut])
async def list_notifications(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    return await NotificationService.list_notifications(db, current_vendor.id)
