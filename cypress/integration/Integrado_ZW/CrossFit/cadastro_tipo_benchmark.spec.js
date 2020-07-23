describe('Tipo de benchmark ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB') 
    })

    it('Cadastro de tipo de benchmark', function(){
        let nomeBenchmark = Math.floor(Math.random() * 100 + 1)
        
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/tipos-benchmark')
        cy.waitVisible('#adicionarTipoBenchmark')
        cy.get('#adicionarTipoBenchmark').click()  
        cy.get('.form-group > .form-control').type('The ' + nomeBenchmark)
        cy.get('.modal-content > pacto-tipo-benchmark-edit-modal > div > .modal-footer > .btn-primary').click() 
        

        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Tipo benchmark criado com sucesso.')
        })
      
    })
})    
