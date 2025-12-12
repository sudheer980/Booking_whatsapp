from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.analytics import SalesSummaryResponse, SalesSummary
from app.services.analytics_service import AnalyticsService

router = APIRouter(prefix="/api/admin/analytics", tags=["admin-analytics"], dependencies=[Depends(admin_required)])


@router.get("/sales", response_model=SalesSummaryResponse)
async def sales_summary(db: AsyncSession = Depends(get_db)):
    summaries = await AnalyticsService.list_sales_summary(db)
    data = [SalesSummary.from_orm(s) for s in summaries]
    return {"data": data}
