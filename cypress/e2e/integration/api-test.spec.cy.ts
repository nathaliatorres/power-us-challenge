describe('API Validation Test', () => {
    it('Validate phone number', () => {
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

    it('Handle invalid phone number', () => {
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
      
        it('Validate email format', () => {
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
      
        it('Handle invalid email format', () => {
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

        it('Make a POST request to company contact API', () => {
            cy.api({
              method: 'POST',
              url: 'https://api.testing.powerus.de/companies/company-contact',
              headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'de',
                'content-type': 'application/json',
                'origin-url': 'https://testing.powerus.de/mitarbeitersuche?step=contact-information',
                'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile': '?1',
                'sec-ch-ua-platform': '"Android"',
                'x-app-version': '685f2b5f1a7a762c9670f48aa758f4ee36adcbc5',
                'x-device-info-browser': 'Chrome',
                'x-device-info-browser-version': '120.0.0.0',
                'x-device-info-device': 'Nexus Phone',
                'x-device-info-device-type': 'mobile',
                'x-device-info-os': 'Android',
                'x-device-info-os-version': 'unknown',
                'x-platform': 'web',
                'Referer': 'https://testing.powerus.de/mitarbeitersuche?step=contact-information',
                'Referrer-Policy': 'no-referrer-when-downgrade'
              },
              body: {
                firstName: 'Jon',
                lastName: 'Lange',
                email: 'jon@email.com',
                phone: '030912138',
                company: 'Test Company',
                industrySectors: ['installation-mechanic'],
                jobsToFill: '3-5',
                searchIn: 'Berlin',
                source: 'fuer-arbeitgeber'
              },
            }).then((response) => {
              expect(response.status).to.equal(201);
              expect(response.body).to.have.property('id'); 
            });
          });
  });