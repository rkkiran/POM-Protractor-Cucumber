Feature: Search for a festival and add it to the basket

    Background: Go to home page
        Given I navigate to festicket home page

    Scenario: On home page search for festival
        When I search for 'Mad Cool Festival 2021' festival
        Then 'Mad Cool Festival 2021' festival should appears in the results

    Scenario: Add a festival ticket to basket
        Given 'big-sound-festival' is displayed on sale page and I click Book Now
        When I navigate to 'big-sound-festival' shop page and add a 'VIP Front Stage Pass' to basket
        Then 'VIP Front Stage Pass' should be added successfully to Basket

