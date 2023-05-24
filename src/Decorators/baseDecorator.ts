export class BaseDecorator implements ITicket {
  #ticket: ITicket

  constructor(ticket: ITicket) {
    this.#ticket = ticket
  }

  checkin() {
    return this.#ticket.checkin();
  }
}
