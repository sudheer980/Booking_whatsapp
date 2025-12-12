from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.product import ProductCreate, ProductOut, ProductUpdate
from app.services.product_service import ProductService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/products", tags=["admin-products"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[ProductOut])
async def list_products(db: AsyncSession = Depends(get_db)):
    return await ProductService.list_products(db)


@router.post("", response_model=ProductOut)
async def create_product(payload: ProductCreate, db: AsyncSession = Depends(get_db)):
    return await ProductService.create_product(db, payload)


@router.put("/{product_id}", response_model=ProductOut)
async def update_product(product_id: int, payload: ProductUpdate, db: AsyncSession = Depends(get_db)):
    product = await ProductService.update_product(db, product_id, payload)
    if not product:
        raise not_found("Product")
    return product


@router.delete("/{product_id}")
async def delete_product(product_id: int, db: AsyncSession = Depends(get_db)):
    await ProductService.delete_product(db, product_id)
    return {"message": "Deleted"}
