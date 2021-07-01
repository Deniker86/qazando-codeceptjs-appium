Feature('login');

const { I, login_page, home_page } = inject()


Scenario('Login com sucesso', () => {

    login_page.doLogin('teste@teste.com', '123456')
    home_page.login_sucesso() 
});


Scenario('Login sem suceeso', () => {

    login_page.doLogin('xteste@teste.com', '123456')
    home_page.login_fail() 
});
