describe('Objetivo ', function() {

    var nomeObjetivo = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
    })

    it('Cadastro de objetivo', function(){
        nomeObjetivo = Math.floor(Math.random() * 100 + 1)
        
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/avaliacao/cadastros/objetivos')
        cy.waitVisible('#novo-objetivo')
        cy.get('#novo-objetivo').click()
        cy.get('#objetivo-input-nome').type(nomeObjetivo)
        cy.get('#objetivo-button-salvar').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Objetivo criado com sucesso.')
        })  
    })

    it('Cadastro de objetivo com o mesmo nome', function(){    
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/avaliacao/cadastros/objetivos')
        cy.waitVisible('#novo-objetivo')
        cy.get('#novo-objetivo').click()
        cy.get('#objetivo-input-nome').type(nomeObjetivo)
        cy.get('#objetivo-button-salvar').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Já existe um cadastro com esse nome !')
        }) 
    })
}) 



