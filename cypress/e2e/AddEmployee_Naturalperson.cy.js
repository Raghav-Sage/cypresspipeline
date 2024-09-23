/// <reference types="cypress" />

import AddEmployee from "../../cypress/support/addEmployeeNaturalPersonPO.cy"

describe("Demo Test" ,() => {
  var testData;
  before(function()
  {
    
  })
    beforeEach(function () {
   
  });

  it("TC_01 - Pass Test", function () {
    expect(true).to.equal(true)
    });

  it("TC_02 - Fail Test", function () {
    expect(true).to.equal(false)
  });




});
