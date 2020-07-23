describe('Cadastro de grupo muscular ', function() {
    
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB')
    })

    it('Cadastro de grupo muscular', function(){
        let nomeGrupoMuscular = Math.floor(Math.random() * 100 + 1)
        
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/cadastros/grupo-muscular')
        cy.waitVisible('#adicionarGruposMusculares') 
        cy.get('#adicionarGruposMusculares').click() 
        cy.get('#nome-grupo-muscular-input').type('grupo' + nomeGrupoMuscular)
        cy.get('#btn-add-grupo-muscular').click()
        
        cy.validaNotificacao('sucesso')
    })
})  

