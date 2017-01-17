Feature: PulseOfficeConfiguration
  As an Administrator,
  I want to be able to configure notifications through the Office in order to determine the calculation logic of a specific notification type so that I can verify the notification logic matches the specific retailer business

# Pulse Office Configuration View Mode

  Scenario: Verify 1st accordion is in expanded state and edit icon for it
    Given Pulse Configuration screen is open in view mode
    When  Notification settings is in view mode
    Then  Edit icon is visible
    And   Different Notifications are visible

  Scenario: Verify all accordions will be in collapsed except the first one
    Given Pulse Configuration screen is open in view mode
    When  Notification settings is in view mode
    Then  All other Configuration category other than 1st one are in collapsed mode

# Pulse Office Configuration Edit Mode

  Scenario: Verify Edit mode makes all the options editable
    Given Pulse Configuration screen is open in Edit mode
    When  User is now able to edit values
    Then  Save Cancel Restore defaults buttons show up on the accordion

  Scenario: Verify Save Cancel Restore defaults buttons appear on accordion if any changes made and collapsed the accordion
    Given  Pulse Configuration screen is open in Edit mode
    And    User makes the Changes required
    When   User Collapses the accordion
    Then   Save Cancel Restore defaults buttons show up on the accordion

  Scenario: Verify when set to OFF, the text box disables
    Given Pulse Configuration screen is open in Edit mode
    When  User clicks on OFF radio button
    Then  Radio button corresponding text field is disabled

  Scenario: Verify Save changes switches from Edit mode to View Mode with changes
    Given  Pulse Configuration screen is open and verify default values and click on Edit
    When   User makes the Changes required
    Then   User save the changes
    Then   Changes are saved and mode changes to View mode

  Scenario: Verify notifications are OFF in view mode when set to OFF in Edit mode and save
    Given Pulse Configuration screen is open in Edit mode
    When  User clicks on OFF radio button
    Then  User save the changes
    Then  Notifications are set to OFF in view mode
    And   Pulse Configuration screen is open in Edit mode
    When  User clicks on PUSH radio button
    Then  User save the changes
    Then  Notifications are set to PUSH in view mode

  Scenario: Verify notifications are ON in view mode when set to ON in Edit mode and save
    Given Pulse Configuration screen is open in Edit mode
    When  User clicks on ON radio button
    Then  User save the changes
    Then  Notifications are set to ON in view mode

  Scenario: Verify notifications are PUSH in view mode when set to PUSH in Edit mode and save
    Given Pulse Configuration screen is open in Edit mode
    When  User clicks on PUSH radio button
    Then  User save the changes
    Then  Notifications are set to PUSH in view mode

  Scenario: Verify Cancel changes switches from Edit mode to View Mode without any changes made
    Given  Pulse Configuration screen is open in Edit mode
    When   User doesn't make any changes and clicks on Cancel button
    Then   Mode changes to View mode without any warning popup

  Scenario: Verify Cancel on accordion when changes are made, opens a warning popup
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on Cancel button
    Then   A warning pop up with text "You have unsaved changes", Cancel, Proceed buttons

  Scenario: Verify switching to another page when changes are made in notification settings, opens a warning popup
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on section or sub section from left nav
    Then   A warning pop up with text "You have unsaved changes", Cancel, Proceed buttons

  Scenario: Verify Cancel on warning popup leads to edit mode to change values
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on Cancel button
    Then   A warning pop up with text "You have unsaved changes", Cancel, Proceed buttons
    When   User clicks on Cancel on warning popup
    Then   Mode will remain Edit mode to make changes

  Scenario: Verify (X) icon on warning popup leads to edit mode to change values
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on Cancel button
    Then   A warning pop up with text "You have unsaved changes", Cancel, Proceed buttons
    When   User clicks on X icon on warning popup
    Then   Mode will remain Edit mode to make changes

  Scenario: Verify Restore defaults changes the threshold values overridden by default values
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on Restore defaults button
    Then   A warning pop up with text "Restore will return values to baseline without cancel option.", Cancel, Restore buttons
    When   User clicks on Restore on warning popup
    Then   Restore defaults values are saved and Mode changes to View mode without any warning popup

  Scenario: Verify Cancel in Restore defaults warning popup doesn't override by default values
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on Restore defaults button
    Then   A warning pop up with text "Restore will return values to baseline without cancel option.", Cancel, Restore buttons
    When   User clicks on Cancel on warning popup
    Then   Mode will remain Edit mode with the threshold values with the changes made

  Scenario: Verify (X) in Restore defaults warning popup doesn't override by default values
    Given  Pulse Configuration screen is open in Edit mode
    When   User makes the Changes required
    When   User clicks on Restore defaults button
    Then   A warning pop up with text "Restore will return values to baseline without cancel option.", Cancel, Restore buttons
    When   User clicks on X icon on warning popup
    Then   Mode will remain Edit mode with the threshold values with the changes made

  ## Toast Validations
  Scenario: Verify success toast shows up when changes are saved
    Given Pulse Configuration screen is open in Edit mode
    When  User makes the Changes required
    And   User save the changes
    Then  A toast message shows up on the top right with view mode
    When  User clicks on X icon on toast
    Then  Success Toast disappears

  Scenario: Verify success toast shows up when Restore defaults is set
    Given Pulse Configuration screen is open in Edit mode
    When  User clicks on Restore defaults button
    Then  A warning pop up with text "Restore will return values to baseline without cancel option.", Cancel, Restore buttons
    When  User clicks on Restore on warning popup
    Then  A toast message shows up on the top right with view mode
    When  User clicks on X icon on toast
    Then  Success Toast disappears

  Scenario: Verify success toast disappears after 5 seconds
    Given Pulse Configuration screen is open in Edit mode
    When  User makes the Changes required
    And   User save the changes
    Then  A toast message shows up on the top right with view mode
    When  User waits for 5 seconds
    Then  Success Toast disappears

  Scenario: Save when no changes have been made
    Given Pulse Configuration screen is open in Edit mode
    When User clicks Save button when no changes have been made
    Then No request will be sent to the server
    And User will receive an informative toast indicating that no changes have been made
    And Notification settings is in view mode

#Error Validations
#
#  Scenario: Verify error validation shows up when amount is null
#    Given  Pulse Configuration screen is open in Edit mode
#    When   User deletes the amount and leaves it empty
#    Then   Error message shows up saying "Amount cannot be null"
#    Then   Save button is disabled
#
#  Scenario: Verify error validation shows up when amount is zero
#    Given  Pulse Configuration screen is open in Edit mode
#    When   User enters the value as zero
#    Then   Error message shows up saying "Amount cannot be zero,decimal number"
#    Then   Save button is disabled
#
#  Scenario: Verify error validation shows up when amount is given with decimals
#    Given  Pulse Configuration screen is open in Edit mode
#    When   User enter a decimal valued number
#    Then   Error message shows up saying "Amount cannot be zero,decimal number"
#    Then   Save button is disabled
#
#  Scenario: Verify error validation shows up when amount is more than 13 digits
#    Given  Pulse Configuration screen is open in Edit mode
#    When   User enters a amount with more than 13 characters
#    Then   Error message shows up saying "Amount cannot be zero,decimal number"
#    Then   Save button is disabled
