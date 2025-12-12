from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.schemas.auth import LoginRequest, Token
from app.services.auth_service import AuthService
from app.db.session import get_db

router = APIRouter(prefix="/api/auth", tags=["auth"])


@router.post("/login", response_model=Token)
async def login(payload: LoginRequest, db: AsyncSession = Depends(get_db)):
    token = await AuthService.authenticate(db, payload.email, payload.password)
    return {"access_token": token, "token_type": "bearer"}
