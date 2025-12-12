from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel

from app.models.product import ProductStatus, VariantStatus


class ProductVariantCreate(BaseModel):
    sku: Optional[str]
    variant_name: str
    price: float
    currency: Optional[str] = "INR"
    stock: int = 0
    status: VariantStatus = VariantStatus.active
    is_default: bool = False


class ProductVariantOut(ProductVariantCreate):
    id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True


class ProductImageCreate(BaseModel):
    image_url: str
    sort_order: Optional[int] = 0


class ProductImageOut(ProductImageCreate):
    id: int

    class Config:
        orm_mode = True


class ProductBase(BaseModel):
    shop_id: int
    name: str
    slug: Optional[str] = None
    description: Optional[str] = None
    main_image_url: Optional[str] = None
    status: ProductStatus = ProductStatus.active
    is_active: bool = True


class ProductCreate(ProductBase):
    variants: Optional[List[ProductVariantCreate]] = None
    images: Optional[List[ProductImageCreate]] = None


class ProductUpdate(BaseModel):
    name: Optional[str]
    slug: Optional[str]
    description: Optional[str]
    main_image_url: Optional[str]
    status: Optional[ProductStatus]
    is_active: Optional[bool]


class ProductOut(ProductBase):
    id: int
    created_at: Optional[datetime]
    variants: List[ProductVariantOut] = []
    images: List[ProductImageOut] = []

    class Config:
        orm_mode = True
