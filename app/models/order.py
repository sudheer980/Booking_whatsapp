from datetime import datetime
from enum import Enum

from sqlalchemy import Column, DateTime, Enum as PgEnum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import relationship

from app.db.session import Base


class OrderStatus(str, Enum):
    placed = "placed"
    processing = "processing"
    packed = "packed"
    shipped = "shipped"
    delivered = "delivered"
    cancelled = "cancelled"
    refunded = "refunded"


class PaymentStatus(str, Enum):
    pending = "pending"
    paid = "paid"
    failed = "failed"
    refunded = "refunded"


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, autoincrement=True)
    order_number = Column(String(40), nullable=False, unique=True)
    customer_id = Column(Integer, ForeignKey("users.id"))
    shop_id = Column(Integer, ForeignKey("shops.id"), nullable=False)
    shipping_address_id = Column(Integer, ForeignKey("customer_addresses.id"))
    subtotal_amount = Column(Numeric(10, 2), nullable=False)
    commission_rate = Column(Numeric(5, 2), nullable=False, default=10.0)
    commission_amount = Column(Numeric(10, 2), nullable=False, default=0)
    vendor_amount = Column(Numeric(10, 2), nullable=False, default=0)
    total_amount = Column(Numeric(10, 2), nullable=False)
    currency = Column(String(10), nullable=False, default="INR")
    payment_status = Column(PgEnum(PaymentStatus, name="payment_status"), nullable=False, default=PaymentStatus.pending)
    order_status = Column(PgEnum(OrderStatus, name="order_status"), nullable=False, default=OrderStatus.placed)
    payment_reference = Column(String(120))
    placed_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
    paid_at = Column(DateTime(timezone=True))
    delivered_at = Column(DateTime(timezone=True))
    cancelled_at = Column(DateTime(timezone=True))
    delivery_tracking_number = Column(String(150))
    delivery_partner = Column(String(100))
    tracking_url = Column(Text)
    notes = Column(Text)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    items = relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")
    shop = relationship("Shop")


class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey("orders.id", ondelete="CASCADE"), nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    variant_id = Column(Integer, ForeignKey("product_variants.id"))
    product_name = Column(String(200), nullable=False)
    variant_name = Column(String(120))
    quantity = Column(Integer, nullable=False)
    unit_price = Column(Numeric(10, 2), nullable=False)
    total_price = Column(Numeric(10, 2), nullable=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)

    order = relationship("Order", back_populates="items")
