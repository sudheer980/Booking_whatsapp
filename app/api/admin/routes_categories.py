from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.category import CategoryCreate, CategoryOut, CategoryUpdate
from app.services.category_service import CategoryService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/categories", tags=["admin-categories"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[CategoryOut])
async def list_categories(db: AsyncSession = Depends(get_db)):
    return await CategoryService.list_categories(db)


@router.post("", response_model=CategoryOut)
async def create_category(payload: CategoryCreate, db: AsyncSession = Depends(get_db)):
    return await CategoryService.create_category(db, payload)


@router.put("/{category_id}", response_model=CategoryOut)
async def update_category(category_id: int, payload: CategoryUpdate, db: AsyncSession = Depends(get_db)):
    category = await CategoryService.update_category(db, category_id, payload)
    if not category:
        raise not_found("Category")
    return category


@router.delete("/{category_id}")
async def delete_category(category_id: int, db: AsyncSession = Depends(get_db)):
    await CategoryService.delete_category(db, category_id)
    return {"message": "Deleted"}
