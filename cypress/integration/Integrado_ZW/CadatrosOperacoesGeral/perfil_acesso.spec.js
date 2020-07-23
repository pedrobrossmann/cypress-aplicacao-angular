describe('Crud perfil de acesso', function() {
    
    beforeEach(function () {
        cy.viewport(1440, 900)
    })
     
    it('Cadastro do perfil de acesso', function() {
        let numeroPeril = Math.floor(Math.random() * 100 + 1)
        
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/perfil-acesso')
        cy.waitVisible('#adicionar-novo_perfil')
        cy.get('#adicionar-novo_perfil').click()
        cy.get('#input-nome-perfil').type('PERFIL UNICO ' + numeroPeril)
        cy.get('#salvar-perfil').click()
        
        cy.validaNotificacao('sucesso')

    })

    it('Tenta excluir um perfil de acesso vinculado a um usuário. ', function() {
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/perfil-acesso') 
        cy.waitVisible('#input-busca-rapida')
        cy.get('#input-busca-rapida').type('coordenador')
        cy.get('#element-0').should('be.visible')      
        cy.get('#element-0-remove').click()
        cy.get('#action-remover').click()
        
        cy.validaNotificacao('alerta')
        
    })
})
