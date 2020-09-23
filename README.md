Automation by Ravi

Prerequisites

- install Node
- npm install -g protractor to install protractor
- npm install to install the project dependencies
- browser : Chrome

Description

- run tests: protractor .\conf\config.js from main folder
- After completing the test run the Test report in chrome browser which is located under reports folder
- I used cucumber to write scenarios in BDD style
- Designed this framework in page object model and with util and helper functions which I have used while writing page functions
- I automated the given user journeys, if given time I also use to automate the Search for a festival via search field and confirm that it appears in the results and add it to basket and validate it ,
- I also automate login functionality, checkout like entering user details and doing a checkout with test cards
- Finding unique elements was difficult, using xpath  found unique elements
- 3rd party tools used are cucumber, chai for assertion, cucumber htm reported for reporting the tests, eslint for linting
- Also used prettier for formatting code
- All pages are located inside pages folder
- Feature files and step definition are located inside Tests folder
