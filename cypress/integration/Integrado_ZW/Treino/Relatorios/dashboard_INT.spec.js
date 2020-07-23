describe('Dashboard Treino ', function() {
    
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.login('TB')
    })

    afterEach(function () {
        cy.get('#close-aba').click()
    
    })

    it('Acessa indicadores de total de alunos (Ativos e Inativos)', function() {
        
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/bi')
        cy.waitVisible('#tab-dashboard')
        cy.get('#total_alunos_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Total de Alunos')
        })
    })

    it('Acessa indicadores de alunos ativos', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total_alunos_ativos_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Alunos Ativos')
        })
    })

    it('Acessa indicadores de alunos inativos', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total_alunos_inativos_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Alunos Inativos')
        })
    })

    it('Acessa indicadores de treinos vencidos', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#porcentagem_treino_vencidos_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Treinos Vencidos')
        })
    })

    it('Acessa indicadores de alunos sem treino', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#porcentagem_alunos_semtreino_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Alunos sem Treino')
        })
    })

    it('Acessa indicadores de alunos com treino em dia', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#porcentagem_treino_em_dia_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Treinos em Dia')
        })
    })

    it('Acessa indicadores de alunos com treino', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#porcentagem_alunos_comTreino_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Alunos com Treino')
        })
    })

    it('Acessa indicadores de alunos com treino a vencer', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#porcentagem_treino_avencer_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Treinos a Vencer')
        })
    })

    it('Acessa indicadores de alunos com contratos a vencer', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#porcentagem_contrato_avencer_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Contratos a Vencer')
        })
    })

    it('Acessa indicadores de contratos renovado renovados recentemente', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#contratos_renovados_treino_bi').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Contrato Renovado Recentemente')
        })
    })

    it('Resumo agenda - indicador de agendados', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-agendados').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Agendados')
        })
    })

    it('Resumo agenda - indicador de executados', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-executados').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Executados')
        })
})

    it('Resumo agenda - indicador de faltas', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-faltas').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Faltas')
        })
    })

    it('Resumo agenda - indicador de cancelados', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-cancelados').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Cancelados')
        })
    })

    it('Professores x Agendamentos - indicador de professores', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-professores').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Professores')
        })
    })

    it('Professores x Agendamentos - indicador de Ocupação', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-ocupacao').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Ocupação')
        })
    })

    it('Professores x Agendamentos - indicador de Treinos novos', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-treinos-novos').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Treinos novos')
        })
    })

    it('Professores x Agendamentos - indicador de Treinos renovados', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-treinos-renovados').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Treinos renovados')
        })
    })

    it('Professores x Agendamentos - indicador de Avalição fisica', function() {
        cy.waitVisible('#tab-dashboard')
        cy.get('#total-avalicao').click()
        cy.get('#carregando_dados').should('not.be.visible')
        
        cy.get('body').then($assert =>{
            let msg = $assert.find('.modal-titulo')
            expect(msg).to.contains.text('Avaliações fisicas')
        })
    })
})

