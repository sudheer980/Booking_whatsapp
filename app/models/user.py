from datetime import datetime
from enum import Enum

from sqlalchemy import Boolean, Column, DateTime, Enum as PgEnum, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.session import Base


class UserRole(str, Enum):
    admin = "admin"
    vendor = "vendor"
    customer = "customer"


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    full_name = Column(String(150), nullable=False)
    email = Column(String(150), unique=True)
    phone = Column(String(30), unique=True)
    password_hash = Column(Text, nullable=False)
    role = Column(PgEnum(UserRole, name="user_role"), nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    customer_profile = relationship("CustomerProfile", back_populates="user", uselist=False)
    addresses = relationship("CustomerAddress", back_populates="customer", cascade="all, delete-orphan")


class CustomerProfile(Base):
    __tablename__ = "customer_profiles"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, unique=True)
    default_country = Column(String(80))
    default_city = Column(String(80))
    default_address = Column(Text)
    default_pincode = Column(String(20))
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    user = relationship("User", back_populates="customer_profile")


class CustomerAddress(Base):
    __tablename__ = "customer_addresses"

    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    label = Column(String(80))
    recipient_name = Column(String(150))
    phone = Column(String(30))
    country = Column(String(80))
    city = Column(String(80))
    address_line1 = Column(Text)
    address_line2 = Column(Text)
    pincode = Column(String(20))
    is_default = Column(Boolean, nullable=False, default=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    customer = relationship("User", backref="customer_addresses")
