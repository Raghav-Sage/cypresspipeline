// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login_za', () => { 
    
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    cy.visit(Cypress.env('url'))
    cy.wait(10000)
    cy.origin('https://id-shadow.sage.com', { args: { email,password } }, ({ email,password }) => 
            {
            cy.get('input[type="email"]').type(email)
            cy.contains('Continue') .click()
            cy.get('input[id="password"]').type(password)
            cy.get("button[type='submit']").click()
            cy.wait(3000)
    }); 
  })

  Cypress.Commands.add('waitForElement', (selector, timeout = 15000) => {
        cy.get(selector, { timeout }).should('be.visible');
      });