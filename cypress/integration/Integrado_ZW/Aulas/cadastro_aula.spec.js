describe('Cadastro de aula  ', function () {

    beforeEach(function () {
        cy.viewport(1440, 900)
    })

    it('Cadastro de aula ', function () {
        let nomeAuala = Math.floor(Math.random() * 100 + 1)
        cy.login('TB')
        cy.forceVisit('http://devakatsuki.pactosolucoes.com.br:8088/pt/treino/cadastros/aulas')
        cy.waitVisible('#btn-nova-aula')
        cy.wait(1000)
        cy.get('#btn-nova-aula').click()
        cy.get('#nome-aula-input').type('AULA ' + nomeAuala)
        cy.get('#modalidade-select').select('FAZ TUDO')
        cy.get('#professor-select').select('PACTO - MÉTODO DE GESTÃO')
        cy.get('#ambiente-select').select('TESTE AUTO')
        cy.get('#tolerancia-aula-input').type('20')
        cy.get('#capacidade-aula-input').type('50')
        cy.get('#segunda-check').check('segunda')
        cy.get('#terca-check').check('terca')
        cy.get('#quarta-check').check('quarta')
        cy.get('#sabado-check').check('sabado')
        cy.get('#horario-aula-input').type('08:30 - 09:00')
        cy.get('#btn-add-horario').click()
        cy.get('#horario-aula-input').type('12:00 - 12:30')
        cy.get('#btn-add-horario').click()
        cy.get('#data-inicio-input').type(Cypress.moment().format('DD/MM/YYYY'))
        cy.get('#data-fim-input').type(Cypress.moment().format('DD/MM/YYYY'))
        cy.get('#btn-add-aula').click({ force: true })

        cy.validaNotificacao('sucesso')
    })
})

