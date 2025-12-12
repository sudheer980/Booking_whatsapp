from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import admin_required
from app.db.session import get_db
from app.schemas.support import SupportMessageCreate, SupportMessageOut, SupportTicketCreate, SupportTicketOut, SupportTicketUpdate
from app.services.support_service import SupportService
from app.utils.exceptions import not_found

router = APIRouter(prefix="/api/admin/support", tags=["admin-support"], dependencies=[Depends(admin_required)])


@router.get("/tickets", response_model=list[SupportTicketOut])
async def list_tickets(db: AsyncSession = Depends(get_db)):
    return await SupportService.list_tickets(db)


@router.post("/tickets", response_model=SupportTicketOut)
async def create_ticket(payload: SupportTicketCreate, db: AsyncSession = Depends(get_db), admin=Depends(admin_required)):
    return await SupportService.create_ticket(db, admin.id, payload)


@router.patch("/tickets/{ticket_id}", response_model=SupportTicketOut)
async def update_ticket(ticket_id: int, payload: SupportTicketUpdate, db: AsyncSession = Depends(get_db)):
    ticket = await SupportService.update_ticket(db, ticket_id, payload)
    if not ticket:
        raise not_found("Ticket")
    return ticket


@router.post("/tickets/{ticket_id}/messages", response_model=SupportMessageOut)
async def add_message(ticket_id: int, payload: SupportMessageCreate, db: AsyncSession = Depends(get_db), admin=Depends(admin_required)):
    return await SupportService.add_message(db, ticket_id, admin.id, payload)
