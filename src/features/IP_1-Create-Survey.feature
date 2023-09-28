@Regression
Feature: Create Survey

        Scenario: 1.Create a survey with valid data and default language as english

                Given Launch the application
                And Click on the add new button
                And Verify the validation of default language
                And Verify the validation of required language
                And Select the default language as "English"
                And Select the required language as "Japanese"
                And Verify the validation of title
                And Verify the validation of description
                And Verify the maximum character validation in title
                And Verify the maximum character validation in description
                And Fill the english title as "Unique07_CS1"
                And Fill the english description as "Unique07_CS1_Description in English"
                And Fill the japanese title as "Unique07_CS1_JP"
                And Fill the japanese description as "Unique07_CS1_Description in Japanese"
                Then Click on the save and continue button

        Scenario: 2.Create a survey with english only

                Given Launch the application
                And Click on the add new button
                And Verify the validation of default language
                And Verify the validation of required language
                And Select the default language as "English"
                And Verify the validation of title
                And Verify the validation of description
                And Verify the maximum character validation in title
                And Verify the maximum character validation in description
                And Fill the english title as "Unique07_CS2"
                And Fill the english description as "Unique07_CS2_Description in English"
                Then Click on the save and continue button

        Scenario: 3.Create a survey with default langauge as japanese

                Given Launch the application
                And Click on the add new button
                And Verify the validation of default language
                And Verify the validation of required language
                And Select the default language as "Japanese"
                And Select the required language as "English"
                And Verify the validation of title
                And Verify the validation of description
                And Verify the maximum character validation in title
                And Verify the maximum character validation in description
                And Fill the japanese title as "Unique07_CS3_JP"
                And Fill the japanese description as "Unique07_CS3_Description in Japanese"
                And Fill the english title as "Unique07_CS3"
                And Fill the english description as "Unique07_CS3_Description in English"
                Then Click on the save and continue button


        Scenario: 4.Create survey with japanese only

                Given Launch the application
                And Click on the add new button
                And Verify the validation of default language
                And Verify the validation of required language
                And Select the default language as "Japanese"
                And Verify the validation of title
                And Verify the validation of description
                And Verify the maximum character validation in title
                And Verify the maximum character validation in description
                And Fill the japanese title as "Unique07_CS4_JP"
                And Fill the japanese description as "Unique07_CS4_Description in Japanese"
                Then Click on the save and continue button


        Scenario: 5.Create survey without question order type

                Given Launch the application
                And Click on the add new button
                And Verify the validation of default language
                And Verify the validation of required language
                And Select the default language as "Japanese"
                And Select the required language as "English"
                And Verify the validation of title
                And Verify the validation of description
                And Verify the maximum character validation in title
                And Verify the maximum character validation in description
                And Fill the english title as "Unique07_CS5"
                And Fill the english description as "Unique07_CS5_Description in English"
                And Fill the japanese title as "Unique07_CS5_JP"
                And Fill the japanese description as "Unique07_CS5_Description in Japanese"
                Then Click on the save and continue button
