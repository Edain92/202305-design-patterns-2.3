export class ConcreteTicket implements ITicket {
  ticket: Ticket

  constructor(ticketData: Ticket) {
    this.ticket = ticketData
  }

  checkin() {
    return this.ticket
  }

}
