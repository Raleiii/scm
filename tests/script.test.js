/**
 * @jest-environment jsdom
 */

const { initializePage } = require("../script.js");

describe("initializePage", () => {
  beforeEach(() => {
    document.body.innerHTML = "<p id=\"page-status\">Checking page status...</p>";
  });

  test("updates the status message when the page is initialized", () => {
    initializePage();

    expect(document.getElementById("page-status").textContent).toBe(
      "This should fail"
    );
  });
  
  test("does not throw when the status element is missing", () => {
    document.body.innerHTML = "";

    expect(() => initializePage()).not.toThrow();
  });
});
