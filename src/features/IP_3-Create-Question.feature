@Regression

Feature: Create Question

    Scenario: 1.Verify that the register question and options page displayed properly

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ1"
        And Fill the english description as "Unique07_CQ1_Description_En"
        And Fill the japanese title as "Unique07_CQ1_JP"
        And Fill the japanese description as "Unique07_CQ1_Description_Jp"
        Then Click on the save and continue button
        Then Verify the question settings page
        Then Verify the validation of question
        Then Verify the validation of type selection
        Then Add question text as "Question 1"
        Then Select the question type as "Multiple Choice"
        And Verify the validation of option
        And verify that multiple option registration button is present
        Then Verify the required flag is present
        And Click add multiple option button
        And Verify the multiple option selection dilog box is present
        And Input multiple options
        And Click on option submit button
        Then Verify the exclusive toggle button is present
        Then Add maximum number of options
        And Verify that add option button is not present
        And Verify that the multiple question registration button is present
        Then Add maximum number of questions
        And Verify that add question button is not present


    Scenario:2. Verification of multiple questions registration with line break

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ2"
        And Fill the english description as "Unique07_CQ2_Description_En"
        And Fill the japanese title as "Unique07_CQ2_JP"
        And Fill the japanese description as "Unique07_CQ2_Description_Jp"
        Then Click on the save and continue button
        And Input multiple questions
        And Verify multiple questions registration with the given inputs are possible



    Scenario: 3.Create a survey with 1 MA,1 SA,1 FA Questions

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ3"
        And Fill the english description as "Unique07_CQ3_Description_En"
        And Fill the japanese title as "Unique07_CQ3_JP"
        And Fill the japanese description as "Unique07_CQ3_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        Then Click on the start button of a survey with description "Unique07_CQ3_Description_En"
        Then Click on the stop button of a survey with description "Unique07_CQ3_Description_En"
        Then Click on the edit button of a survey with title "Unique07_CQ3"
        And Verify that questions MA,SA,FA types created properly

    Scenario: 4.Create a survey with 1 MA,1 SA questions with descending order of choices

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ4"
        And Fill the english description as "Unique07_CQ4_Description_En"
        And Fill the japanese title as "Unique07_CQ4_JP"
        And Fill the japanese description as "Unique07_CQ4_Description_Jp"
        And Click on the save and continue button
        And Create MA question with descending order of choices
        And Click add question button
        And Create SA question with descending order of choices
        And Click set for review button
        Then Click on the edit button of a survey with title "Unique07_CQ4"
        And Verify that MA choice order is descending
        And Verify that SA choice order is descending

    Scenario: 5.Create a survey with 1 MA,1 SA questions with random order of choices

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ5"
        And Fill the english description as "Unique07_CQ5_Description_En"
        And Fill the japanese title as "Unique07_CQ5_JP"
        And Fill the japanese description as "Unique07_CQ5_Description_Jp"
        And Click on the save and continue button
        And Create MA question with random order of choices
        And Click add question button
        And Create SA question with random order of choices
        And Click set for review button
        Then Click on the edit button of a survey with title "Unique07_CQ5"
        And Verify that MA choice order is random
        And Verify that SA choice order is random


    Scenario: 6.Verify that the drag and drop choices working properly

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ6"
        And Fill the english description as "Unique07_CQ6_Description_En"
        And Fill the japanese title as "Unique07_CQ6_JP"
        And Fill the japanese description as "Unique07_CQ6_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Drag and drop the MA question choices
        And Drag and drop the SA question choices
        And Click set for review button
        Then Click on the start button of a survey with description "Unique07_CQ6_Description_En"
        Then Click on the stop button of a survey with description "Unique07_CQ6_Description_En"
        Then Click on the edit button of a survey with title "Unique07_CQ6"
        And Verify that choices drag and dropped properly

    Scenario: 7.Creating a survey with required question, exclusive choice and ascending order

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_CQ7"
        And Fill the english description as "Unique07_CQ7_Description_En"
        And Fill the japanese title as "Unique07_CQ7_JP"
        And Fill the japanese description as "Unique07_CQ7_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click on the exclusive toggle button
        And Click on the required toggle button of question number "2"
        And Click set for review button