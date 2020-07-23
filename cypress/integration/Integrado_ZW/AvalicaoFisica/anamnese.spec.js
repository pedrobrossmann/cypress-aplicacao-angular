describe('Anamnese ', function() {
    
    let nomeAnamnse = '';
    let nomeAnamnseExcluir = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
    })

    it('Cadastro de anamnese', function(){
        nomeAnamnse = Math.floor(Math.random() * 100 + 1)

        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/avaliacao/anamneses')
        cy.waitVisible('#btn-novo-anamnese')
        cy.get('#btn-novo-anamnese').click()
        cy.get('#nome-anamnese-input').type('Anamnese ' + nomeAnamnse)
        cy.get('#btn-add-pergunta').click()
        cy.get('#descricao-pergunta-0').type('pergunta texto')
        cy.get('#icon-add-pergunta-0').click()
        cy.get('#descricao-pergunta-1').type('pergunta multipla escolha')
        cy.get('#tipo-pergunta-select-1').select('ESCOLHA_MULTIPLA')
        cy.get('#add-opcao-check-1').click()
        cy.get('#add-opcao-check-1').click()
        cy.get('#add-opcao-check-1').click()
        cy.get('#icon-add-pergunta-1').click()
        cy.get('#descricao-pergunta-2').type('pergunta simples escolha')
        cy.get('#tipo-pergunta-select-2').select('ESCOLHA_UNICA')
        cy.get('#add-opcao-check-2').click()
        cy.get('#add-opcao-check-2').click()
        cy.get('#add-opcao-check-2').click()
        cy.get('#icon-add-pergunta-2').click()
        cy.get('#descricao-pergunta-3').type('pergunta sim ou não')
        cy.get('#tipo-pergunta-select-3').select('SIM_NAO')
        cy.get('#btn-add-anamnese').click()

        cy.get('body').then($assert =>{
            let msg = $assert.find('.ng-star-inserted')
            expect(msg).to.contains.text('A anamnese foi criada com sucesso.')
        })
 
    })
})
