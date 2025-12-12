from datetime import date
from typing import List

from pydantic import BaseModel


class SalesSummary(BaseModel):
    summary_date: date
    total_orders: int
    total_sales: float
    total_commission: float
    total_customers: int

    class Config:
        orm_mode = True


class SalesSummaryResponse(BaseModel):
    data: List[SalesSummary]
