/ <reference types="Cypress" />

describe('Testing Wikipedia', () => {
    it('I can search for content', () => {
        cy.visit('https://www.wikipedia.org')    // Visit a page on your app  
        cy.get("input[type='search']").type('Leo Panthera')  // Query an element on that page and interact with it
        cy.get("button[type='submit']").click()  // Query an element on that page and interact with it
        cy.contains('Wyniki wyszukiwania')  // Confirm that the new state after the interaction is correct
        cy.contains('Panthera leo leo') // Confirm that the new state after the interaction is correct
    })
})