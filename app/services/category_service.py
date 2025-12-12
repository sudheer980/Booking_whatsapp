from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.category import Category
from app.schemas.category import CategoryCreate, CategoryUpdate


class CategoryService:
    @staticmethod
    async def list_categories(db: AsyncSession):
        result = await db.execute(select(Category))
        return result.scalars().all()

    @staticmethod
    async def create_category(db: AsyncSession, data: CategoryCreate) -> Category:
        category = Category(**data.dict())
        db.add(category)
        await db.flush()
        return category

    @staticmethod
    async def update_category(db: AsyncSession, category_id: int, data: CategoryUpdate) -> Category | None:
        result = await db.execute(select(Category).where(Category.id == category_id))
        category = result.scalar_one_or_none()
        if not category:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(category, field, value)
        await db.flush()
        return category

    @staticmethod
    async def delete_category(db: AsyncSession, category_id: int) -> None:
        await db.execute(delete(Category).where(Category.id == category_id))
