import { BaseDecorator } from "../Decorators/baseDecorator";
import { mockedTicketInfo } from "../../mocks/index"
import { ConcreteTicket } from "../Ticket/concreteTicket";

describe('Test - BaseDecorator', () => {
  let baseDecorator: BaseDecorator;
  const concreteTicket: Ticket = new ConcreteTicket(mockedTicketInfo)

  beforeAll(() => {
    baseDecorator = new BaseDecorator(concreteTicket)
  });

  test('GIVEN a BaseDecorator, WHEN checking method is called THEN should return an instance of "ConcreteTicket"', () => {
    expect(baseDecorator.checkin()).toBeInstanceOf(ConcreteTicket)
  });
});
