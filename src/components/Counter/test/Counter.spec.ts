/// <reference types="cypress" />
/* eslint-disable react/jsx-filename-extension */

describe('Counter tests', () => {
  it('click counter', () => {
    cy.visit('/');
    cy.get('[data-cy=counter-button]').click();
    cy.get('[data-cy=counter-value]').contains(1);
  });
});
