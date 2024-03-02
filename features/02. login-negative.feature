@digital-skola @login
Feature: Swag Labs - Login - Negative
  
  @negative
  Scenario: As a locked_out_user, I should get error message
    Given Meiman is on the login page
    When Meiman login with "locked_out_user" credential
    Then Meiman should see error "Epic sadface: Sorry, this user has been locked out."