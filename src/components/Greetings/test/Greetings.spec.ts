/// <reference types="cypress" />
/* eslint-disable react/jsx-filename-extension */

describe('Greetings test', () => {
  it('is my name philipp', () => {
    cy.visit('/');
    cy.get('[data-cy=greetings-name]').contains('Philipp');
  });
});
