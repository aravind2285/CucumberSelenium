$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successfull login with Valid credentials",
  "description": "",
  "id": "login-to-application;successfull-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens URL \"URL\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email as \"\u003cusername\u003e \" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-to-application;successfull-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-to-application;successfull-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "hi",
        "oye"
      ],
      "line": 12,
      "id": "login-to-application;successfull-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "hmm",
        "yes"
      ],
      "line": 13,
      "id": "login-to-application;successfull-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Successfull login with Valid credentials",
  "description": "",
  "id": "login-to-application;successfull-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens URL \"URL\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email as \"hi \" and Password as \"oye\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 21476963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3475840600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hi ",
      "offset": 22
    },
    {
      "val": "oye",
      "offset": 44
    }
  ],
  "location": "Steps.user_enters_email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1097361200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 2301430300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_close_browser()"
});
formatter.result({
  "duration": 1442123800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successfull login with Valid credentials",
  "description": "",
  "id": "login-to-application;successfull-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens URL \"URL\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email as \"hmm \" and Password as \"yes\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "duration": 1958525700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3464451000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hmm ",
      "offset": 22
    },
    {
      "val": "yes",
      "offset": 45
    }
  ],
  "location": "Steps.user_enters_email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 649749300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 195171300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_close_browser()"
});
formatter.result({
  "duration": 7171673700,
  "status": "passed"
});
});