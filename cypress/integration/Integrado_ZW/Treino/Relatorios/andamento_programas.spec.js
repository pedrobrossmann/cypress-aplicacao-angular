describe('Relatorio - Andamento de programas', function () {

    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB')

    })
  
    it('Abrir Relatorio', function () {
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/gestao/andamento-programas')
        cy.waitVisible('#input-busca-rapida')
        cy.get('#carregando-dados').should('not.be.visible')

        cy.contains('Gestão de Andamento dos Programas') 
        })
  })
  