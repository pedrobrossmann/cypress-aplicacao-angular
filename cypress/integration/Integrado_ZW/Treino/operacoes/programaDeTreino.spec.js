/// <reference types="Cypress" />

const faker = require('faker')

beforeEach(function (){
    cy.viewport(1440, 900)
    //cy.login('TB')
    cy.visit('http://devakatsuki.pactosolucoes.com.br:8088/pt/adicionarConta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRfcGFjdG8iLCJjaGF2ZSI6IjM4NGFjZDExNzNkODUxMWY1NmM0YjI2YTMzNzQ5OWU2IiwiZXhwIjoxNTkzOTQyMzk1LCJ1c2VybmFtZSI6InBhY3RvYnIifQ.-5KAgBYY2MDJ-wgHz5B8ZicFT6yNzS7JKUsKdC9XbSQ&moduleId=NTR&modulos=ZW%2CTR%2CCRM%2CFIN%2CSLC%2CNTR%2CNAV%2CNVO%2COPB&integracaoZW=true&empresaId=1&urlapi=http%3A//devakatsuki.pactosolucoes.com.br%3A8082/TreinoWeb/prest')
})

describe('Montagem de programa de treino', () =>{
    const programa =  {
        nome: faker.random.words(3)
    }

    
    it('Novo programa', () =>{
        
        
        // cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/alunos/perfil/3')
        
        // cy.waitVisible('#btn-create-user')
        // cy.waitVisible('#criar-programa')
        // cy.get('#criar-programa').click()
        
        // cy.waitVisible('#button-criar-novo-programa')
        // cy.get('#button-criar-novo-programa > .content').click()
        
        // cy.get('#input-nome-programa').clear().type(programa.nome)
        // cy.get('pacto-modal-edicao-programa > .modal-footer > pacto-cat-button > #btn-salvar-programa').click()
        cy.visit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/alunos/perfil/19%3Forigem%3Dglobalsearh')
        cy.waitVisible('#programa-0')
        cy.get('#programa-0').click()

        cy.valueToInput('#select-atividade','#select-atividade-filter', '#select-atividade-0', 'SUPINO RETO')
        cy.get('#input-series').type('4')
        cy.get('#input-repticoes').type('12-30')
        cy.get('#input-peso').type('3040')
        cy.get('#input-descanso').type('00:30')
        cy.get('#btn-adcionar').click()

        cy.valueToInput('#select-atividade', '#select-atividade-filter', '#select-atividade-0', 'SUPINO BARRA OLIMPICA')
        cy.get('#btn-adcionar').click()

        cy.valueToInput('#select-atividade', '#select-atividade-filter', '#select-atividade-0', 'SUPINO DECLINADO (barra)')
        cy.get('#btn-adcionar').click()

        cy.valueToInput('#select-atividade','#select-atividade-filter', '#select-atividade-0', 'SUPINO INCLINADO (barra)')
        cy.get('#btn-adcionar').click()

        cy.valueToInput('#select-atividade','#select-atividade-filter', '#select-atividade-0', 'esteira')
        cy.get('#input-duracao').type('30:00')
        cy.get('#input-velocidade').type('8')
        cy.get('#input-distancia').type('3940')
        cy.get('#btn-adcionar').click()
       
    })
})