describe('Cadastro de aparelho do treino ', function() {
    const nomeAparelho = Math.floor(Math.random() * 1000 + 1)
    
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB') 
    })

    it('Cadastro de aparelho', function(){ 

        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/cadastros/aparelhos')
        cy.waitVisible('#btn-novo-aparelho')
        cy.get('#btn-novo-aparelho').click()     
        cy.get('#nome-aparelho-input').type('Aparalho ' + nomeAparelho)  
        cy.get('#btn-add-aparelho').click()
        
        cy.validaNotificacao('sucesso')  
    })

    it('Cadastro de aparelho com o mesmo nome', function(){    
        
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/cadastros/aparelhos')
        cy.waitVisible('#btn-novo-aparelho')
        cy.get('#btn-novo-aparelho').click()     
        cy.get('#nome-aparelho-input').type('Aparalho ' + nomeAparelho)   
        cy.get('#btn-add-aparelho').click()
        
        cy.validaNotificacao('erro')
    })   
    
})    
