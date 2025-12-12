from datetime import datetime
from typing import Optional, List

from pydantic import BaseModel

from app.models.shop import ShopStatus


class ShopBase(BaseModel):
    owner_id: int
    category_id: int
    name: str
    slug: Optional[str] = None
    description: Optional[str] = None
    address: Optional[str] = None
    phone: Optional[str] = None
    logo_url: Optional[str] = None
    cover_image_url: Optional[str] = None
    status: Optional[ShopStatus] = ShopStatus.pending


class ShopCreate(ShopBase):
    pass


class ShopUpdate(BaseModel):
    category_id: Optional[int]
    name: Optional[str]
    slug: Optional[str]
    description: Optional[str]
    address: Optional[str]
    phone: Optional[str]
    logo_url: Optional[str]
    cover_image_url: Optional[str]
    status: Optional[ShopStatus]


class ShopOut(ShopBase):
    id: int
    rating_avg: Optional[float]
    rating_count: Optional[int]
    created_at: Optional[datetime]

    class Config:
        orm_mode = True


class ShopImageCreate(BaseModel):
    image_url: str
    sort_order: Optional[int] = 0


class ShopImageOut(ShopImageCreate):
    id: int

    class Config:
        orm_mode = True
