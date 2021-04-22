Feature: Login to application
 
Scenario Outline: Successfull login with Valid credentials

Given user Launch chrome browser
When user opens URL "URL" 
And user enters email as "<username> " and Password as "<password>"
And click on Login button
And I close browser
Examples:
|username|password|
|hi|oye|
|hmm|yes|