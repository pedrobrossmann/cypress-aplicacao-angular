describe('ambientes ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente() 
    })

    it('Cadastro de ambientes', function(){       
        cy.visit('novotreino/pt/treino/cadastros/ambientes')
        cy.get('#adicionarAmbiente').click()
        cy.get('#input-nome-ambiente').type('ambiente ' + Math.floor(Math.random() * 100 + 1))
        cy.get('#input-capacidade-ambiente').type('40')
        cy.get('#btn-salvar-ambiente').click()
        cy.contains('Ambiente criado com sucesso.')  
    })

    it('Cadastro de ambientes sem nome e capacidate, logo em seguida ocorre o preenchimento', function(){   
        cy.visit('novotreino/pt/treino/cadastros/ambientes')
        cy.get('#adicionarAmbiente').click()
        cy.get('#btn-salvar-ambiente').click()
        cy.contains('Campos obrigatorio não preenchido.')  
        cy.get('#input-nome-ambiente').type('ambiente ' + Math.floor(Math.random() * 100 + 1))
        cy.get('#input-capacidade-ambiente').type('40')
        cy.get('#btn-salvar-ambiente').click()
        cy.contains('Ambiente criado com sucesso.') 
    })
})

