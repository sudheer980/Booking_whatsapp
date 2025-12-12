from sqlalchemy import select, update
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import get_password_hash
from app.models.user import User, UserRole
from app.schemas.user import UserCreate, UserUpdate


class UserService:
    @staticmethod
    async def create_vendor(db: AsyncSession, data: UserCreate) -> User:
        user = User(
            full_name=data.full_name,
            email=data.email,
            phone=data.phone,
            password_hash=get_password_hash(data.password),
            role=data.role,
        )
        db.add(user)
        await db.flush()
        return user

    @staticmethod
    async def list_vendors(db: AsyncSession):
        result = await db.execute(select(User).where(User.role == UserRole.vendor))
        return result.scalars().all()

    @staticmethod
    async def update_user(db: AsyncSession, user_id: int, data: UserUpdate) -> User | None:
        result = await db.execute(select(User).where(User.id == user_id))
        user = result.scalar_one_or_none()
        if not user:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(user, field, value)
        await db.flush()
        return user
