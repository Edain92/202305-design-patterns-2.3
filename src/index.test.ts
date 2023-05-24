describe('GIVEN a ', () => {

  let concreteTicket: Ticket;

  const expectedMockTicketInfo = {
    code: "AF4457",
    origin: "ORY",
    destination: "HND",
    date: new Date('2023-12-21')
  }

  beforeAll(() => {
    concreteTicket = new ConcreteTicket(expectedMockTicketInfo);
  });

  test('GIVEN a ConcreteTicket, WHEN checking() is called THEN it should log the ticket information', () => {
    expect(concreteTicket.checkin()).toStrictEqual(expectedMockTicketInfo)
  });

});
