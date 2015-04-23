# jquery.hlrlookup
A jQuery plugin that provides real-time mobile phone verification for HTML form submission

# Introduction
This plugin provides a means to validate mobile phone numbers in real-time when submitting HTML forms. The plugin sends an asynchronous request to hlrlookup.com, then returns the response in the format "live" or "not live" which would indicate whether the phone number supplied is active or not.

# Prerequisites
-jQuery library
-An active account at hlrlookup.com

# Usage
Simply include the jquery.hlrlookup.js plugin on your web page, after including the jquery library itself, then using the example code add it to your page. You will only need to change a few fields such as API key, password, and the relevant form identifiers.

Once a requested has been made the response will be returned in a few seconds. The example simply creates an alert of the response, in a production environment you will probably want to do something different, simple supply your own callbacks for 'complete' and 'error' and deal with the form submission appropriately.
