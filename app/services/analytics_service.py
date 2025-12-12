from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.analytics import SalesDailySummary


class AnalyticsService:
    @staticmethod
    async def list_sales_summary(db: AsyncSession, shop_id: int | None = None):
        query = select(SalesDailySummary)
        if shop_id:
            query = query.where(SalesDailySummary.shop_id == shop_id)
        result = await db.execute(query)
        return result.scalars().all()
