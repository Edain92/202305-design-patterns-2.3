type TicketType = {
  code: string,
  origin: string,
  destination: string,
  date: Date,
  luggageCount?: Number
}

interface Ticket {
  checkin(): TickeType
}