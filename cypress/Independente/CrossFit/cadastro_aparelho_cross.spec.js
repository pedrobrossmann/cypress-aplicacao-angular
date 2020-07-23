describe('Aparelho CrossFit ', function() {
    var nomeAparelho = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()
        cy.visit('novotreino/pt/crossfit/cadastros/aparelhos')    
    })

    it('Cadastro de aparelho completo', function(){
        nomeAparelho = Math.random().toString(10).substring(2, 8);   
        cy.get('#btn-novo-aparelho').click()
        cy.get('#nome-aparelho-input').type('aparelho ' + nomeAparelho)
        cy.get('#btn-add-aparelho').click()
        cy.contains('Aparelho configurado com sucesso.')
          
    })

    it('Cadastro de aparelho com o mesmo nome', function(){
        cy.get('#btn-novo-aparelho').click()
        cy.get('#nome-aparelho-input').type('aparelho ' + nomeAparelho)
        cy.get('#btn-add-aparelho').click()
        cy.contains('Já existe um cadastro com esse mesmo nome')
                        
    })

    it('Exclusão de aparelho', function(){  
        cy.get('#input-busca-rapida').type('aparelho ' + nomeAparelho)
        cy.wait(1000) 
        cy.get('#element-0-remove').click()
        cy.get('#action-remover').click()
        cy.contains('Aparelho removido com sucesso.')  
    })

    it('Cadastro de aparelho sem o nome', function(){
        cy.get('#btn-novo-aparelho').click()
        cy.get('#btn-add-aparelho').click()
        cy.contains('Campos obrigatórios não foram preenchidos.')         
    })

})    
