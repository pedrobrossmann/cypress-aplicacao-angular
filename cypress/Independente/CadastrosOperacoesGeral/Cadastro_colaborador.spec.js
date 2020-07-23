describe('Cadastro de colaborador', function() {
    let CodColaborador = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()
    })

    it('Cadastro de colaborador com todos os dados, exceto foto', function() {
        CodColaborador = Math.random().toString(10).substring(2, 8); 
        cy.visit('novotreino/pt/cadastros/colaboradores')
        cy.get('#adcionarColaborador').click()
        cy.get('#inptColaboradorNome').type('COLABORADOR ' + CodColaborador)
        cy.get('#dataNascimento-input').type('24/12/1992')
        cy.get('#inlineRadio2').click()
        cy.get('#emailColaborador-input').type('colaborador@pacto.com')
        cy.get('#emailColaborador-adicionar').click()
        cy.get('#telefone-input').type('(62) 98745-7457')
        cy.get('#telefone-adicionar').click()
        cy.get('#nomeUsuario').type('usuarioapp' + CodColaborador + '@pacto.com.br' )
        cy.get('#selectTipo').select('COORDENADOR')
        cy.get('#btnSalvar').click()
        cy.get('.notify-success').should('contain', 'Colaborador criado com sucesso.')
    })
    
    it('Cadastro de colaborador validando todos os campos obrigatorios', function() {
        CodColaborador = Math.random().toString(10).substring(2, 9);
        cy.visit('novotreino/pt/cadastros/colaboradores')
        cy.get('#adcionarColaborador').click()
        cy.get('#btnSalvar').click()
        cy.get('.notify-error').should('contain', 'Campos obrigatórios não preenchidos.')
        cy.get('#inptColaboradorNome').type('COLABORADOR ' + CodColaborador)
        cy.get('#btnSalvar').click()
        cy.get('.notify-error').should('contain', 'Campos obrigatórios não preenchidos.')
        cy.get('#dataNascimento-input').type('24/12/1992')
        cy.get('#inlineRadio2').click()
        cy.get('#emailColaborador-input').type('colaborador@pacto.com')
        cy.get('#emailColaborador-adicionar').click()
        cy.get('#btnSalvar').click()
        cy.get('.notify-error').should('contain', 'Informe ao menos um telefone de contato.')
        cy.get('#telefone-input').type('(62) 98745-7457')
        cy.get('#telefone-adicionar').click()
        cy.get('#nomeUsuario').type('usuarioapp' + CodColaborador + '@pacto.com.br')
        cy.get('#senhaColaborador').type('12345')
        cy.get('#selectTipo').select('COORDENADOR')
        cy.get('#btnSalvar').click()
        cy.get('.notify-success').should('contain', 'Colaborador criado com sucesso.')
    })

    it('Cadastro de colaborador sem usuário de acesso ao sistema', function() {
        CodColaborador = Math.random().toString(10).substring(2, 9);
        cy.visit('novotreino/pt/cadastros/colaboradores')
        cy.get('#adcionarColaborador').click()
        cy.get('#inptColaboradorNome').type('COLABORADOR ' + CodColaborador)
        cy.get('#dataNascimento-input').type('24/12/1992')
        cy.get('#inlineRadio2').click()
        cy.get('#emailColaborador-input').type('colaborador@pacto.com')
        cy.get('#emailColaborador-adicionar').click()
        cy.get('#telefone-input').type('(62) 98745-7457')
        cy.get('#telefone-adicionar').click()
        cy.get('#defaultCheck1').click()
        cy.get('#btnSalvar').click()
        cy.get('.notify-success').should('contain', 'Colaborador criado com sucesso.')
    })
})
