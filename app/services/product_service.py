from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.product import Product, ProductImage, ProductVariant
from app.schemas.product import ProductCreate, ProductUpdate, ProductVariantCreate, ProductImageCreate


class ProductService:
    @staticmethod
    async def list_products(db: AsyncSession):
        result = await db.execute(select(Product))
        return result.scalars().all()

    @staticmethod
    async def list_products_for_shop(db: AsyncSession, shop_id: int):
        result = await db.execute(select(Product).where(Product.shop_id == shop_id))
        return result.scalars().all()

    @staticmethod
    async def get_product(db: AsyncSession, product_id: int) -> Product | None:
        result = await db.execute(select(Product).where(Product.id == product_id))
        return result.scalar_one_or_none()

    @staticmethod
    async def create_product(db: AsyncSession, data: ProductCreate) -> Product:
        product = Product(
            shop_id=data.shop_id,
            name=data.name,
            slug=data.slug,
            description=data.description,
            main_image_url=data.main_image_url,
            status=data.status,
            is_active=data.is_active,
        )
        db.add(product)
        await db.flush()
        await ProductService._sync_variants(db, product, data.variants or [])
        await ProductService._sync_images(db, product, data.images or [])
        return product

    @staticmethod
    async def update_product(db: AsyncSession, product_id: int, data: ProductUpdate) -> Product | None:
        result = await db.execute(select(Product).where(Product.id == product_id))
        product = result.scalar_one_or_none()
        if not product:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(product, field, value)
        await db.flush()
        return product

    @staticmethod
    async def delete_product(db: AsyncSession, product_id: int) -> None:
        await db.execute(delete(Product).where(Product.id == product_id))

    @staticmethod
    async def _sync_variants(db: AsyncSession, product: Product, variants: list[ProductVariantCreate]):
        for variant in variants:
            pv = ProductVariant(product_id=product.id, **variant.dict())
            db.add(pv)
        await db.flush()

    @staticmethod
    async def _sync_images(db: AsyncSession, product: Product, images: list[ProductImageCreate]):
        for image in images:
            pi = ProductImage(product_id=product.id, **image.dict())
            db.add(pi)
        await db.flush()
