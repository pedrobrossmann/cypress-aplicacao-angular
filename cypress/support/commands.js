Cypress.Commands.add("validaNotificacao", (notificacao) => {

  if (notificacao === 'sucesso') {
    cy.waitVisible('.snotify-success')
    cy.get('.snotify-success').should('be.visible')
  }

  if (notificacao === 'erro') {
    cy.waitVisible('.notify-error')
    cy.get('.snotify-error').should('be.visible')
  }
  if (notificacao === 'alerta') {
    cy.waitVisible('.snotify-icon--warning')
    cy.get('.snotify-icon--warning').should('be.visible')
  }

})

Cypress.Commands.add("login", (modulo) => {

  let token
  cy.window().then(window =>

    token = window.localStorage.getItem('apiToken')

  ).then(() => {

    if (token === null || token === "") {

      cy.visit('http://devakatsuki.pactosolucoes.com.br:8085/LoginApp/')
      cy.waitVisible('#fmLay\\:chave')
      cy.get('#fmLay\\:chave').type('teste')
      cy.get('#fmLay\\:usernameLoginZW').type('pactobr')
      cy.get('#fmLay\\:pwdLoginZW').type('123')
      cy.get('#fmLay\\:btnEntrar').click()

      cy.get('#fmLay').then(form => {
        let modulos = form.find('#fmLay\\:modalLogado')

        if (modulos.is(':visible') && !modulos.is(':hidden')) {

          if (modulo === 'TB') {

            cy.get('.nav > #loginModuloTreinoNovo > a > .nova-plataforma > img').click()

            cy.log(`DUCaralho ${token}`)
          }

        }

      });
    }
    cy.reload()
  });
});

Cypress.Commands.add('forceVisit', (url) => {
  cy.get('body').then(body$ => {
    const appWindow = body$[0].ownerDocument.defaultView;
    const appIframe = appWindow.parent.document.querySelector('iframe');
    return new Promise(resolve => {
      appIframe.onload = () => resolve();
      appWindow.location = url;
    });
  });
});

Cypress.Commands.add("waitVisible", (elemento, time, timeout) => {
  cy.get('body').then(form => {
    cy.log('Entrou no WaitVisible')

    let idVisible = form.find(elemento)
    let load1 = form.find('.lds-dual-ring')

    if (!time) {
      time = 0;
      timeout = 50000;
    }

    if (!idVisible.is(':visible') && load1.is(':visible')) {

      if (time < timeout) {

        time = 200;

        cy.waitVisible(elemento, time, timeout)

      }

    }
    cy.log(`Elemento visivel: ${time}`)
  });

});

Cypress.Commands.add('value', (selector, value) => {

  cy.get(selector).then(input => {
    cy.waitVisible(selector)
    cy.get(selector).should('be.visible')
    cy.get(selector).select(value)
    cy.wait(1100)
    input.val(value)
  })
})

Cypress.Commands.add('valueToInput', (selector, secondSelector, positionResult, value ) => {

    cy.waitVisible(selector)
    cy.get(selector).click()
    cy.get(secondSelector).type(value)
    cy.wait(1000)
    cy.get(positionResult).click()
})



Cypress.Commands.add("cadastro", (nome, dados) => {

  cy.get('#atalho-adicionar-aluno').click()
  cy.get('#nome-aluno-input').type('ALUNO TESTE AUTOMATIZADO')
  cy.get('#situacao-aluno-select').select('ATIVO')
  cy.get('#nivel-aluno-input').select('2')
  cy.get('.ng-untouched > .cuppa-dropdown > .selected-list > .c-btn > span:nth-child(1)').click()
  cy.get('#pacto-select-professor-item-10').click()
  cy.get('#data-nascimento-input').type('24/12/1992')
  cy.get('#email-input').type('aluno32@pacto.com')
  cy.get('#email-adicionar').click()
  cy.get('#telefone-input').type('(62) 98574-5784')
  cy.get('#telefone-adicionar').click()
  cy.get('#salvar-cadastro-aluno').click()
  cy.get('.notify-success').should('contain', 'Aluno cadastrado com sucesso')

})

Cypress.Commands.add("GeraUmNomeDeAlunoAleatorio", () => {
  let nomes = ['Tony', 'Bruce', 'Harry', 'Hermione', 'Sirius', 'Severo', 'Luke', 'Léia', 'Pedro', 'Thor', ' Steve', 'Harlei', 'Marco Tulio']
  let sobreNome = ['Oliveira', 'Tapxure', 'Brossmann', 'Granger', 'Potter', 'Wayne', 'Snape', 'Skywalker', 'Rogers', 'Filho', 'Frauzino']
  let primeiroNome = nomes[Math.ceil(Math.random() * (nomes.length - 1))]
  let segundoNome = sobreNome[Math.ceil(Math.random() * (sobreNome.length - 1))]
  let nomeCompleto = (`${primeiroNome} ` + `${segundoNome}`)
  cy.get('#nome-aluno-input').type(nomeCompleto)
})

// Cadastra um aluno com todos os dados exceto usuário movel
Cypress.Commands.add("cadastro", (nome, dados) => {

  cy.get('#atalho-adicionar-aluno').click()
  cy.GeraUmNomeDeAlunoAleatorio()
  cy.get('#situacao-aluno-select').select('ATIVO')
  cy.get('#nivel-aluno-input').select('2')
  cy.get('.ng-untouched > .cuppa-dropdown > .selected-list > .c-btn > span:nth-child(1)').click()
  cy.get('#pacto-select-professor-item-10').click()
  cy.get('#data-nascimento-input').type('24/12/1992')
  cy.get('#email-input').type('aluno32@pacto.com')
  cy.get('#email-adicionar').click()
  cy.get('#telefone-input').type('(62) 98574-5784')
  cy.get('#telefone-adicionar').click()
  cy.get('#salvar-cadastro-aluno').click()
  cy.get('.notify-success').should('contain', 'Aluno cadastrado com sucesso')

})

Cypress.Commands.add('preencheDadosPerimetria', () => {
  cy.get('#abaPerimetria').click()
  cy.get('#inputOmbro').type('78')
  cy.get('#inputTorax').type('78')
  cy.get('#inputBracoRelaxEsq').type('52')
  cy.get('#inputBracoRelaxDir').type('32')
  cy.get('#inputBracoContraidoEsq').type('32')
  cy.get('#inputBracoContraidoDir').type('34')
  cy.get('#inputAntBracoEsq').type('34')
  cy.get('#inputAntBracoDir').type('34')
  cy.get('#inputCintura').type('80')
  cy.get('#inputCircunferenciaAbdominal').type('78')
  cy.get('#inputQuadril').type('86')
  cy.get('#inputCoxaProximalEsq').type('55')
  cy.get('#inputCoxaProximalDir').type('55')
  cy.get('#inputCoxaProximalDir').type('54')
  cy.get('#inputCoxaMediaEsq').type('54')
  cy.get('#inputCoxaMediaDir').type('52')
  cy.get('#inputCoxaDistalEsq').type('52')
  cy.get('#inputPanturrilhaEsq').type('32')
  cy.get('#inputPanturrilhaDir').type('32')
})

Cypress.Commands.add('preencheDadosPollockSeteDobras', () => {
  cy.get('#idInputabdominal').type('10,2')
  cy.get('#idInputpeitoral').type('10')
  cy.get('#idInputcoxaMedial').type('10,9')
  cy.get('#idInputsubescapular').type('10,9')
  cy.get('#idInputsupraIliaca').type('10,9')
  cy.get('#idInputtriceps').type('10,9')
  cy.get('#idInputaxilarMedia').type('10,9')
})

Cypress.Commands.add('preencheDadosPollockTresDobras', () => {
  cy.get('#idInputcoxaMedial').type('10,2')
  cy.get('#idInputsupraIliaca').type('10')
  cy.get('#idInputtriceps').type('10,9')
})


//Realiza logoff do sistema
Cypress.Commands.add('realizaLogoff', () => {
  cy.get('#open-user-drop-menu').click()
  cy.get('#deslogar-sistema').click()

})

//Verifica se os elementos (Adicionar, editar e Excluir) estão vigente na tela
Cypress.Commands.add('verificaEditarExcluirEstaoVisiveis', () => {
  cy.get('#element-0-remove').should('be.visible')
  cy.get('#element-0-edit').should('be.visible')
})