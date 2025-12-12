from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel

from app.models.order import OrderStatus, PaymentStatus


class OrderItemCreate(BaseModel):
    product_id: int
    variant_id: Optional[int]
    product_name: str
    variant_name: Optional[str]
    quantity: int
    unit_price: float
    total_price: float


class OrderCreate(BaseModel):
    customer_id: Optional[int]
    shop_id: int
    shipping_address_id: Optional[int]
    subtotal_amount: float
    commission_rate: float = 10.0
    total_amount: float
    payment_status: PaymentStatus = PaymentStatus.pending
    order_status: OrderStatus = OrderStatus.placed
    items: List[OrderItemCreate]
    notes: Optional[str] = None


class OrderUpdate(BaseModel):
    payment_status: Optional[PaymentStatus]
    order_status: Optional[OrderStatus]
    delivery_tracking_number: Optional[str]
    delivery_partner: Optional[str]
    tracking_url: Optional[str]
    notes: Optional[str]


class OrderItemOut(OrderItemCreate):
    id: int

    class Config:
        orm_mode = True


class OrderOut(BaseModel):
    id: int
    order_number: str
    customer_id: Optional[int]
    shop_id: int
    subtotal_amount: float
    commission_rate: float
    commission_amount: float
    vendor_amount: float
    total_amount: float
    currency: str
    payment_status: PaymentStatus
    order_status: OrderStatus
    placed_at: Optional[datetime]
    notes: Optional[str]
    items: List[OrderItemOut]

    class Config:
        orm_mode = True
