describe('Cadastro de WOD', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB')
    })

    it('Cadastrar um wod completo', function() {                      
    
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/wods')
        cy.waitVisible('#btn-add-wod')
        cy.get('#btn-add-wod').click()
        cy.get('#nome-wod-input').type('WOD TESTE AUTOMATIZADO' + Math.floor(Math.random() * 100000000 + 1))
        cy.waitVisible('#tipo-wod-select')
        cy.get('#tipo-wod-select').select('1')
        cy.get('#text-Along-Mobil').type('Alongamento')
        cy.get('#textParteTecSkill').type('Tecnica')
        cy.get('#textComplexEmom').type('Complex')
        cy.get('#textWod').type('WOD')
        cy.get('#btnSalvar').click({force:true})
        
        cy.validaNotificacao('sucess')

    })
})
