from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.user import UserCreate, UserOut, UserUpdate
from app.services.user_service import UserService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/vendors", tags=["admin-vendors"], dependencies=[Depends(admin_required)])


@router.get("", response_model=list[UserOut])
async def list_vendors(db: AsyncSession = Depends(get_db)):
    return await UserService.list_vendors(db)


@router.post("", response_model=UserOut)
async def create_vendor(payload: UserCreate, db: AsyncSession = Depends(get_db)):
    return await UserService.create_vendor(db, payload)


@router.put("/{vendor_id}", response_model=UserOut)
async def update_vendor(vendor_id: int, payload: UserUpdate, db: AsyncSession = Depends(get_db)):
    vendor = await UserService.update_user(db, vendor_id, payload)
    if not vendor:
        raise not_found("Vendor")
    return vendor
