/**
 * Step Definitions for Office Configuration - Notification accordion
 */
var officeConfigurationPage = require('../../pages/officeConfigurationPage');
var settings = require('../../common/settings');
var getAppUrl = require('../../support/env').getAppUrl;
var assert = require('assert');
var getPageTimeout = settings.config.STEPTIMEOUT;
var value_view_void_trs_threshold_amount = Math.floor((Math.random() * 10) + 1);
var value_view_void_item_threshold_amount = Math.floor((Math.random() * 100) + 1);
var value_view_return_item_threshold_amount = Math.floor((Math.random() * 1000) + 1);
var expectedResultDictionary = {};

module.exports = function () {

  this.Given(/^Notification Settings accordion in Pulse Configuration screen is opened in Edit mode$/, function (callback) {
    this.url("http://localhost:3000")
    this.click(officeConfigurationPage.icon_office_tools)
    this.click(officeConfigurationPage.link_nav_pulse_configuration)
    this.click(officeConfigurationPage.button_edit_notifications_settings)
    this.waitforElementVisible(officeConfigurationPage.text_return_notifications, 5000)
    callback();
  });

  this.When(/^User Makes the required changes$/, function (callback) {
    this.assert.visible(officeConfigurationPage.textfield_void_transactions_notifications)
    this.clearValue(officeConfigurationPage.textfield_void_transactions_notifications)
    this.setValue(officeConfigurationPage.textfield_void_transactions_notifications,789)
    callback();
  });

  this.When(/^User clicks on Save$/, function (callback){
    this.click(officeConfigurationPage.button_save)
    //this.waitForElementNotPresent(officeConfigurationPage.icon_loader)
    callback();
  });

  this.Then(/^Verify the values inserted$/, function(callback){
    this.waitForElementNotPresent(officeConfigurationPage.icon_loader)
    this.waitForElementNotPresent(officeConfigurationPage.textfield_void_transactions_notifications)
    this.getValue(officeConfigurationPage.text_view_void_trs_threshold_amount, function(result){
      this.assert.ok(result,789,"Both values are not matching")
    });
    callback();
  });

  this.Given(/^Pulse Configuration screen is open in view mode$/, function (callback) {
    this
      .url(getAppUrl())
      .click(officeConfigurationPage.icon_office_tools)
      .waitForElementVisible(officeConfigurationPage.link_nav_pulse_configuration, getPageTimeout)
      .click(officeConfigurationPage.link_nav_pulse_configuration)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout);
    callback();
  });

  this.When(/^Notification settings is in view mode$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_notification_settings_title, getPageTimeout);
    callback();
  });

  this.Then(/^All other Configuration category other than 1st one are in collapsed mode$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.accordion_notification_settings_open_state, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.accordion_notification_settings_closed_state, getPageTimeout);
    callback();
  });


  this.Then(/^Edit icon is visible$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout);
    callback();
  });

  this.Then(/^Different Notifications are visible$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.text_void_transactions_notifications, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_void_item_notifications, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_return_notifications, getPageTimeout)
      .useCss();
    callback();
  });

  this.Given(/^Pulse Configuration screen is open in Edit mode$/, function (callback) {
    this
      .url(getAppUrl())
      .click(officeConfigurationPage.icon_office_tools)
      .waitForElementVisible(officeConfigurationPage.link_nav_pulse_configuration, getPageTimeout)
      .click(officeConfigurationPage.link_nav_pulse_configuration)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_transactions_notifications, function(result) {
        expectedResultDictionary.textViewVoidTransactionsNotifications = result.value;
      })
      .getText(officeConfigurationPage.text_view_void_item_notifications, function(result) {
        expectedResultDictionary.textViewVoidItemNotifications = result.value;
      })
      .getText(officeConfigurationPage.text_view_return_notifications, function(result) {
        expectedResultDictionary.textViewReturnNotifications = result.value;
      })
      .click(officeConfigurationPage.button_edit_notifications_settings)
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout);
    callback();
  });

  this.Given(/^Pulse Configuration screen is open and verify default values and click on Edit$/, function (callback) {
    this
      .url(getAppUrl())
      .click(officeConfigurationPage.icon_office_tools)
      .waitForElementVisible(officeConfigurationPage.link_nav_pulse_configuration, getPageTimeout)
      .click(officeConfigurationPage.link_nav_pulse_configuration)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_transactions_notifications, function(result) {
        expectedResultDictionary.textViewVoidTransactionsNotifications = result.value;
      })
      .getText(officeConfigurationPage.text_view_void_item_notifications, function(result) {
        expectedResultDictionary.textViewVoidItemNotifications = result.value;
      })
      .getText(officeConfigurationPage.text_view_return_notifications, function(result) {
        expectedResultDictionary.textViewReturnNotifications = result.value;
      })
      .click(officeConfigurationPage.button_edit_notifications_settings)
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
    callback();
  });

  this.When(/^User is now able to edit values$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
      .elementIdEnabled(officeConfigurationPage.textfield_void_transactions_notifications, function (isEnabled) {
        assert(isEnabled,"void transactions notifications TextField is not Enabled")
      })
      .elementIdEnabled(officeConfigurationPage.textfield_void_item_notifications, function (isEnabled) {
        assert(isEnabled,"void item notifications TextField is not Enabled")
      })
      .elementIdEnabled(officeConfigurationPage.textfield_return_notifications, function (isEnabled) {
        assert(isEnabled,"return notifications TextField is not Enabled");
      });
    callback();
  });

  this.When(/^User doesn't make any changes and clicks on Cancel button$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
      .click(officeConfigurationPage.button_cancel);
    callback();
  });

  this.When(/^User Collapses the accordion$/, function (callback) {
    this
      .click(officeConfigurationPage.accordion_open)
      .waitForElementVisible(officeConfigurationPage.accordion_close, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.accordion_notification_settings_open_state, getPageTimeout);
    callback();
  });

  this.Then(/^Save Cancel Restore defaults buttons show up on the accordion$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_cancel, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_restore_defaults, getPageTimeout);
    callback();
  });

  this.When(/^User clicks on OFF radio button$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout, function(isVisible) {
        assert(isVisible.value)
      })
      .click(officeConfigurationPage.radio_off_void_transactions_notifications)
      .click(officeConfigurationPage.radio_off_void_item_notifications)
      .click(officeConfigurationPage.radio_off_return_notifications);
    callback();
  });

  this.When(/^User clicks on ON radio button$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout, function(isVisible) {
        this.verify.ok(!(isVisible.value))
      })
      .click(officeConfigurationPage.radio_on_void_transactions_notifications)
      .click(officeConfigurationPage.radio_on_void_item_notifications)
      .click(officeConfigurationPage.radio_on_return_notifications);
    callback();
  });

  this.When(/^User clicks on PUSH radio button$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout, function(isVisible) {
        assert(isVisible.value)
      })
      .click(officeConfigurationPage.radio_push_void_transactions_notifications)
      .click(officeConfigurationPage.radio_push_void_item_notifications)
      .click(officeConfigurationPage.radio_push_return_notifications);
    callback();
  });

  this.Then(/^Radio button corresponding text field is disabled$/, function (callback) {
    this
      .assert.attributeEquals(officeConfigurationPage.textfield_void_transactions_notifications, 'disabled', "true")
      .assert.attributeEquals(officeConfigurationPage.textfield_void_item_notifications, 'disabled', "true")
      .assert.attributeEquals(officeConfigurationPage.textfield_return_notifications, 'disabled', "true")
    callback();
  });

  this.When(/^User makes the Changes required$/, function (callback) {
      this.waitForElementVisible(officeConfigurationPage.textfield_void_transactions_notifications, getPageTimeout, function(isVisible) {
        assert(isVisible.value)
      })
      this.waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      if(expectedResultDictionary.textViewVoidTransactionsNotifications == settings.constants.OFF)
        this.click(officeConfigurationPage.radio_on_void_transactions_notifications)
      if(expectedResultDictionary.textViewVoidItemNotifications == settings.constants.OFF)
        this.click(officeConfigurationPage.radio_on_void_item_notifications)
      if(expectedResultDictionary.textViewReturnNotifications == settings.constants.OFF)
        this.click(officeConfigurationPage.radio_on_return_notifications)
      this
      .clearValue(officeConfigurationPage.textfield_void_transactions_notifications)
      .setValue(officeConfigurationPage.textfield_void_transactions_notifications,value_view_void_trs_threshold_amount)
      .clearValue(officeConfigurationPage.textfield_void_item_notifications)
      .setValue(officeConfigurationPage.textfield_void_item_notifications,value_view_void_item_threshold_amount)
      .clearValue(officeConfigurationPage.textfield_return_notifications)
      .setValue(officeConfigurationPage.textfield_return_notifications,value_view_return_item_threshold_amount)
    callback();
  });

  this.Then(/^User save the changes$/, function (callback) {
    this
      .click(officeConfigurationPage.button_save);
    callback();
  });

  this.Then(/^User clicks Save button when no changes have been made$/, function (callback) {
    this
      .click(officeConfigurationPage.button_save);
    callback();
  });

  this.When(/^User clicks on Cancel button$/, function (callback) {
    this
      .click(officeConfigurationPage.button_cancel);
    callback();
  });

  this.When(/^User clicks on Restore defaults button$/, function (callback) {
    this
      .click(officeConfigurationPage.button_restore_defaults);
    callback();
  });

  this.When(/^User clicks on section or sub section from left nav$/, function (callback) {
    this
      .click(officeConfigurationPage.icon_office_tools)
      .waitForElementVisible(officeConfigurationPage.link_nav_sub_section, getPageTimeout)
      .click(officeConfigurationPage.link_nav_sub_section)
    callback();
  });

  this.Then(/^A warning pop up with text "You have unsaved changes", Cancel, Proceed buttons$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_popup_proceed, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.icon_popup_close, getPageTimeout)
      .getText(officeConfigurationPage.button_popup_cancel, function(result) {
        assert.equal(result.value,settings.constants.CANCEL)
      })
      .getText(officeConfigurationPage.button_popup_proceed, function(result) {
        assert.equal(result.value,settings.constants.PROCEED)
      })
      .getText(officeConfigurationPage.popup_text, function(result) {
        assert.equal(result.value.split('\n')[0],settings.constants.YOU_HAVE_UNSAVED_CHANGES)
      })
    callback();
  });

  this.Then(/^A warning pop up with text "Restore will return values to baseline without cancel option.", Cancel, Restore buttons$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.button_popup_restore, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.icon_popup_close, getPageTimeout)
      .getText(officeConfigurationPage.button_popup_cancel, function(result) {
        assert.equal(result.value,settings.constants.CANCEL)
      })
      .getText(officeConfigurationPage.button_popup_restore, function(result) {
        assert.equal(result.value,settings.constants.RESTORE)
      })
      .getText(officeConfigurationPage.popup_text, function(result) {
        assert.equal(result.value.split('\n')[0],settings.constants.RESTORE_DEFAULTS)
      })
    callback();
  });

  this.When(/^User clicks on Proceed on warning popup$/, function (callback) {
    this
      .click(officeConfigurationPage.button_popup_proceed)
      .waitForElementNotPresent(officeConfigurationPage.button_popup_proceed, getPageTimeout);
    callback();
  });

  this.When(/^User clicks on Restore on warning popup$/, function (callback) {
    this
      .click(officeConfigurationPage.button_popup_restore)
      .waitForElementNotPresent(officeConfigurationPage.button_popup_restore, getPageTimeout);
    callback();
  });

  this.When(/^User clicks on Cancel on warning popup$/, function (callback) {
    this
      .click(officeConfigurationPage.button_popup_cancel)
      .waitForElementNotPresent(officeConfigurationPage.button_popup_cancel, getPageTimeout);
    callback();
  });

  this.When(/^User clicks on X icon on warning popup$/, function (callback) {
    this
      .click(officeConfigurationPage.icon_popup_close)
      .waitForElementNotPresent(officeConfigurationPage.icon_popup_close, getPageTimeout);
    callback();
  });

  this.When(/^User clicks on X icon on toast$/, function (callback) {
    this
      .click(officeConfigurationPage.toast_close)
      .waitForElementNotPresent(officeConfigurationPage.toast_close, getPageTimeout);
    callback();
  });

  this.When(/^Success Toast disappears$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.toast, getPageTimeout);
    callback();
  });

  this.When(/^User waits for 5 seconds$/, function (callback) {
    this
      .pause(5000); // Wait for 5 seconds to see the Toast Disappear automatically
    callback();
  });

  this.Then(/^Mode will remain Edit mode to make changes$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.button_popup_proceed, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)

    callback();
  });

  this.Then(/^Mode will remain Edit mode with the threshold values overridden by default values$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.button_popup_proceed, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
      .getValue(officeConfigurationPage.textfield_void_transactions_notifications, function(result) {
        assert.equal(result.value,settings.constants.DEFAULT_VOID_TRS_THRESHOLD_AMOUNT)
      })
      .getValue(officeConfigurationPage.textfield_void_item_notifications, function(result) {
        assert.equal(result.value,settings.constants.DEFAULT_VOID_ITEM_THRESHOLD_amount)
      })
      .getValue(officeConfigurationPage.textfield_return_notifications, function(result) {
        assert.equal(result.value,settings.constants.DEFAULT_RETURN_ITEM_THRESHOLD_AMOUNT)
      })
    callback();
  });

  this.Then(/^Click on cancel wouldn't lead to any unsaved popup$/, function (callback) {
    this
      .click(officeConfigurationPage.button_cancel)
      .waitForElementNotPresent(officeConfigurationPage.button_popup_proceed, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
      callback();
  });

  this.Then(/^Mode will remain Edit mode with the threshold values with the changes made$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.button_popup_restore, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_save, getPageTimeout)
      .getValue(officeConfigurationPage.textfield_void_transactions_notifications, function(result) {
        assert.equal(result.value,value_view_void_trs_threshold_amount)
      })
      .getValue(officeConfigurationPage.textfield_void_item_notifications, function(result) {
        assert.equal(result.value,value_view_void_item_threshold_amount)
      })
      .getValue(officeConfigurationPage.textfield_return_notifications, function(result) {
        assert.equal(result.value,value_view_return_item_threshold_amount)
      })
    callback();
  });

  this.Then(/^Changes are saved and mode changes to View mode$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_trs_threshold_amount, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_trs_threshold_amount, function(result) {
        assert.equal(result.value.substr(1),value_view_void_trs_threshold_amount)
      })
      .getText(officeConfigurationPage.text_view_void_item_threshold_amount, function(result) {
        assert.equal(result.value.substr(1),value_view_void_item_threshold_amount)
      })
      .getText(officeConfigurationPage.text_view_return_item_threshold_amount, function(result) {
        assert.equal(result.value.substr(1),value_view_return_item_threshold_amount)
      })
    callback();
  });

  this.Then(/^Restore defaults values are saved and Mode changes to View mode without any warning popup$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_trs_threshold_amount, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_trs_threshold_amount, function(result) {
        assert.equal(result.value.substr(1),settings.constants.DEFAULT_VOID_TRS_THRESHOLD_AMOUNT)
      })
      .getText(officeConfigurationPage.text_view_void_item_threshold_amount, function(result) {
        assert.equal(result.value.substr(1),settings.constants.DEFAULT_VOID_ITEM_THRESHOLD_amount)
      })
      .getText(officeConfigurationPage.text_view_return_item_threshold_amount, function(result) {
        assert.equal(result.value.substr(1),settings.constants.DEFAULT_RETURN_ITEM_THRESHOLD_AMOUNT)
      })
    callback();
  });

  this.Then(/^Mode changes to View mode without any warning popup$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.button_popup_proceed, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.button_edit_notifications_settings, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
    callback();
  });


  this.Then(/^Notifications are set to OFF in view mode$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_transactions_notifications, function(result) {
        assert.equal(result.value,settings.constants.OFF)
      })
      .getText(officeConfigurationPage.text_view_void_item_notifications, function(result) {
        assert.equal(result.value,settings.constants.OFF)
      })
      .getText(officeConfigurationPage.text_view_return_notifications, function(result) {
        assert.equal(result.value,settings.constants.OFF)
      })
    callback();
  });

  this.Then(/^Notifications are set to ON in view mode$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_transactions_notifications, function(result) {
        assert.equal(result.value,settings.constants.ON)
      })
      .getText(officeConfigurationPage.text_view_void_item_notifications, function(result) {
        assert.equal(result.value,settings.constants.ON)
      })
      .getText(officeConfigurationPage.text_view_return_notifications, function(result) {
        assert.equal(result.value,settings.constants.ON)
      })
    callback();
  });

  this.Then(/^Notifications are set to PUSH in view mode$/, function (callback) {
    this
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
      .getText(officeConfigurationPage.text_view_void_transactions_notifications, function(result) {
        assert.equal(result.value,settings.constants.PUSH)
      })
      .getText(officeConfigurationPage.text_view_void_item_notifications, function(result) {
        assert.equal(result.value,settings.constants.PUSH)
      })
      .getText(officeConfigurationPage.text_view_return_notifications, function(result) {
        assert.equal(result.value,settings.constants.PUSH)
      })
    callback();
  });

  this.Then(/^A toast message shows up on the top right with view mode$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.toast, getPageTimeout)
      .waitForElementNotPresent(officeConfigurationPage.icon_loader, getPageTimeout)
      .waitForElementVisible(officeConfigurationPage.text_view_void_transactions_notifications, getPageTimeout)
    callback();
  });

  this.Then(/^No request will be sent to the server$/, function (callback) {
    this
      .waitForElementVisible(officeConfigurationPage.toast, getPageTimeout)
      .getText(officeConfigurationPage.toast, function(result) {
        assert.notEqual(result.value, settings.constants.SAVE_SUCCESS_MESSAGE)
      })
    callback();
  });

  this.Then(/^User will receive an informative toast indicating that no changes have been made$/, function (callback) {
    this
      .pause(2000)
      .waitForElementVisible(officeConfigurationPage.toast_feedback, getPageTimeout)
      .getText(officeConfigurationPage.toast_feedback, function(result) {
        assert.equal(result.value, settings.constants.NO_CHANGES_MADE)
      })
    callback();
  });

};
