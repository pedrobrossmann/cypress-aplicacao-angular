describe('Atvidade CrossFit ', function() {
    var nomeAtividade = '';
    beforeEach(function () {
        cy.viewport(1440, 900)
        cy.loginIndependente()    
        cy.visit('novotreino/pt/crossfit/cadastros/atividades-crossfit')
    })

    it('Cadastro de atividade tipo time completo', function(){
        nomeAtividade = Math.random().toString(4).substring(1, 4);   
        cy.get('#btn-novo-atividade-crossfit').click()
        cy.get('#nome-atividade-crossfit-input').type('atividade ' + nomeAtividade)
        cy.get('#categoria-atividade-select').select('GYMNASTIC')
        cy.get('#unidade-medida-select').select('TIME')
        cy.get('#descricao-atividade-text-area').type('Escrever descrição da atividade')
        cy.get('#link-youtube-atividade-input').type('https://www.youtube.com/watch?v=kPBzTxZQG5Q')
        cy.get('#btn-add-atividade-crossfit').click()
        cy.contains('Atividade criada com sucesso.')
          
    })

    it('Cadastro de atividade com o mesmo nome', function(){
        cy.get('#btn-novo-atividade-crossfit').click()
        cy.get('#nome-atividade-crossfit-input').type('atividade ' + nomeAtividade)
        cy.get('#btn-add-atividade-crossfit').click()
        cy.contains('Já existe um cadastro com esse mesmo nome')
                        
    })

    it('Inativar atividade', function(){  
        cy.get('#input-busca-rapida').type('atividade ' + nomeAtividade)
        cy.wait(1000) 
        cy.get('#element-0-remove').click()
        cy.get('#action-inativar').click()
        cy.contains('Atividade inativada com sucesso.')  
    })

    it('Cadastro de atividade tipo REPS completo', function(){
        nomeAtividade = Math.random().toString(4).substring(1, 4);   
        cy.get('#btn-novo-atividade-crossfit').click()
        cy.get('#nome-atividade-crossfit-input').type('atividade ' + nomeAtividade)
        cy.get('#categoria-atividade-select').select('GYMNASTIC')
        cy.get('#unidade-medida-select').select('REPS')
        cy.get('#descricao-atividade-text-area').type('Escrever descrição da atividade')
        cy.get('#link-youtube-atividade-input').type('https://www.youtube.com/watch?v=kPBzTxZQG5Q')
        cy.get('#btn-add-atividade-crossfit').click()
        cy.contains('Atividade criada com sucesso.')
          
    })

    it('Cadastro de atividade sem o nome', function(){
        cy.get('#btn-novo-atividade-crossfit').click()
        cy.get('#btn-add-atividade-crossfit').click()
        cy.contains('Campos obrigatórios não preenchidos.')
                        
    })
})    
