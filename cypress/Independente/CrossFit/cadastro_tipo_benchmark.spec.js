describe('Tipo de benchmark ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente() 
        cy.visit('novotreino/pt/crossfit/cadastros/tipos-benchmark')
    })

    it('Cadastro de tipo de benchmark', function(){
    cy.get('#adicionarTipoBenchmark').click()  
    cy.get('div > .modal-body > pacto-input > .form-group > .form-control').type(Math.random().toString(36).substring(2, 15))
    cy.get('.modal-content > pacto-tipo-benchmark-edit-modal > div > .modal-footer > .btn-primary').click() 
    cy.contains('Tipo benchmark criado com sucesso.')  
    })

    it('Cadastro de tipo de benchmark sem o nome', function(){
    cy.get('#adicionarTipoBenchmark').click()  
    cy.get('.modal-content > pacto-tipo-benchmark-edit-modal > div > .modal-footer > .btn-primary').click() 
    cy.contains('Campos obrigatorio não preenchido!')  
    })
})    
