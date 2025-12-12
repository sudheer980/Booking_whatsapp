from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.support import SupportTicket, SupportMessage
from app.schemas.support import SupportTicketCreate, SupportTicketUpdate, SupportMessageCreate


class SupportService:
    @staticmethod
    async def list_tickets(db: AsyncSession, created_by_id: int | None = None):
        query = select(SupportTicket)
        if created_by_id:
            query = query.where(SupportTicket.created_by_id == created_by_id)
        result = await db.execute(query)
        return result.scalars().unique().all()

    @staticmethod
    async def create_ticket(db: AsyncSession, user_id: int, data: SupportTicketCreate) -> SupportTicket:
        ticket = SupportTicket(created_by_id=user_id, **data.dict())
        db.add(ticket)
        await db.flush()
        return ticket

    @staticmethod
    async def update_ticket(db: AsyncSession, ticket_id: int, data: SupportTicketUpdate) -> SupportTicket | None:
        result = await db.execute(select(SupportTicket).where(SupportTicket.id == ticket_id))
        ticket = result.scalar_one_or_none()
        if not ticket:
            return None
        for field, value in data.dict(exclude_unset=True).items():
            setattr(ticket, field, value)
        await db.flush()
        return ticket

    @staticmethod
    async def add_message(db: AsyncSession, ticket_id: int, sender_id: int, data: SupportMessageCreate) -> SupportMessage:
        message = SupportMessage(ticket_id=ticket_id, sender_id=sender_id, message=data.message)
        db.add(message)
        await db.flush()
        return message
