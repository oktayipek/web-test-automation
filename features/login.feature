@loginfunctionality
Feature: Login functionality

  Background:
    Given user is on login page

  Scenario Outline: Login with different credentials

    When user enters email from env "<emailKey>"
    And user enters password from env "<passwordKey>"
    And user clicks login button

    Then login result should be "<result>"

    Examples:
      | emailKey       | passwordKey       | result  |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    | success |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD | success |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD | success |
      | ADMIN_EMAIL    | INVALID_PASSWORD  | failure |
      | INVALID_EMAIL  | ADMIN_PASSWORD    | failure |
      | EMPTY_EMAIL    | ADMIN_PASSWORD    | failure |
      | ADMIN_EMAIL    | EMPTY_PASSWORD    | failure |
      | EMPTY_EMAIL    | EMPTY_PASSWORD    | failure |