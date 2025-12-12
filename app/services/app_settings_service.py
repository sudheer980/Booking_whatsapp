from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.app_settings import AppSetting
from app.schemas.app_settings import AppSettingCreate, AppSettingUpdate


class AppSettingsService:
    @staticmethod
    async def list_settings(db: AsyncSession):
        result = await db.execute(select(AppSetting))
        return result.scalars().all()

    @staticmethod
    async def upsert_setting(db: AsyncSession, data: AppSettingCreate) -> AppSetting:
        result = await db.execute(select(AppSetting).where(AppSetting.key == data.key))
        setting = result.scalar_one_or_none()
        if setting:
            setting.value = data.value
            await db.flush()
            return setting
        setting = AppSetting(**data.dict())
        db.add(setting)
        await db.flush()
        return setting

    @staticmethod
    async def update_setting(db: AsyncSession, setting_id: int, data: AppSettingUpdate) -> AppSetting | None:
        result = await db.execute(select(AppSetting).where(AppSetting.id == setting_id))
        setting = result.scalar_one_or_none()
        if not setting:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(setting, field, value)
        await db.flush()
        return setting
