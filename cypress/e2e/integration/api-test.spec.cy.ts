describe('API Validation Test', () => {
    it.only('valid phone number', () => {
      const phoneNumber = '030912138';
      cy.api({
        method: 'GET',
        url: `https://api.testing.powerus.de/validate/phone-number?phoneNumber=${phoneNumber}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('isValid').to.be.true;
      });
    });
    it.only('invalid phone number', () => {
        const phoneNumber = '03091';
        cy.api({
          method: 'GET',
          url: `https://api.testing.powerus.de/validate/phone-number?phoneNumber=${phoneNumber}`,
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('isValid').to.be.false;
        });
      });
  });