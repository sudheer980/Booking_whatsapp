from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.app_settings import AppSettingCreate, AppSettingOut, AppSettingUpdate
from app.services.app_settings_service import AppSettingsService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/settings", tags=["admin-settings"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[AppSettingOut])
async def list_settings(db: AsyncSession = Depends(get_db)):
    return await AppSettingsService.list_settings(db)


@router.post("", response_model=AppSettingOut)
async def create_setting(payload: AppSettingCreate, db: AsyncSession = Depends(get_db)):
    return await AppSettingsService.upsert_setting(db, payload)


@router.patch("/{setting_id}", response_model=AppSettingOut)
async def update_setting(setting_id: int, payload: AppSettingUpdate, db: AsyncSession = Depends(get_db)):
    setting = await AppSettingsService.update_setting(db, setting_id, payload)
    if not setting:
        raise not_found("Setting")
    return setting
