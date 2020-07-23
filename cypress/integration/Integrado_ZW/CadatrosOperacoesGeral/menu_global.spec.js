describe('Pesquisa de menu global', function() {
    
    beforeEach(function () {
        cy.viewport(1440, 900)
    })
    
    // Itens comuns entre os módulos 
    it('Verifica o acesso as funcionalidades comuns pelo menu global', function(){
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/bi')
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('Alunos')
        cy.get('#global-search-listagem-aluno').click()
        cy.contains('Gerencie os alunos cadastrados')

        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('nivel')
        cy.waitVisible("#adicionarNivel")
        cy.get('#adicionarNivel').should('be.visible')
        
    })

    it('Verifica o acesso as funcionalidades da Agenda pelo menu global ', function() {
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/bi')
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('agendamento')
        cy.get('#global-search-cadastro-tipo-agendamento').click()
        cy.get('#btn-novo-tipo-agendamento').should('be.visible')

        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('disponibilidade')
        cy.get('#nova-disponibilidade').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('agendamento')
        cy.get('#global-search-indicadores-agenda').click()
        cy.contains(' Relatório dos Serviços Agendados')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('aula')
        cy.get('#global-search-listagem-aulas').click()
        cy.get('#btn-nova-aula').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('substituidos')
        cy.contains('Professores substituídos')

        
    })

    it('Verifica o acesso as funcionalidades do Treino pelo menu global', function(){
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/bi')
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('carteira')
        cy.contains('Indicadores da carteira dos professores')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('atividade')
        cy.get('#global-search-atividade-professores').click()
        cy.contains('Indicadores da carteira dos professores')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('programa')
        cy.get('#global-search-andamento-programas').click()
        cy.contains('Gestão de Andamento dos Programas')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('aparelho')
        cy.get('#global-search-listagem-aparelhos-treino').click()
        cy.get('#btn-novo-aparelho').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('atividade')
        cy.get('#global-search-listagem-atividade-treino').click()
        cy.get('#addAtividade').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('grupo muscular')
        cy.get('#adicionarGruposMusculares').should('be.visible')
        
    })

    it('Verifica o acesso as funcionalidades do CrossFit pelo menu global', function(){
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('DASHBOARD')
        cy.get('#global-search-dashboard-crossfit').click()
        cy.contains('Resultados Lançados')

        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('WOD')
        cy.get('#global-search-cadastro-wod').click()
        cy.get('#btn-add-wod').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('monitor')
        cy.contains('O que você deseja visualizar?')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('aparelho')
        cy.get('#global-search-listagem-aparelhos-crossfit').click()
        cy.get('#btn-novo-aparelho').should('be.visible')

        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('atividade')
        cy.get('#global-search-listagem-atividades-crossfit').click()
        cy.get('#btn-novo-atividade-crossfit').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('benchmark')
        cy.get('#global-search-listagem-benchmarks').click()
        cy.get('#btn-novo-benchmark').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('tipo')
        cy.get('#global-search-cadastro-tipo-benchmarks').click()
        cy.get('#adicionarTipoBenchmark').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('tipo')
        cy.get('#global-search-listagem-tipo-wod').click()
        cy.get('#btn-novo-tipo-wod').should('be.visible')
        
    })

    it('Verifica o acesso as funcionalidades do Avaliação Fisica pelo menu global', function(){
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('dashboard')
        cy.get('#global-search-dashboard-avaliacao').click()
        cy.contains('Avaliação realizadas no periodo')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('anamnese')
        cy.get('#btn-novo-anamnese').should('be.visible')
        
        cy.waitVisible('#inputGlobalSearch')
        cy.get('#inputGlobalSearch').type('objetivo')
        cy.get('#novo-objetivo').should('be.visible')
        
    })

})

