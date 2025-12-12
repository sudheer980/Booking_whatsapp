from typing import Optional

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import verify_password, create_access_token
from app.models.user import User


class AuthService:
    @staticmethod
    async def authenticate(db: AsyncSession, email: str, password: str) -> str:
        result = await db.execute(select(User).where(User.email == email))
        user: Optional[User] = result.scalar_one_or_none()
        if not user or not verify_password(password, user.password_hash):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
        token = create_access_token({"sub": str(user.id), "role": user.role.value if hasattr(user.role, "value") else user.role})
        return token
