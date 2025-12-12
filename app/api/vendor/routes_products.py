from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.schemas.product import ProductCreate, ProductOut, ProductUpdate
from app.services.product_service import ProductService
from app.services.shop_service import ShopService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/vendor/products", tags=["vendor-products"], dependencies=[Depends(vendor_required)])


@router.get("", response_model=list[ProductOut])
async def list_products(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    shops = await ShopService.list_vendor_shops(db, current_vendor.id)
    shop_ids = [s.id for s in shops]
    products = []
    for shop_id in shop_ids:
        products.extend(await ProductService.list_products_for_shop(db, shop_id))
    return products


@router.post("", response_model=ProductOut)
async def create_product(payload: ProductCreate, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    shop = await ShopService.get_shop(db, payload.shop_id)
    if not shop or shop.owner_id != current_vendor.id:
        raise not_found("Shop")
    return await ProductService.create_product(db, payload)


@router.put("/{product_id}", response_model=ProductOut)
async def update_product(product_id: int, payload: ProductUpdate, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    product = await ProductService.get_product(db, product_id)
    if not product:
        raise not_found("Product")
    shop = await ShopService.get_shop(db, product.shop_id)
    if not shop or shop.owner_id != current_vendor.id:
        raise not_found("Product")
    return await ProductService.update_product(db, product_id, payload)


@router.delete("/{product_id}")
async def delete_product(product_id: int, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    product = await ProductService.get_product(db, product_id)
    if not product:
        raise not_found("Product")
    shop = await ShopService.get_shop(db, product.shop_id)
    if not shop or shop.owner_id != current_vendor.id:
        raise not_found("Product")
    await ProductService.delete_product(db, product_id)
    return {"message": "Deleted"}
