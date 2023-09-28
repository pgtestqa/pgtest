@Regression
Feature: Survey Edit

    Scenario: 1.Verification of survey edit

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SE1"
        And Fill the english description as "Unique07_SE1_Description_En"
        And Fill the japanese title as "Unique07_SE1_JP"
        And Fill the japanese description as "Unique07_SE1_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the edit button of a survey with title "Unique07_SE1"
        And Update survey title as "Unique07_SE1_Updated"
        And Update survey description as "Unique07_SE1_Description_En_Updated"
        And Update question title as "Question title Updated"
        And Update option title as "Option title Updated"
        Then Click set for review button



    Scenario:2. Verification of survey edit after survey start

        Given Launch the application
        And Click on the add new button
        And Select the default language as "English"
        And Select the required language as "Japanese"
        And Fill the english title as "Unique07_SE2"
        And Fill the english description as "Unique07_SE2_Description_En"
        And Fill the japanese title as "Unique07_SE2_JP"
        And Fill the japanese description as "Unique07_SE2_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SE2_Description_En"
        And Click on the edit button of a survey with title "Unique07_SE2"
        And Update survey title as "Unique07_SE2_Updated"
        And Update survey description as "Unique07_SE2_Description_En_Updated"
        And Update question title as "AutoUNI_Updated?"
        And Update option title as "AutoUNI_Updated1"
        And Click publish button
        And Verify that survey title is updated as "Unique07_SE2_Updated"
        Then Verify that survey description is updated as "Unique07_SE2_Description_En_Updated"


    Scenario:3. Survey edit with verification of all validations

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SE3"
        And Fill the english description as "Unique07_SE3_Description_En"
        And Fill the japanese title as "Unique07_SE3_JP"
        And Fill the japanese description as "Unique07_SE3_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the edit button of a survey with title "Unique07_SE3"
        And Verify the title validation in edit page
        And Verify the description validation in edit page
        And Update survey title as "Unique07_SE3_Update"
        And Update survey description as "Unique07_SE3_Description_En_Update"
        And Verify the question validation in edit page
        And Update question title as "Question 1 Update"
        And Select the question type as "Multiple Choice"
        And Verify the option validation in edit page
        And Update option title as "Option 1 Update"
        Then Click set for review button



    Scenario: 4.Verification of drag and drop of questions

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SE4"
        And Fill the english description as "Unique07_SE4_Description_En"
        And Fill the japanese title as "Unique07_SE4_JP"
        And Fill the japanese description as "Unique07_SE4_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the edit button of a survey with title "Unique07_SE4"
        And Drag and drop the questions
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SE4_Description_En"
        And Click on the stop button of a survey with description "Unique07_SE4_Description_En"
        And Click on the edit button of a survey with title "Unique07_SE4"
        Then Verify that questions are drag and dropped properly


    Scenario: 5.Verification of drag and drop of choices

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SE5"
        And Fill the english description as "Unique07_SE5_Description_En"
        And Fill the japanese title as "Unique07_SE5_JP"
        And Fill the japanese description as "Unique07_SE5_Description_Jp"
        And Click on the save and continue button
        And Create three question with MA,SA,FA types
        And Click set for review button
        And Click on the edit button of a survey with title "Unique07_SE5"
        And Expand all questions
        And Drag and drop the MA question choices
        And Drag and drop the SA question choices
        And Click set for review button
        And Click on the start button of a survey with description "Unique07_SE5_Description_En"
        And Click on the stop button of a survey with description "Unique07_SE5_Description_En"
        And Click on the edit button of a survey with title "Unique07_SE5"
        Then Verify that choices drag and dropped properly


    @editmultiple
    Scenario: Verify the error response of multiple edit

        Given Launch the application
        And Click on the add new button
        And Select the default language as "Japanese"
        And Select the required language as "English"
        And Fill the english title as "Unique07_SE6"
        And Fill the english description as "Unique07_SE6_Description_En"
        And Fill the japanese title as "Unique07_SE6_JP"
        And Fill the japanese description as "Unique07_SE6_Description_Jp"
        And Click on the save and continue button
        And Create MA question with descending order of choices
        And Click add question button
        And Create SA question with descending order of choices
        Then Click set for review button
        Given Launch application in multiple tab
        And Click edit button of survey with title "Unique07_SE6" in second tab
        And Click on the edit button of a survey with title "Unique07_SE6"
        And Input the tilte as "Unique07_SE6[Edited]",description as "Unique07_SE6_Description_En[Edited]"
        And Click on set for review button in multiple tab
        Then Verify the error response


