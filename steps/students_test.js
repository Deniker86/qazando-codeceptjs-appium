Feature('Students');

const { I, login_page, home_page } = inject()

Scenario('Adicionar estudantes com sucesso', () => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.login_sucesso()

    I.fillField('~codigo', '76408',)
    
    I.fillField('~aluno', 'Deniker Pires')

    I.tap('~salvar')

    I.fillField('~search', 'Deniker',)

    I.waitForElement('~76408')
    
});