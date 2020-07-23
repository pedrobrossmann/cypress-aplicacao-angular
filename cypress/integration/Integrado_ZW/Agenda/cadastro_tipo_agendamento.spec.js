const faker = require('faker-br');

describe('Tipo de agendamento ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB')
        
    })

    it(`Cadastro duração predefinida :` , function(){ 
        
        var random1 = faker.phone.phoneNumber();

        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/tipo-agendamento')  
        cy.waitVisible('#btn-novo-tipo-agendamento')
        cy.get('#btn-novo-tipo-agendamento').click()
        cy.get('#nome-tipo-agendamento-input').type('Tipo Agendamento ' + random1)
        cy.get('#select-comportamento').select('AVALIACAO_FISICA')
        cy.get('#btn-selecione-cor').click()
        cy.get('#cor-0').click()
        cy.get('#select-tipo-duracao').select('DURACAO_PREDEFINIDA')
        cy.get('#input-duracao-pre-definida').type('01:00')
        cy.get('#status-tipo-agendamento').check('on')
        cy.waitVisible('#btn-add-tipo-agendamento')
        cy.get('#btn-add-tipo-agendamento').click()
        
        cy.validaNotificacao('sucesso')
    })

    it(`Cadastro duração livre:` , function(){  
        var random2 = faker.phone.phoneNumber(); 

        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/tipo-agendamento')
        cy.waitVisible('#btn-novo-tipo-agendamento')
        cy.get('#btn-novo-tipo-agendamento').click()
        cy.get('#nome-tipo-agendamento-input').type('Tipo Agendamento ' +random2)
        cy.get('#select-comportamento').select('AVALIACAO_FISICA')
        cy.get('#btn-selecione-cor').click()
        cy.get('#cor-0').click()
        cy.get('#status-tipo-agendamento').check('on')
        cy.waitVisible('#btn-add-tipo-agendamento')
        cy.get('#btn-add-tipo-agendamento').click()
        
        cy.validaNotificacao('sucesso')
    })

    it(`Agendamento sem cor e nome `, function(){   
        var random3 = faker.phone.phoneNumber();

        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/tipo-agendamento')
        cy.waitVisible('#btn-novo-tipo-agendamento')
        cy.get('#btn-novo-tipo-agendamento').click()
        cy.get('#btn-add-tipo-agendamento').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Selecione uma cor.')
        })

        cy.get('#btn-selecione-cor').click()
        cy.get('#cor-0').click()
        cy.get('#status-tipo-agendamento').check('on')
        cy.get('#btn-add-tipo-agendamento').click()

        cy.validaNotificacao('erro')
        
        cy.get('#nome-tipo-agendamento-input').type('Tipo Agendamento ' + random3)
        cy.get('#btn-add-tipo-agendamento').click()
        
        cy.validaNotificacao('sucesso')
    }) 
})
