from datetime import datetime
from enum import Enum

from sqlalchemy import Column, DateTime, Enum as PgEnum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import relationship

from app.db.session import Base


class ShopStatus(str, Enum):
    pending = "pending"
    active = "active"
    inactive = "inactive"
    suspended = "suspended"


class Shop(Base):
    __tablename__ = "shops"

    id = Column(Integer, primary_key=True, autoincrement=True)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    name = Column(String(150), nullable=False)
    slug = Column(String(180), unique=True)
    description = Column(Text)
    address = Column(Text)
    phone = Column(String(30))
    logo_url = Column(Text)
    cover_image_url = Column(Text)
    status = Column(PgEnum(ShopStatus, name="shop_status"), nullable=False, default=ShopStatus.pending)
    rating_avg = Column(Numeric(3, 2))
    rating_count = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    images = relationship("ShopImage", back_populates="shop", cascade="all, delete-orphan")
    owner = relationship("User")
    category = relationship("Category")


class ShopImage(Base):
    __tablename__ = "shop_images"

    id = Column(Integer, primary_key=True, autoincrement=True)
    shop_id = Column(Integer, ForeignKey("shops.id", ondelete="CASCADE"), nullable=False)
    image_url = Column(Text, nullable=False)
    sort_order = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    shop = relationship("Shop", back_populates="images")
