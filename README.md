# ReactApp-Testing

The web application can be found here: 
https://fe-automation-tool.s3.eu-west-1.amazonaws.com/index.html 

**Note: Of the three scenarios, at least one of the test cases will not work! **

The app is intended to display a list from the spacex API 
(https://github.com/r-spacex/SpaceX-API) 

**Scenarios:
Scenario 1:**
    SCENARIO Data should load onto the page
    GIVEN 
    The page loads
    THEN A screen will appear with a list of SpaceX API results


**Scenario 2:**
    SCENARIO Filter by year
    **GIVEN** 
    Selecting filter
    WHEN Setting filter by year to 2015
THEN Return a list of only launches in 2015 

**Scenario 3:**
    SCENARIO Order should be done alphabetically
    **GIVEN** 
    No year filter is on
    WHEN Ordering is done 'descending'
THEN Items should be ordered alphabetically 
