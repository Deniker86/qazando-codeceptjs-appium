Feature: Login
  Eu como usuário 
  Gostaria de fazer Login
  Para acessar o sistema
  

  Scenario: Login com sucesso
    Given I fill email
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
