import { BaseDecorator } from "./baseDecorator";

export class LuggageDecorator extends BaseDecorator {
  #decoratedTicket: Ticket

  constructor(ticket: Ticket) {
    super(ticket)
    this.#decoratedTicket = ticket
  }

  checkin(): TicketType {
    this.#addLugagge()

    return this.#decoratedTicket.checkin();
  }

  #addLugagge() {
    this.#decoratedTicket.luggageCount = this.#decoratedTicket.luggageCount + 1;
  }
}