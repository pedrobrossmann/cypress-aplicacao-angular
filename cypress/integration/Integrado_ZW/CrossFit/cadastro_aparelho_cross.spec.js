describe('Aparelho CrossFit ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)   
    })

    it('Cadastro de aparelho completo', function(){
        let numeroAparelho = Math.floor(Math.random() * 100 + 1)   
        
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/aparelhos')
        cy.waitVisible('#btn-novo-aparelho')
        cy.get('#btn-novo-aparelho').click()
        cy.get('#nome-aparelho-input').type('aparelho ' + numeroAparelho)
        cy.get('#btn-add-aparelho').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Aparelho configurado com sucesso.')
        })  
    })

    it('Cadastro de aparelho com o mesmo nome', function(){
        
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/aparelhos')
        cy.waitVisible('#btn-novo-aparelho')
        cy.get('#btn-novo-aparelho').click()
        cy.get('#nome-aparelho-input').type('APARELHO CROSSFIT')
        cy.get('#btn-add-aparelho').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('#help-message-duplicated-entity-name')
            expect(msg).to.contains.text('Já existe um cadastro com esse mesmo nome')
        })          
    })
})    
