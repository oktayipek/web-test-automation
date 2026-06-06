@logout
Feature: Logout functionality

  Background:
    Given user is on login page

  Scenario Outline: Logout with different users

    Given user logs in with email from env "<emailKey>" and password from env "<passwordKey>"
    When user clicks logout button
    Then user should see "<expectedResult>"

    Examples:
      | emailKey       | passwordKey       | expectedResult |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    | Login Page     |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD | Login Page     |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD | Login Page     |