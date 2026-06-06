@homePageValidation
Feature: Home page validation

  Background:
    Given user is on login page

  @homeButton
  Scenario Outline: Verify Home button is visible and opens Home page

    Given user logs in with email from env "<emailKey>" and password from env "<passwordKey>"
    Then Home button should be visible
    When user clicks Home button
    Then page URL should contain "<urlPart>"

    Examples:
      | emailKey       | passwordKey       | urlPart |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    | home    |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD | home    |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD | home    |

  @productsButton
  Scenario Outline: Verify Products button is visible and opens Products page

    Given user logs in with email from env "<emailKey>" and password from env "<passwordKey>"
    Then Products button should be visible
    When user clicks Products button
    Then page URL should contain "<urlPart>"

    Examples:
      | emailKey       | passwordKey       | urlPart  |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    | products |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD | products |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD | products |

  @contactButton
  Scenario Outline: Verify Contact button is visible and opens Contact page

    Given user logs in with email from env "<emailKey>" and password from env "<passwordKey>"
    Then Contact button should be visible
    When user clicks Contact button
    Then page URL should contain "<urlPart>"

    Examples:
      | emailKey       | passwordKey       | urlPart |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    | contact |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD | contact |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD | contact |

  @profileIcon
  Scenario Outline: Verify profile icon displays Sign Out option

    Given user logs in with email from env "<emailKey>" and password from env "<passwordKey>"
    Then profile icon should be visible
    When user clicks profile icon
    Then Sign Out button should be visible

    Examples:
      | emailKey       | passwordKey       |
      | ADMIN_EMAIL    | ADMIN_PASSWORD    |
      | USER_ONE_EMAIL | USER_ONE_PASSWORD |
      | USER_TWO_EMAIL | USER_TWO_PASSWORD |