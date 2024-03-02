@digital-skola @login
Feature: Swag Labs - Login - Positive
    
  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Meiman is on the login page
    When Meiman login with "standard_user" credential
    Then Meiman should see home page

  Scenario: As a problem_user, I want to log in successfully
    Given Meiman is on the login page
    When Meiman login with "problem_user" credential
    Then Meiman should see home page