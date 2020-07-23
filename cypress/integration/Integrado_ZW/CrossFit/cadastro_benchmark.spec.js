describe('Benchmark CrossFit ', function() {

    beforeEach(function () {
        cy.viewport(1440, 900)    
    })

    it('Cadastro benchmark ', function(){
        let nomeBenchmark = Math.floor(Math.random() * 100 + 1)   
        
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/crossfit/cadastros/benchmarks')
        cy.waitVisible('#btn-novo-benchmark')
        cy.get('#btn-novo-benchmark').click()
        cy.get('#nome-benchmark-input').type('goku' + nomeBenchmark)
        cy.get('#tipo-benchmark-select').select('2')
        cy.get('#tipo-exercicio-select').select('FOR_TIME')
        cy.get('#exercicios-benchmark-text-area').type('Escrever descrição dos exercicios')
        cy.get('#observacao-benchmark-text-area').type('Escrever observação dos exercicios')
        cy.get('#btn-add-benchmark').click({force:true})
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('Benchmark criado com sucesso.')
        })  
    })
})    
