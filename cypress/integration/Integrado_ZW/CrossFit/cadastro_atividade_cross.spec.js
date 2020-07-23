describe('Atvidade CrossFit ', function() {
    
    beforeEach(function () {
        cy.viewport(1440, 900)   
    })

    it('Cadastro de atividade tipo time completo', function(){
        let nomeAtividade = Math.floor(Math.random() * 100 + 1)   
        
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/atividades-crossfit')
        cy.waitVisible('#btn-novo-atividade-crossfit')
        cy.get('#btn-novo-atividade-crossfit').click()
        cy.get('#nome-atividade-crossfit-input').type('atividade ' + nomeAtividade)
        cy.get('#categoria-atividade-select').select('GYMNASTIC')
        cy.get('#unidade-medida-select').select('TIME')
        cy.get('#descricao-atividade-text-area').type('Escrever descrição da atividade')
        cy.get('#link-youtube-atividade-input').type('https://www.youtube.com/watch?v=kPBzTxZQG5Q')
        cy.get('#btn-add-atividade-crossfit').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Atividade criada com sucesso.')
        })
          
    })

    it('Cadastro de atividade com o mesmo nome', function(){
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/atividades-crossfit')
        cy.waitVisible('#btn-novo-atividade-crossfit')
        cy.get('#btn-novo-atividade-crossfit').click()
        cy.get('#nome-atividade-crossfit-input').type('PULAR CORDA')
        cy.get('#btn-add-atividade-crossfit').click()
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('#help-message-duplicated-entity-name')
            expect(msg).to.contains.text('Já existe um cadastro com esse mesmo nome')
        })                        
    })
})    
