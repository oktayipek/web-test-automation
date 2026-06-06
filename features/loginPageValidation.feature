@loginvalidation
Feature: Login page validation

  Background:
    Given user is on login page

  Scenario: Email field should be visible
    Then email field should be visible

  Scenario: Email field should accept text
    When user enters email "test@test.com"
    Then email field should contain "test@test.com"

  Scenario: Password field should be visible
    Then password field should be visible

  Scenario: Password should be masked
    When user enters password "TestPassword123"
    Then password should be masked

  Scenario: Login button should be visible
    Then login button should be visible