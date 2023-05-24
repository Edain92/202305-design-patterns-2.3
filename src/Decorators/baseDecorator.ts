export class BaseDecorator implements Ticket {
  #ticket: Ticket

  constructor(ticket: Ticket) {
    this.#ticket = ticket
  }

  checkin() {
    return this.#ticket.checkin();
  }
}
