import { BaseDecorator } from "./baseDecorator";

export class LuggageDecorator extends BaseDecorator {
  #ticket: ITicket
  #decoratedTicket: Ticket
  #luggage: number

  constructor(ticket: ITicket, luggage: number) {
    super(ticket)

    this.#ticket = ticket
    this.#decoratedTicket = this.#ticket.checkin();
    this.#luggage = luggage
  }

  checkin(): Ticket {
    this.#addLugagge()

    return this.#decoratedTicket
  }

  #addLugagge() {
    this.#decoratedTicket.luggageCount = this.#luggage
  }
}
