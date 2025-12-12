from datetime import datetime, date

from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, Numeric

from app.db.session import Base


class SalesDailySummary(Base):
    __tablename__ = "sales_daily_summary"

    id = Column(Integer, primary_key=True, autoincrement=True)
    shop_id = Column(Integer, ForeignKey("shops.id"))
    summary_date = Column(Date, nullable=False)
    total_orders = Column(Integer, nullable=False, default=0)
    total_sales = Column(Numeric(12, 2), nullable=False, default=0)
    total_commission = Column(Numeric(12, 2), nullable=False, default=0)
    total_customers = Column(Integer, nullable=False, default=0)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow, nullable=False)
