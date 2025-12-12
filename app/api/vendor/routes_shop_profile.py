from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.schemas.shop import ShopOut, ShopUpdate
from app.services.shop_service import ShopService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/vendor/shops", tags=["vendor-shops"], dependencies=[Depends(vendor_required)])


@router.get("", response_model=list[ShopOut])
async def list_vendor_shops(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    return await ShopService.list_vendor_shops(db, current_vendor.id)


@router.put("/{shop_id}", response_model=ShopOut)
async def update_shop(shop_id: int, payload: ShopUpdate, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    shop = await ShopService.update_shop(db, shop_id, payload)
    if not shop or shop.owner_id != current_vendor.id:
        raise not_found("Shop")
    return shop
