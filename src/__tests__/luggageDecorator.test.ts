import { mockedTicketInfo, mockedTicketInfoWithLuggage } from "../../mocks/index";
import { BaseDecorator } from "../Decorators/baseDecorator";
import { LuggageDecorator } from "../Decorators/luggageDecorator";
import { ConcreteTicket } from "../Ticket/concreteTicket";

describe('Test - LuggageDecorator', () => {
  let luggageDecorator: LuggageDecorator;

  const concreteTicket: Ticket = new ConcreteTicket(mockedTicketInfo)
  const baseDecorator: BaseDecorator = new BaseDecorator(concreteTicket)

  beforeAll(() => {
    luggageDecorator = new LuggageDecorator(baseDecorator)
  });

  test('GIVEN a LuggageDecorator, WHEN checkin is called THEN should add a new property', () => {
    expect(luggageDecorator.checkin()).toStrictEqual(mockedTicketInfoWithLuggage)
  });
});
