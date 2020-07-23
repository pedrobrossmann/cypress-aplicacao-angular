describe('Edição do aluno pelo perfil', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
    })
    it('Cadastra um nivel e edita o nivel no cadastro do aluno ', function() {
        let numeroDoNivel = Math.floor(Math.random() * 100 + 1)
        
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/niveis')
        cy.waitVisible('#adicionarNivel')
        cy.get('#adicionarNivel').click()
        cy.get('#input-nome-nivel').type('nivel ' + numeroDoNivel)
        cy.get('#input-ordem-nivel').type(Math.floor(Math.random() * 100 + 1))
        cy.get('#gravarCadastroNivel').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Nível criado com sucesso.')
        })
      
        cy.get('#inputGlobalSearch').type('PEDRO BROSSMANN')
        cy.waitVisible('#nivel-select')
        cy.get('#nivel-select').select('nivel ' + numeroDoNivel)
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Aluno atualizado com sucesso')
        })

    })

})    
