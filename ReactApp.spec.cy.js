///<reference types = "cypress"/>

describe("Spacex Module", () => {
  it("Verify that the spacex data is loaded successfully", () => {
    cy.visit("https://fe-automation-tool.s3.eu-west-1.amazonaws.com/index.html");
    //Verified SPACEX image
    cy.get('img[src="/static/media/spacex-logo.e755fcbf.png"]')
      .invoke("attr", "alt")
      .should("contain", "SpaceX");
    cy.get('img[src="/static/media/launch-home.b539e3f9.png"]')
      .invoke("attr", "alt")
      .should("contain", "Launch Home");
    //Verified the text "LAUNCHES"
    cy.get('span[class="app__logo-txt"]')
      .invoke("text")
      .should("contain", "Launches");
    //Verified "Reload Data" button
    cy.get('button[class="button button--reload"]')
      .invoke("text")
      .should("contain", "Reload Data");
    //Verified the list of launches
    cy.get("li div span:nth-child(2)").each((listItems) => {
      cy.wrap(listItems).should("contain", listItems.text());
    });
  });

  // Setting filter by year 2015
  it("Verify that the user can  access the list of launches by selecting the year 2015", () => {
    //Select the year 2015
    cy.get('div[class="app__filters"] select:nth-child(1)').select([9]);
    //Verified the launches of year 2015
    cy.get("li div span:nth-child(2)").each((listItems) => {
      cy.wrap(listItems).should("contain", listItems.text());
    });
  });

    // Descending Order
    it("Verify that the items should be ordered alphabetically when ordering is done in descending", () => {
      //No year filter is on
      cy.visit("https://fe-automation-tool.s3.eu-west-1.amazonaws.com/index.html");
      cy.get('div[class="app__filters"] select:nth-child(1)').select([0]);
      //Verified the 'Sort Ascending' button
      cy.contains("button", "Sort Ascending").should("be.visible").click();
      cy.wait(2000);
      
      //Verifiying whether the entries are in descending order or not.
      cy.get("span[class = 'launch-item__label']")
      .then(items => {
        const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
        const sortedItems = unsortedItems.slice().sort();
        expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
      });

      });
  });
