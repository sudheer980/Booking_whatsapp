from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class AppSettingBase(BaseModel):
    key: str
    value: Optional[str]


class AppSettingCreate(AppSettingBase):
    pass


class AppSettingUpdate(BaseModel):
    value: Optional[str]


class AppSettingOut(AppSettingBase):
    id: int
    created_at: Optional[datetime]
    updated_at: Optional[datetime]

    class Config:
        orm_mode = True
