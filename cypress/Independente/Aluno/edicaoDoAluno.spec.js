describe('Edição de aluno crud lateral  ', function() {
    let nomeAluno = '';
    Cypress.Commands.add("CadastroDeAlunoParaEdicao", (nome, dados) => { 
    
        nomeAluno = Math.random().toString(10).substring(2, 8);
        cy.get('#atalho-adicionar-aluno').click()
        cy.get('#nome-aluno-input').type('ALUNO DE TESTE' + nomeAluno)
        cy.get('#situacao-aluno-select').select('ATIVO')
        cy.get('#nivel-aluno-input').select('2')
        cy.get('#pacto-select-professor').click()
        cy.get('#pacto-select-professor-0').click()
        cy.get('#data-nascimento-input').type('24/12/1992')
        cy.get('#email-input').type('aluno32@pacto.com')
        cy.get('#email-adicionar').click()
        cy.get('#telefone-input').type('(62) 98574-5784')
        cy.get('#telefone-adicionar').click()
        cy.get('#salvar-cadastro-aluno').click()
        cy.contains('Aluno cadastrado com sucesso')
           
    })
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()
    })

    it('Edição de dados pessoais nome, situação, data de nasc, sexo, email, telefone ', function() {
        cy.CadastroDeAlunoParaEdicao()
        // Ate esse momento adiciona um aluno e salva o nome dele para ser usado posteriormente
        cy.get('#editar').click()
        cy.get('#nome-aluno-input').clear().type('ALUNO EDITADO ' + nomeAluno)
        cy.get('#situacao-aluno-select').select('VISITANTE')
        cy.get('#data-nascimento-input').clear().type('23/10/1993')
        cy.get('#email-input').type('alunoeditado@pacto.com')
        cy.get('#email-adicionar').click()
        cy.get('#telefone-input').type('(62) 98766-8766')
        cy.get('#telefone-adicionar').click()
        cy.get('#salvar-cadastro-aluno').click()
        cy.contains('Aluno editado com sucesso.')
        cy.contains('aluno editado ' + nomeAluno)
        cy.contains('VI')
        //cy.contains('23/10/1993')
        cy.get('.right-aux > .column > .info-bit > .bit-value > .ver-mais').click()
        cy.contains('alunoeditado@pacto.com')
        cy.contains('(62)987668766')
    })
})
