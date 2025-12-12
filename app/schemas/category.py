from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class CategoryBase(BaseModel):
    name: str
    slug: Optional[str] = None
    description: Optional[str] = None
    icon_url: Optional[str] = None
    banner_url: Optional[str] = None
    is_active: Optional[bool] = True
    sort_order: Optional[int] = 0


class CategoryCreate(CategoryBase):
    name: str


class CategoryUpdate(BaseModel):
    name: Optional[str]
    slug: Optional[str]
    description: Optional[str]
    icon_url: Optional[str]
    banner_url: Optional[str]
    is_active: Optional[bool]
    sort_order: Optional[int]


class CategoryOut(CategoryBase):
    id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
