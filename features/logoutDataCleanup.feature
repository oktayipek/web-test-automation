@dataCleanup
Feature: Logout data cleanup

  Background:
    Given user is on login page

  Scenario Outline: Verify login credentials are cleared after logout

    Given user logs in with email from env "<emailKey>" and password from env "<passwordKey>"
    When user clicks logout button
    Then email field should be empty
    And password field should be empty

    Examples:
      | emailKey       | passwordKey       |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD |