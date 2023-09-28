@Regression
Feature: Dashboard

    Scenario: 1.Verification of dashboard page in Japanese

        Given Launch the application
        And Switch to japanese language
        Then Verify the survey in japanese

    Scenario: 2.Verification of  of dashboard page in English

        And Switch to english language
        Then Verify the survey in english

    Scenario: 3.Verification of add new button

        And Click on the add new button
        Then Verify that the survey create page is displayed properly

    Scenario: 4.Verification of edit button

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_DB1"
        And Fill the english description as "Unique07_DB1__Description_En"
        And Fill the japanese title as "Unique07_DB1_JP"
        And Fill the japanese description as "Unique07_DB1_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the edit button of a survey with title "Unique07_DB1"
        Then Verify that the survey edit page is displayed properly

    Scenario: 5.Verification of survey start

        And Click on the start button of a survey with description "Unique07_DB1__Description_En"
        Then Verify that the survey is started

    Scenario: 6.Verification of copy link button

        And Click on the copy link button of a survey with title "Unique07_DB1"
        Then Open the url of questionnaire answer screen of survey with title "Unique07_DB1"


    Scenario: 7.Verify the response button of a survey

        Given Launch the application
        And Click on the response button of a survey with description "Unique07_DB1__Description_En"
        Then Verify that the response screen is displayed properly

    Scenario: 8.Verification of survey stop

        And Click on the stop button of a survey with description "Unique07_DB1__Description_En"
        Then  Verify that the survey is stopped

    Scenario: 9.Verification of all buttons after survey stop

        And Verify the status of all buttons of survey with title "Unique07_DB1" after survey stop


    Scenario: 10.Verification of survey title in english and japanese

        And Verify the survey title "Unique07_DB1" in english
        And Switch to japanese language
        And Verify the survey title "Unique07_DB1_JP" in japanese
        Then Switch to english language


    Scenario: 11.Verification of survey details

        Given Launch the application
        And Verify the survey details title "Unique07_DB1",description "Unique07_DB1__Description_En",date and status is displyed properly

    Scenario: 12.Verification of view button

        And Click on the view button of a survey with title "Unique07_DB1"
        Then Verify that the survey view page is displayed properly

    Scenario: 13.Verification of survey delete

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_DB2"
        And Fill the english description as "Unique07_DB2_Description_En"
        And Fill the japanese title as "Unique07_DB2_JP"
        And Fill the japanese description as "Unique07_DB2_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the delete button of a survey with title "Unique07_DB2"
        Then Verify that the survey is deleted
