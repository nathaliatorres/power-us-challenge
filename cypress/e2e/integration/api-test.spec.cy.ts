describe('API Validation Test', () => {
    it('valid phone number', () => {
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
    it('invalid phone number', () => {
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
        it('should validate email format', () => {
          const validEmail = 'test@example.com';
      
          cy.api({
            method: 'GET',
            url: `https://api.testing.powerus.de/validate/email?email=${validEmail}`,
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('isValid').to.be.true;
          });
        });
      
        it('should handle invalid email format', () => {
          const invalidEmail = 'invalidemail';

          cy.api({
            method: 'GET',
            url: `https://api.testing.powerus.de/validate/email?email=${invalidEmail}`,
            headers: {
              'Content-Type': 'application/json',
            },
            failOnStatusCode: false,
          }).then((response) => {
            expect(response.status).to.equal(200); 
            expect(response.body).to.have.property('isValid').to.be.false;
          });
        });
  });