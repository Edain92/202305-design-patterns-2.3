import { ConcreteTicket } from "../Ticket/concreteTicket";
import { mockedTicketInfo } from "../../mocks/index";

describe('Test - ConcreteTicket', () => {

  let concreteTicket: ITicket;

  beforeAll(() => {
    concreteTicket = new ConcreteTicket(mockedTicketInfo);
  });

  test('GIVEN a ConcreteTicket, WHEN checking() is called THEN it should log the ticket information', () => {
    expect(concreteTicket.checkin()).toStrictEqual(mockedTicketInfo)
  });

});
