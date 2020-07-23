describe('Benchmark CrossFit ', function() {
    var nomeBenchmark = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()    
        cy.visit('novotreino/pt/crossfit/cadastros/benchmarks')
    })

    it('Cadastro benchmark completo', function(){
        nomeBenchmark = Math.random().toString(4).substring(1, 4);   
        cy.get('#btn-novo-benchmark').click()
        cy.get('#nome-benchmark-input').type('goku' + nomeBenchmark)
        cy.get('#tipo-benchmark-select').select('2')
        cy.get('#tipo-exercicio-select').select('FOR_TIME')
        cy.get('#exercicios-benchmark-text-area').type('Escrever descrição dos exercicios')
        cy.get('#observacao-benchmark-text-area').type('Escrever observação dos exercicios')
        cy.get('#btn-add-benchmark').click({force:true})
        cy.contains('Benchmark criado com sucesso.')   
    })

    it.only('Cadastro benchmark com o mesmo nome', function(){   
        cy.get('#btn-novo-benchmark').click()
        cy.get('#nome-benchmark-input').type('ABBATE')
        cy.get('#tipo-benchmark-select').select('2')
        cy.get('#tipo-exercicio-select').select('FOR_TIME')
        cy.get('#exercicios-benchmark-text-area').type('Escrever descrição dos exercicios')
        cy.get('#observacao-benchmark-text-area').type('Escrever observação dos exercicios')
        cy.get('#btn-add-benchmark').click({force:true})
        cy.get('#help-message-duplicated-entity-name').contains('Já existe um cadastro com esse mesmo nome')
    })

})    
