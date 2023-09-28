@Regression
Feature: Survey Response



    Scenario: Verify the survey response page

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique07_SR1"
        And Fill the english description as "Unique07_SR1_Description_En"
        And Fill the japanese title as "Unique07_SR1_JP"
        And Fill the japanese description as "Unique07_SR1_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SR1_Description_En"
        And Open the url of questionnaire answer screen of survey with title "Unique07_SR1"
        And Answer question 1
        And Answer question 2
        And Answer question 3 as "Answer for FA question"
        Then Click on the submit button
        Given Launch the application
        And Click on the response button of a survey with description "Unique07_SR1_Description_En"
        And Verify that user id is present in the page
        And Verify that corresponding response date is present in the page
        And Click view button
        And Verify the survey title is same as "Unique07_SR1"
        And Verify the MA question results
        And Verify the SA question results
        Then Verify the FA question results is same as "Answer for FA question"