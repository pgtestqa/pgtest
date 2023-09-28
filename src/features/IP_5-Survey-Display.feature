@Regression
Feature: Survey Display


    # Sprint 5 IPPOC2-68,69,71,73
    Scenario: 1.Verify the validations in answer screen

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique07_SD1"
        And Fill the english description as "Unique07_SD1_Description_En"
        And Fill the japanese title as "Unique07_SD1_JP"
        And Fill the japanese description as "Unique07_SD1_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click the exclusive toggle button of SA question
        And Click the exclusive toggle button of MA question
        And Click on the required toggle button of question number "2"
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SD1_Description_En"
        And Click on the copy link button of a survey with title "Unique07_SD1"
        And Open the url of questionnaire answer screen of survey with title "Unique07_SD1"
        And Verify the validation for required fields
        Then Verify the validation of maximum character for FA question

    Scenario: 2.Verification of Questionnaire answer screen in japanese

        And Switch to japanese in answer screen
        And Verify the answer screen in japanese

    Scenario: 3.Verification of answer display in japanese

        And Verify the question in japanese
        And Verify the options in japanese

    Scenario: 4.Verification of Questionnaire answer screen in english

        And Switch to english in answer screen
        And Verify the answer screen in english

    Scenario: 5.Verification of answer display in english

        And Verify the question in english
        And Verify the options in english

    Scenario: 6.Verify the ascending order display

        And Verify the choices of SA question "This is question 1" are displayed in ascending order
        And Verify the choices of MA question "This is question 0" are displayed in ascending order

    Scenario: 7.Verification of MA,SA,FA answers in single survey

        And Verify the question and options of SA question "This is question 1"
        And Verify the question and options of MA question "This is question 0"
        And Verify the question of FA question "This is question 2"


    # Sprint 4 IPPOC2-65,Sprint 5 IPPOC2-60,64
    Scenario: 8.Verification of exclusive choice

        And Verify the excluisve choices of SA question "This is question 1"
        Then Verify the exclusive choices of MA question "This is question 0"


    Scenario: 9.Verify the descending order display

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SD2"
        And Fill the english description as "Unique07_SD2_Description_En"
        And Fill the japanese title as "Unique07_SD2_JP"
        And Fill the japanese description as "Unique07_SD2_Description_Jp"
        And Click on the save and continue button
        And Create MA question with descending order of choices
        And Click add question button
        And Create SA question with descending order of choices
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SD2_Description_En"
        And Click on the copy link button of a survey with title "Unique07_SD2"
        And Open the url of questionnaire answer screen of survey with title "Unique07_SD2"
        And Verify the choices of SA question "This is question 1" are displayed in descending order
        Then Verify the choices of MA question "This is question 0" are displayed in descending order

    # Sprint 5 IPPOC2-56
    Scenario: 10.Verify the random order display

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SD3"
        And Fill the english description as "Unique07_SD3_Description_En"
        And Fill the japanese title as "Unique07_SD3_JP"
        And Fill the japanese description as "Unique07_SD3_Description_Jp"
        And Click on the save and continue button
        And Create MA question with random order of choices
        And Click add question button
        And Create SA question with random order of choices
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SD3_Description_En"
        And Click on the copy link button of a survey with title "Unique07_SD3"
        And Open the url of questionnaire answer screen of survey with title "Unique07_SD3"
        And Verify the choices of SA question "This is question 1" are displayed in random order
        Then Verify the choices of MA question "This is question 0" are displayed in random order

    Scenario: 11.Verification of Survey response register

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SD4"
        And Fill the english description as "Unique07_SD4_Description_En"
        And Fill the japanese title as "Unique07_SD4_JP"
        And Fill the japanese description as "Unique07_SD4_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SD4_Description_En"
        And Open the url of questionnaire answer screen of survey with title "Unique07_SD4"
        And Answer question 1
        And Answer question 2
        And Answer question 3 as "Answer for FA question"
        And Click on the submit button
        Then Verify the response message
