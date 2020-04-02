/// <reference types="cypress" />

export class TodoPage {

    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addToDo(todoText){
        cy.get('.new-todo', {timeout: 6000}).type(todoText + "{enter}")
    }

    validateTodoText(todoIndex, expectedText){

        cy.get(`.todo-list li:nyh-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    clickOnTheToggle(index){
        cy.get(`.todo-list li:nth-child(${index}) .toggle`).click()
    }
}