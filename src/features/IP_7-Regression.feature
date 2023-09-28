@RegressionSurvey
Feature: Regression
    #//////////////////////////////////////Survey Display//////////////////////////////////////


    Scenario: Create a survey with 10MA Questions

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique101_RC_MA New"
        And Fill the english description as "Unique101_RC_MA New Test Questions"
        And Fill the japanese title as "Unique101_RC_MA New - jp"
        And Fill the japanese description as "Unique101_RC_MA New Test Questions - jp"
        And Click on the save and continue button
        And Create ten questions with MA type and 50 options
        And Click set for review button
        And Click on the start button of a survey with description "Unique101_RC_MA New Test Questions"
        And Click on the copy link button of a survey with title "Unique101_RC_MA New"

    Scenario: Verification of MA answer screen

        Then Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_MA New"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_MA New"
        Then Verify the question and options of MA question "This is En Question - 0"


    Scenario: Verification of MA question with maximum capacity in answer screen

        Then Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_MA New"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_MA New"
        Then Verify the number of questions in the MA survey
        Then Verify the number of options under each MA question


    Scenario: Create a survey with 10SA Questions

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique101_RC_SA New"
        And Fill the english description as "Unique101_RC_SA New Test Questions"
        And Fill the japanese title as "Unique101_RC_SA New - jp"
        And Fill the japanese description as "Unique101_RC_SA New Test Questions - jp"
        And Click on the save and continue button
        And Create ten questions with SA type and 50 options
        And Click set for review button
        And Click on the start button of a survey with description "Unique101_RC_SA New Test Questions"
        And Click on the copy link button of a survey with title "Unique101_RC_SA New"



    Scenario: Verification of SA answer screen

        Then Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_SA New"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_SA New"
        Then Verify the question and options of SA question "This is En Question - 0"



    Scenario: Verification of SA question with maximum capacity in answer screen


        Then Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_SA New"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_SA New"
        Then Verify the number of questions in the SA survey
        Then Verify the number of options under each SA question



    Scenario: Create a survey with 10FA Questions

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique101_RC_FA New"
        And Fill the english description as "Unique101_RC_FA New Questions"
        And Fill the japanese title as "Unique101_RC_FA New - jp"
        And Fill the japanese description as "Unique101_RC_FA New Questions - jp"
        And Click on the save and continue button
        And Create ten questions with FA type
        And Click set for review button
        And Click on the start button of a survey with description "Unique101_RC_FA New Questions"
        And Click on the copy link button of a survey with title "Unique101_RC_FA New"



    Scenario: Verification of FA answer screen

        Then Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_FA New"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_FA New"
        Then Verify the question of FA question "This is En Question - 0"


    Scenario: Verification of FA question with maximum capacity in answer screen

        Then Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_FA New"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_FA New"
        Then Verify the number of questions in the FA survey
        Then Verify the number of options under each FA question


    Scenario: Create a survey with 4 MA,3 SA,3 FA Questions

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique101_RC_ 4 MA,3 SA,3 FA"
        And Fill the english description as "Unique101_RC_ 4 MA,3 SA,3 FA Questions"
        And Fill the japanese title as "Unique101_RC_ 4 MA,3 SA,3 FA - jp"
        And Fill the japanese description as "Unique101_RC_ 4 MA,3 SA,3 FA Questions - jp"
        And Click on the save and continue button
        And Create ten questions with 4MA,3SA,3FA types
        And Click set for review button
        And Click on the start button of a survey with description "Unique101_RC_ 4 MA,3 SA,3 FA Questions"
        And Click on the copy link button of a survey with title "Unique101_RC_ 4 MA,3 SA,3 FA"

    Scenario: Verification of MA,SA and FA question with maximum capacity in answer screen

        Given Launch the application
        And Click on the copy link button of a survey with title "Unique101_RC_ 4 MA,3 SA,3 FA"
        Then Open the url of questionnaire answer screen of survey with title "Unique101_RC_ 4 MA,3 SA,3 FA"
        Then Verify the number of MA questions in the survey
        Then Verify the number of options under the MA questions
        Then Verify the number of SA questions in the survey
        Then Verify the number of options under the SA questions
        Then Verify the number of FA questions in the survey
        Then Verify the number of options under the FA questions


    Scenario: Data filling according to the language selection

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique101_RC_ MA,SA,FA"
        And Fill the english description as "Unique101_RC_ MA,SA,FA Questions"
        And Fill the japanese title as "Unique101_RC_ MA,SA,FA - jp"
        And Fill the japanese description as "Unique101_RC_ MA,SA,FA Questions - jp"
        And Click on the save and continue button
        And Create an MA question
        And Click set for review button







# Drag and Drop in a demo site


# Scenario: Drag and Drop

#     Given Drag and drop the file to the site


# Multiple file upload in a demo site

# Scenario: Multiple file upload

#     Given Open the url of the site and input multiple files
