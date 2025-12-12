from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr

from app.models.user import UserRole


class UserBase(BaseModel):
    full_name: str
    email: Optional[EmailStr]
    phone: Optional[str]
    role: UserRole


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    full_name: Optional[str]
    email: Optional[EmailStr]
    phone: Optional[str]
    is_active: Optional[bool]


class UserOut(UserBase):
    id: int
    is_active: bool
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
