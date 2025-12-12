from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.shop import Shop
from app.schemas.shop import ShopCreate, ShopUpdate


class ShopService:
    @staticmethod
    async def list_shops(db: AsyncSession):
        result = await db.execute(select(Shop))
        return result.scalars().all()

    @staticmethod
    async def list_vendor_shops(db: AsyncSession, owner_id: int):
        result = await db.execute(select(Shop).where(Shop.owner_id == owner_id))
        return result.scalars().all()

    @staticmethod
    async def get_shop(db: AsyncSession, shop_id: int) -> Shop | None:
        result = await db.execute(select(Shop).where(Shop.id == shop_id))
        return result.scalar_one_or_none()

    @staticmethod
    async def create_shop(db: AsyncSession, data: ShopCreate) -> Shop:
        shop = Shop(**data.dict())
        db.add(shop)
        await db.flush()
        return shop

    @staticmethod
    async def update_shop(db: AsyncSession, shop_id: int, data: ShopUpdate) -> Shop | None:
        result = await db.execute(select(Shop).where(Shop.id == shop_id))
        shop = result.scalar_one_or_none()
        if not shop:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(shop, field, value)
        await db.flush()
        return shop
