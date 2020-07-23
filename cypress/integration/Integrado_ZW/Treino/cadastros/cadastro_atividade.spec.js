describe('Cadastro de atividade ', function() {
    
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB')
    })

    it('Cadastro de atividade neuromuscular treino', function(){
        let codAtividade = Math.floor(Math.random() * 100000 + 1)

        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/cadastros/atividades')
        cy.waitVisible('#addAtividade') 
        cy.get('#addAtividade').click()
        cy.get('#inptNomeAtividade').type('atividade ' + codAtividade)
        cy.get('#selectTipoAtividade').select('NEUROMUSCULAR')
        cy.get('#btnSalvar').click()
        
        cy.validaNotificacao('sucesso')

    })

    it('Cadastro de atividade cardiovascular treino', function(){   
        let codAtividade = Math.floor(Math.random() * 100000 + 1)
        
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/cadastros/atividades')
        cy.waitVisible('#addAtividade')
        cy.get('#addAtividade').click()
        cy.get('#inptNomeAtividade').type('atividade ' + codAtividade)
        cy.get('#selectTipoAtividade').select('CARDIOVASCULAR') 
        cy.get('#btnSalvar').click()
        
        cy.validaNotificacao('sucesso')
    })

})    


   

