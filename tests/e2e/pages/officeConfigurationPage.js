/**
 * Page Objects for Office Configuration - Notification accordion
 */
var officeConfigurationPage = {

  accordion_close: "span[class='accordion-click-event']",

  accordion_open: "span[class='accordion-click-event accordion-title-bold']",

  accordion_notification_settings_open_state: "div[class='accordion-body panel-body']",

  accordion_notification_settings_closed_state: "div[class='accordion-body hide']",

  text_notification_settings_title: "h4[class='panel-title noselect accordion-click-event']",

  text_view_void_trs_threshold_amount: "div[id='void-notification-threshold-value']",

  text_view_void_transactions_notifications: "div[id='void-notification-enabled-value']",

  text_void_transactions_notifications: "div[id='void-notification-enabled']",

  radio_off_void_transactions_notifications: "label[class='radio-btn  void-notification-off mr-29']",

  radio_on_void_transactions_notifications: "label[class='radio-btn  void-notification-on mr-29']",

  radio_push_void_transactions_notifications: "label[class='radio-btn  void-notification-push']",

  textfield_void_transactions_notifications: "input[name='void-notification-threshold']",

  text_view_void_item_threshold_amount: "div[id='voiditems-notification-threshold-value']",

  text_view_void_item_notifications: "div[id='voiditems-notification-enabled-value']",

  text_void_item_notifications: "div[id='voiditems-notification-enabled']",

  radio_off_void_item_notifications: "label[class='radio-btn  voiditems-notification-off mr-29']",

  radio_on_void_item_notifications: "label[class='radio-btn  voiditems-notification-on mr-29']",

  radio_push_void_item_notifications: "label[class='radio-btn  voiditems-notification-push']",

  textfield_void_item_notifications: "input[name='voiditems-notification-threshold']",

  text_view_return_item_threshold_amount: "div[id='return-notification-threshold-value']",

  text_view_return_notifications: "div[id='return-notification-enabled-value']",

  text_return_notifications: "div[id='return-notification-enabled']",

  radio_off_return_notifications: "label[class='radio-btn  return-notification-off mr-29']",

  radio_on_return_notifications: "label[class='radio-btn  return-notification-on mr-29']",

  radio_push_return_notifications: "label[class='radio-btn  return-notification-push']",

  textfield_return_notifications: "input[name='return-notification-threshold']",

  button_edit_notifications_settings: "i[data-tooltiptitle='Edit User']",

  icon_office_tools: "i[class='fa fa-wrench']",

  link_nav_pulse_configuration: "a[href='#/pulse-configuration']",

  link_nav_sub_section: "a[href='#/sub-section1']",

  button_save: "button[id='notifications_save']",

  button_cancel: "button[id='notifications_cancel']",

  button_restore_defaults: "button[id='notifications_reset']",

  popup_text: "div[class='dialog-body']",

  button_popup_cancel: "button[data-value='cancel']",

  button_popup_proceed: "button[data-value='proceed']",

  button_popup_restore: "button[data-value='restore']",

  icon_popup_close: "i[class='fa fa-times dialog-cross']",

  icon_loader: "div[class='loader-container large-loader']",

  toast: "div[class='alert-body']",

  toast_close: "i[class='close fa fa-remove']",

  toast_feedback: "div[class='toast col-xs-11 col-sm-3 alert alert-feedback animated fadeInDown']",

};

module.exports = officeConfigurationPage;
