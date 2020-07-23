
describe('Testando tela de login', () => {
   
    it('Login com usuário e senha corretos',() => {
        cy.visit('https://app.pactosolucoes.com.br/login/2ebc52be19e5c30a2849366295a901ab')
        cy.get('#fmLay\\:usernameLoginZW').type('PACTOBR')
        cy.get('#fmLay\\:pwdLoginZW').type('G]DKG61M') 
        cy.get('#fmLay\\:btnEntrar').click()
        cy.get('#loginModuloTreinoNovo').should('be.visible').click()
        cy.get('#btn-atualizar-bi').should('be.visible')
        cy.contains('Total de Alunos')
    })

    it('Login com usuário e senha incorretos', () => {
        cy.visit('https://app.pactosolucoes.com.br/login/2ebc52be19e5c30a2849366295a901ab')
        cy.get('#fmLay\\:usernameLoginZW').type('pactobr')
        cy.get('#fmLay\\:pwdLoginZW').type('JSP)SENHAERRADA&*') 
        cy.get('#fmLay\\:btnEntrar').click()
        cy.contains('Usuário ou senha inválidos!')
    })

    it('Login sem inserir a senha', () => {
        cy.visit('https://app.pactosolucoes.com.br/login/2ebc52be19e5c30a2849366295a901ab')
        cy.get('#fmLay\\:usernameLoginZW').type('pactobr')
        cy.get('#fmLay\\:btnEntrar').click()
        cy.contains('Preencha todos os campos para fazer o login!')
    })

    it('Validando logoff',() => {
        cy.visit('https://app.pactosolucoes.com.br/login/2ebc52be19e5c30a2849366295a901ab')
        cy.get('#fmLay\\:usernameLoginZW').clear().type('pactobr')
        cy.get('#fmLay\\:pwdLoginZW').type('G]DKG61M') 
        cy.get('#fmLay\\:btnEntrar').click()
        cy.get('#loginModuloTreinoNovo').should('be.visible').click()
        cy.get('#btn-atualizar-bi').should('be.visible')
        cy.get('.dropdown-aux > .picture > img').click()
        cy.get('#deslogar-sistema').click()
        cy.contains('Esqueceu sua senha?')
    
    })
})
           
