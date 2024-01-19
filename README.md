# PowerUs - Assignment

This repo contains some of the End-To-End and API tests of the Recruiting Bible application. Since it is a web application, the chosen tool is Cypress, due to its easy configuration, adaptability to any front-end application and focus on E2E tests.

More about Cypress: https://docs.cypress.io/guides/overview/why-cypress

### Pre Requirements
It is required to have Node.js and npm installed to run this project.
I used versions v21.4.0 and 10.2.4 of Node.js and npm, respectively. I suggest you use the same or later versions.

## Running the tests locally:
 - Clone the repo
 - Open in Visual Studio Code (or any other IDE of your choice)
 - From the project root, run the command `npm install --save-dev cypress@13.6.1`
 - After that, run `npx cypress open` command to open Cypress for the first time
 - Click on `e2e.spec.cy.ts` files to run the E2E tests, and `api-tests.spec.cy.ts` to run the API tests using the UI view. Or run `npx cypress run` on the terminal.

 ## Running the tests on a CI Pipeline:
In an ideal scenario, the commit would not go directly to the master branch. Instead, tests could be linked to a Pull Request check. 
Therefore, the test pipeline would run as a blocking factor for Pull Request merges.

As an example, I have created the pipeline below to demonstrate how this could be achieved:

 - Go to https://github.com/nathaliatorres/power-us-challenge/actions
 - Click on the most recent commit
 - Click the button `re-run all jobs` and confirm the action
