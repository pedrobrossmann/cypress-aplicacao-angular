describe('Cadastro de nivel ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900) 
    })

    it('Cadastro de nivel', function(){ 
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/cadastros/niveis')
        cy.waitVisible('#adicionarNivel')
        cy.get('#adicionarNivel').click()
        cy.get('#input-nome-nivel').type('nivel ' + Math.floor(Math.random() * 1000000 + 1))
        cy.get('#input-ordem-nivel').type(Math.floor(Math.random() * 100 + 1))
        cy.get('#gravarCadastroNivel').click()

        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Nível criado com sucesso.')
        })
    })
})
