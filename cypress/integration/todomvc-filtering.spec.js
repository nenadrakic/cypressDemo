/// <reference types="cypress" />

import { TodoPage } from "./page-objects/todo-page";

describe('filtering', function() {
  
  const todoPage = new TodoPage

    beforeEach(() => {

      todoPage.navigate();
      todoPage.addToDo('Clean room')
      todoPage.addToDo('Learn JavaScript')
      todoPage.addToDo('Use Cypress')

      //cy.get('.todo-list li:nth-child(2) .toggle').click()
      todoPage.clickOnTheToggle(2)
    })
  
    it.only('should filter "Active" correctly', () => {
      cy.contains('Active').click()
      cy.get('.todo-list li').should('have.length', 2)
    })
  
    it('should filter "Completed" correctly', () => {
      cy.contains('Completed').click()
      cy.get('.todo-list li').should('have.length', 1)
    })
  
    it('should filter "All" correctly', () => {
      cy.contains('All').click()
      cy.get('.todo-list li').should('have.length', 3)
    })
  })