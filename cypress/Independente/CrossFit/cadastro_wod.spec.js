describe('cadastro de WOD completo. Exceto: foto', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()
        cy.visit('novotreino/pt/crossfit/cadastros/wods')
    })

    it('Cadastrar um wod completo', function() {                      
        cy.get('#btn-add-wod').click()
        cy.get('#nome-wod-input').type('WOD TESTE AUTOMATIZADO' + Math.floor(Math.random() * 100000000 + 1))
        cy.get('#tipo-wod-select').select('1')
        cy.get('#text-Along-Mobil').type('Alongamento')
        cy.get('#textParteTecSkill').type('Tecnica')
        cy.get('#textComplexEmom').type('Complex')
        cy.get('#textWod').type('WOD')
        cy.get('#btnSalvar').click({force:true})
        cy.get('.notify-success').should('contain', 'criado com sucesso.'); 
    })

    it('Tenta cadastrar um WOD com o mesmo nome', function(){                       
        cy.get('#btn-add-wod').click()
        cy.get('#nome-wod-input').type('WOD TESTE AUTOMATIZADO')
        cy.get('#tipo-wod-select').select('1')
        cy.get('#text-Along-Mobil').type('Alongamento')
        cy.get('#textParteTecSkill').type('Tecnica')
        cy.get('#textComplexEmom').type('Complex')
        cy.get('#textWod').type('WOD')
        cy.get('#btnSalvar').click({force:true})
        cy.get('#help-message-duplicated-entity-name').should('contain', 'Já existe um cadastro com esse mesmo nome');
    })

    it('Tenta cadastrar um WOD sem o campo WOD', function(){
        cy.get('#btn-add-wod').click()
        cy.get('#nome-wod-input').type('WOD TESTE AUTOMATIZADO')
        cy.get('#tipo-wod-select').select('1')
        cy.get('#text-Along-Mobil').type('Alongamento')
        cy.get('#textParteTecSkill').type('Tecnica')
        cy.get('#textComplexEmom').type('Complex')
        cy.get('#btnSalvar').click({force:true})
        cy.get('.notify-error').should('contain', 'Campos obrigatórios não preenchido.');
    })
})
