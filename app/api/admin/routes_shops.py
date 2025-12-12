from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.shop import ShopCreate, ShopOut, ShopUpdate
from app.services.shop_service import ShopService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/shops", tags=["admin-shops"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[ShopOut])
async def list_shops(db: AsyncSession = Depends(get_db)):
    return await ShopService.list_shops(db)


@router.post("", response_model=ShopOut)
async def create_shop(payload: ShopCreate, db: AsyncSession = Depends(get_db)):
    return await ShopService.create_shop(db, payload)


@router.put("/{shop_id}", response_model=ShopOut)
async def update_shop(shop_id: int, payload: ShopUpdate, db: AsyncSession = Depends(get_db)):
    shop = await ShopService.update_shop(db, shop_id, payload)
    if not shop:
        raise not_found("Shop")
    return shop
