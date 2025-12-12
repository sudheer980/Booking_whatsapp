from typing import Any, List, Sequence

from fastapi import Query
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession


async def paginate(db: AsyncSession, model, page: int = Query(1, ge=1), page_size: int = Query(20, ge=1, le=100)):
    total_result = await db.execute(select(func.count()).select_from(model))
    total = total_result.scalar_one()
    result = await db.execute(select(model).offset((page - 1) * page_size).limit(page_size))
    items: Sequence[Any] = result.scalars().all()
    return {"items": items, "total": total, "page": page, "page_size": page_size}
