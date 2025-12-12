from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.services.whatsapp_service import WhatsAppService

router = APIRouter(prefix="/api/whatsapp", tags=["whatsapp"])


@router.post("/message")
async def whatsapp_message(external_id: str, message: str, db: AsyncSession = Depends(get_db)):
    return await WhatsAppService.handle_message(db, external_id, message)
