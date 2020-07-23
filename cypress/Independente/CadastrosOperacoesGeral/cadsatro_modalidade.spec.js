describe('Modalidade ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()
    })

    it('Cadastro de modalidade', function(){     
        cy.visit('novotreino/pt/treino/cadastros/modalidades')
        cy.get('#nova-modalidade').click()
        cy.get('#input-nome-modalidade').type('MODALIDADE ' + Math.floor(Math.random() * 100 + 1))
        cy.get('#cor-id-10').click()
        cy.get('#btn-salvar-modalidade').click()
        cy.contains('Modalidade criada com sucesso.')  
    })

    it('Cadastro de modalidade sem cor e nome, logo em seguida preenche as informações', function(){    
        cy.visit('novotreino/pt/treino/cadastros/modalidades') 
        cy.get('#nova-modalidade').click()
        cy.get('#btn-salvar-modalidade').click()
        cy.contains('Selecione ao menos uma cor.')
        cy.get('#cor-id-10').click()
        cy.get('#btn-salvar-modalidade').click()
        cy.contains('Campos obrigatorio não preenchido!')
        cy.get('#input-nome-modalidade').type('MODALIDADE ' + Math.floor(Math.random() * 100 + 1))
        cy.get('#btn-salvar-modalidade').click()
        cy.contains('Modalidade criada com sucesso.')   
    })
})

