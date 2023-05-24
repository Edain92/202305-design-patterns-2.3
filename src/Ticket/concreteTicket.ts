export class ConcreteTicket implements Ticket {
  #ticket: TicketType

  constructor(ticketData: { code: string, origin: string, destination: string, date: Date }) {
    this.#ticket = ticketData
  }

  checkin() {
    return this.#ticket
  }

}