from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import vendor_required
from app.db.session import get_db
from app.schemas.support import SupportMessageCreate, SupportMessageOut, SupportTicketCreate, SupportTicketOut
from app.services.support_service import SupportService

router = APIRouter(prefix="/api/vendor/support", tags=["vendor-support"], dependencies=[Depends(vendor_required)])


@router.get("/tickets", response_model=list[SupportTicketOut])
async def list_tickets(current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    return await SupportService.list_tickets(db, created_by_id=current_vendor.id)


@router.post("/tickets", response_model=SupportTicketOut)
async def create_ticket(payload: SupportTicketCreate, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    return await SupportService.create_ticket(db, current_vendor.id, payload)


@router.post("/tickets/{ticket_id}/messages", response_model=SupportMessageOut)
async def add_message(ticket_id: int, payload: SupportMessageCreate, current_vendor=Depends(vendor_required), db: AsyncSession = Depends(get_db)):
    return await SupportService.add_message(db, ticket_id, current_vendor.id, payload)
