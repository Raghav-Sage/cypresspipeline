class AddEmployee {

  weblocators = {

    readyforpayrunicon: () => cy.get('app-payrun-completion-indicator.text-end > div > .icon'),
    readyforpayruntext: () => cy.get('app-payrun-completion-indicator.text-end > div > .ms-1'),

    readyfortaxsubmissionicon: () => cy.get('.ms-4 > div > .icon'),
    readyfortaxsubmissiontext: () => cy.get('.ms-4 > div > .ms-1'),

    // pay run specific details 
    sideNavEmployee: () => cy.waitForElement(':nth-child(2) > app-side-nav-menu-item > .side-nav-menu-item'),
    addEmployeeButton: () => cy.waitForElement('.btn-primary'),
    getEmployeetypeclick: () => cy.waitForElement('app-za-employee-quickstart-personal-details > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(1) > .col > .row > #natureOfPersonId > :nth-child(2) > .input-group > .dropdown-toggle > .placeholder'),
    getEmployeeTypeClickValue: () => cy.waitForElement('app-za-employee-quickstart-personal-details > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(1) > .col > .row > #natureOfPersonId > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(2)'),
    getFirstName: () => cy.waitForElement('app-za-employee-quickstart-personal-details > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(4) > .col > .row > #firstName > :nth-child(2) > .input-group > .form-control'),
    getSureName: () => cy.get('app-za-employee-quickstart-personal-details > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(7) > .col > .row > #surname > :nth-child(2) > .input-group > .form-control'),
    getDateBirth: () => cy.get('app-za-employee-quickstart-personal-details > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(14) > .col > .row > #dateOfBirth > :nth-child(2) > .input-group > .form-control'),
    getSelectYear: () => cy.get("select[title='Select year']"),
    getSelectMonth: () => cy.get("select[title='Select month']"),
    getSelectDate: () => cy.get('.ngb-dp-day').contains('15'),
    getEmailID: () => cy.get('app-za-employee-quickstart-contact-details > app-za-employee-contact-details > [appfieldprocessing=""] > :nth-child(5) > .col > .row > .col-6 > :nth-child(2) > .input-group > .form-control'),
    getEmployeeCode: () => cy.waitForElement('app-za-employee-quickstart-payment-details > app-employee-details > [appfieldprocessing=""] > :nth-child(1) > .col > .row > #employeeCode > :nth-child(2) > .input-group > .form-control'),
    getEmployeStartDateClick: () => cy.get('app-za-employee-quickstart-payment-details > app-employee-details > [appfieldprocessing=""] > :nth-child(2) > .col > .row > #startDate > :nth-child(2) > .input-group > .form-control'),
    getEmployeStartCalendar: () => cy.get("div[class='ngb-dp-day']"),
    getPayFrequency: () => cy.waitForElement('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(1) > .col > .row > #paySchedule > :nth-child(2) > .input-group > .dropdown-toggle > .placeholder'),
    getPayFrequencySelection: () => cy.contains(' Monthly '),
    getAverageWorking: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(3) > .col > .row > #totalWorkingHoursPerFrequency > :nth-child(2) > .input-group > .form-control'),
    getHour: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(4) > .col > .row > #workingHoursPerDay > :nth-child(2) > .input-group > .form-control'),
    getEmployeeRateClick: () => cy.get("div[class='tab-panel active'] app-za-employee-quickstart app-za-employee-quickstart-payment-details app-employee-hours-rates div div[class='row form-group'] div[class='col offset-4'] div[class='row'] app-bindable-dropdown[id='rateFrequency'] div span[class='dropdown-label placeholder']"),
    getEmpoyeeRatesearch: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(5) > .col > .row > #rateFrequency > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(1) > app-search > .search-base > .form-control'),
    getEmployeeRateSelect: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(5) > .col > .row > #rateFrequency > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(2)'),
    getEmployeeRateValueBox: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(5) > .col > .row > #rateFrequency > :nth-child(2) > .input-group > .dropdown-toggle > :nth-child(1)'),
    getRateForEmployee: () => cy.get("div[class='tab-panel active'] app-za-employee-quickstart app-za-employee-quickstart-payment-details app-employee-hours-rates div input[placeholder='0.00']"),
    getHoureRate: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(7) > :nth-child(1) > :nth-child(1) > .col > .col-6'),
    getMonthlyRate: () => cy.get('app-za-employee-quickstart-payment-details > app-za-employee-payment-details > .employee-payment-container > app-employee-rates-and-payments > app-employee-hours-rates > [appfieldprocessing=""] > :nth-child(7) > :nth-child(1) > :nth-child(2) > .col > .col-6'),
    getTaxstart: () => cy.get(':nth-child(1) > :nth-child(1) > .col > .row > #taxStartDate > :nth-child(2) > .input-group > .form-control'),
    getTaxstartSelect: () => cy.waitForElement("div[class='ngb-dp-day']"),
    getTaxStatus: () => cy.waitForElement("div[class='tab-panel active'] app-za-employee-quickstart app-za-employee-quickstart-tax-details app-za-employee-tax-details div[class='employee-tax-container'] div div[class='row form-group'] div[class='col offset-4'] div[class='row'] app-bindable-dropdown[id='employeeTaxStatus'] div span[class='dropdown-label placeholder']"),
    getTaxStatusSelect: () => cy.waitForElement(":nth-child(1) > :nth-child(3) > .col > .row > #employeeTaxStatus > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(2)"),
    

    // pay slip values

    getsavenext: () => cy.waitForElement(" button[class='btn btn-secondary']"),
    getBasicSalaryAmtDisplay: () => cy.get(':nth-child(3) > app-employee-pay-component-input-value > .row > .form-group'),
    getAddEarnings: () => cy.get(':nth-child(1) > app-employee-pay-component-group-card > .card > .card-header > .row > .text-end > .btn'),
    getAddEarningsModal: () => cy.get("div[class='modal-content'] app-add-pay-component-modal-content"),
    getAllowanceCheckbox: () => cy.waitForElement(':nth-child(2) > .row > .form-check > .custom-control > .custom-control-label'),
    getAEModalAddBtn: () => cy.waitForElement('.modal-sticky-footer > .btn-primary'),
    getAllowanceAmount: () => cy.get(':nth-child(3) > .ng-star-inserted > app-currency-input.ng-untouched > :nth-child(2) > .input-group > .form-control'),
    getAllowanceAmountDisplay: () => cy.get(':nth-child(6) > app-employee-pay-component-input-value > .row > .form-group'),
    customPayComponentRadioBtn: ()=> cy.get('#customPayComponent > .custom-control > .custom-control-label > span'),
    componentNameTextField: ()=>cy.get('#payComponentName > :nth-child(2) > .input-group > .form-control'),
    payslipDescriptionTextField: ()=> cy.get('#payAdviceName > :nth-child(2) > .input-group > .form-control'),
    payComponentCategoryDropdown: ()=> cy.get('app-pay-component-custom-details > :nth-child(3) > app-bindable-dropdown.ng-untouched > :nth-child(2) > .input-group > .dropdown-toggle'),
    taxCalculationMethodDropdownClick: ()=> cy.waitForElement('#taxCalcTypeId > :nth-child(2) > .input-group > .dropdown-toggle'),
    taxCalculationMethodDropdownSelectOption: ()=> cy.waitForElement('#taxCalcTypeId > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(2)'),
    inputTypeDropdownClick: ()=> cy.get(':nth-child(5) > .ng-untouched > :nth-child(2) > .input-group > .dropdown-toggle'),
    inputTypeDropdownSearchField: ()=> cy.waitForElement("ul[class='dropdown-menu show'] input[placeholder='Search']"),
    inputTypeDropdownClickSearchResult: ()=> cy.waitForElement("app-bindable-dropdown[name='inputType'] li:nth-child(2)"),
    periodicTaxableCheckbox: ()=> cy.waitForElement("app-bindable-dropdown[name='inputType'] li:nth-child(1)"),
    iRP5CodeDropdownClick: ()=> cy.waitForElement('#taxCode > :nth-child(2) > .input-group > .dropdown-toggle'),
    iRP5CodeDropdownSearchField: ()=> cy.waitForElement('#taxCode > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(1) > app-search > .search-base > .form-control'),
    iRP5CodeDropdownSearchResult: ()=> cy.waitForElement('#taxCode > :nth-child(2) > .input-group > .dropdown-menu > .dropdown-item.ng-star-inserted'),
    overtimeAllowanceAmount: ()=> cy.get(':nth-child(7) > app-employee-pay-component-input-value > .row > :nth-child(3) > .ng-star-inserted > app-currency-input.ng-untouched > :nth-child(2) > .input-group > .form-control'),
    overtimeAllowanceHours: ()=> cy.get('.ng-star-inserted > app-numeric-input.ng-untouched > :nth-child(2) > .input-group > .form-control'),
    overtimeAllowanceAmountDisplay: ()=> cy.get(':nth-child(7) > app-employee-pay-component-input-value > .row > .form-group'),

    getAddBenefitsBtn: () => cy.get(':nth-child(2) > app-employee-pay-component-group-card > .card > .card-header > .row > .text-end > .btn'),
    getAddBenefitsModal: () => cy.get("div[class='modal-content'] app-add-pay-component-modal-content"),
    getAccomodationCheckbox: () => cy.get(':nth-child(2) > .row > .form-check > .custom-control > .custom-control-label'),
    getABModalAddBtn: () => cy.get('.modal-sticky-footer > .btn-primary'),
    getAccomodationAmount: () => cy.get('.ng-star-inserted > app-currency-input.ng-untouched > :nth-child(2) > .input-group > .form-control'),
    getAccomodationAmountDisplay: () => cy.get('.card > .card-body > div[_ngcontent-ng-c1394656508=""] > app-employee-pay-component-input-value > .row > .form-group'),
    getAddDeductionsBtn: () => cy.get(':nth-child(3) > app-employee-pay-component-group-card > .card > .card-header > .row > .text-end > .btn'),
    getAddDeductionsModal: () => cy.get('.modal-sticky-footer > .btn-primary'),

    getAdditionalTaxCheckbox: () => cy.get(':nth-child(2) > .row > .form-check > .custom-control > .custom-control-label'),
    getADModalAddBtn: () => cy.get(':nth-child(2) > .row > .form-check > .custom-control > .custom-control-label'),
    getAdditionalTaxAmount: () => cy.get('.ng-star-inserted > app-currency-input.ng-untouched > :nth-child(2) > .input-group > .form-control'),

    getCompanyContributionBtn: () => cy.waitForElement(':nth-child(4) > app-employee-pay-component-group-card > .card > .card-header > .row > .text-end > .btn'),
    getPensionCheckbox: () => cy.get(":nth-child(2) > .row > .form-check > .custom-control > .custom-control-label"),
    getACCModalAddBtn: () => cy.get('.modal-sticky-footer > .btn-primary'),
    getCompanyContributionAmount: () => cy.get('.ng-star-inserted > app-currency-input.ng-untouched > :nth-child(2) > .input-group > .form-control'),
    getPayslipsavenext: () => cy.get(" button[class='btn btn-secondary']"),

    // personal

    getInitialsTextBox: () => cy.get('.employee-personal-details-container > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(3) > .col > .row > #initials > :nth-child(2) > .input-group > .form-control'),
    getRSAIDTextBox: () => cy.get('.employee-personal-details-container > app-za-employee-personal-details > [appfieldprocessing=""] > :nth-child(11) > .col > .row > #identityNumber > :nth-child(2) > .input-group > .form-control'),
    getMobileNoTextBox: () => cy.get('.employee-personal-details-container > app-za-employee-contact-details > [appfieldprocessing=""] > :nth-child(1) > .col > .row > #mobileNumber > :nth-child(2) > .input-group > .form-control'),
    getWorkTelephoneNo: () => cy.get('.employee-personal-details-container > app-za-employee-contact-details > [appfieldprocessing=""] > :nth-child(2) > .col > .row > #workTelephoneNumber > :nth-child(2) > .input-group > .form-control'),
    getfacsimilenumber: () => cy.get('.employee-personal-details-container > app-za-employee-contact-details > [appfieldprocessing=""] > :nth-child(3) > .col > .row > #facsimileNumber > :nth-child(2) > .input-group > .form-control'),
    gethomeTelephoneNumberTextBox: () => cy.get('.employee-personal-details-container > app-za-employee-contact-details > [appfieldprocessing=""] > :nth-child(4) > .col > .row > #homeTelephoneNumber > :nth-child(2) > .input-group > .form-control'),


    //Employement 

    getprimarylocationTextBox: () => cy.get('.tab-panel > app-employee-details > [appfieldprocessing=""] > :nth-child(4) > .col > .row > #primaryLocationName > :nth-child(2) > .input-group > .form-control'),
    getDepartmentTextBox: () => cy.get('.tab-panel > app-employee-details > [appfieldprocessing=""] > :nth-child(5) > .col > .row > #departmentId > #department > :nth-child(2) > .input-group > .dropdown-toggle > .placeholder'),
    getAddnewdropdown: () => cy.get('.tab-panel > app-employee-details > [appfieldprocessing=""] > :nth-child(5) > .col > .row > #departmentId > #department > :nth-child(2) > .input-group > .dropdown-menu > li.dropdown-item > .add-option'),
    getDepartmentnameTextBox: () => cy.get('#departmentName > :nth-child(2) > .input-group > .form-control'),
    getSaveButton1: () => cy.get('.col > .btn-primary'),


    // Tax

    getIncometaxreferencenumber: () => cy.get(':nth-child(3) > :nth-child(1) > .col > .row > #incomeTaxReferenceNumber > :nth-child(2) > .input-group > .form-control'),
    getStandardindustry: () => cy.get(':nth-child(3) > :nth-child(2) > .col > .row > #sicCode_code > .sic-code > #sicCode'),
    getcheckBoxstandardIndustry: () => cy.get('#sicCode01120 > .custom-control > .custom-control-label > span'),
    getselectButton: () => cy.get('.modal-footer > .btn-primary'),
    getExcludeCheckBox: () => cy.get('#chk_excludeFromSdl'),


    //Address

    addressbutton: () => cy.get('.list-group > :nth-child(7)'),
    unitnumber: () => cy.get('#residentialAddress_addressLine1 > :nth-child(2) > .input-group > .form-control'),
    complexname: () => cy.get('#residentialAddress_addressLine2 > :nth-child(2) > .input-group > .form-control'),
    streetnumber: () => cy.get('#residentialAddress_addressLine3 > :nth-child(2) > .input-group > .form-control'),
    streetname: () => cy.get('#residentialAddress_addressLine4 > :nth-child(2) > .input-group > .form-control'),
    suburb: () => cy.get('#residentialAddress_suburb > :nth-child(2) > .input-group > .form-control'),
    cityname: () => cy.get('#residentialAddress_city > :nth-child(2) > .input-group > .form-control'),
    provincedropdown: () => cy.get('#residentialAddress_stateCode > :nth-child(2) > .input-group > .dropdown-toggle'),
    selecteasterncape: () => cy.get('#residentialAddress_stateCode > :nth-child(2) > .input-group > .dropdown-menu > :nth-child(2)'),
    postcode: () => cy.get('#residentialAddress_postcode > :nth-child(2) > .input-group > .form-control'),
    postaladdresscheckbox: () => cy.get('#chk_syncPostalAddress'),
    workaddresscheckbox: () => cy.get('#chk_sameAsResidentialAddress'),

    //Retirement Funds

    retirementfundsbutton: () => cy.get('.list-group > :nth-child(8)'),
    addretirementfund: () => cy.get(':nth-child(2) > .row > .col > .btn'),
    rfstartdate: () => cy.get('#benefitFundStartDate_0 > :nth-child(2) > .input-group > .form-control'),
    rfyear: () => cy.get('[aria-label="Select year"]'),
    rfmonth: () => cy.get('[aria-label="Select month"]'),
    rfDate: () => cy.get('.ngb-dp-day').contains('15'),
    rfdate: () => cy.get('#benefitFundStartDate_0 > div:nth-child(2) > div > ngb-datepicker > div.ngb-dp-content.ngb-dp-months').contains('1'),
    rfcontributionamount: () => cy.get('#benefitFundEmployeeContribution_0 > :nth-child(2) > .input-group > .form-control'),
    rfclearancenumber: () => cy.get('#benefitFundClearanceNumber_0 > :nth-child(2) > .input-group > .form-control'),


    worksirregularhour: () => cy.get('#chk_worksIrregularHours'),
    emppaidnationalminwage: () => cy.get('#chk_nationalWageRegulatingMeasure'),
    nationalminwagerate: () => cy.get(':nth-child(8) > .col > :nth-child(2) > .col-4 > :nth-child(2) > .input-group > .form-control'),
    qualifyingresult: () => cy.get('.content > span'),
    getsaveandclose: () => cy.get('.btn-primary'),




  }


  clickEmployeeButton() {
    this.weblocators.sideNavEmployee().click()
    this.weblocators.sideNavEmployee().should('be.visible')
  }

  clickAddEmployee() {
    this.weblocators.addEmployeeButton().click({ force: true })
    this.weblocators.addEmployeeButton().should('be.visible')
  }


  AddEmployeePayRunSpecificDetails(firstname, surename, email, tax, year, month, avergaeworking, hours,) {

    this.weblocators.readyforpayrunicon().should('have.class', 'icon icon-cross_circle invalid-payrun-indicator')
    this.weblocators.readyforpayruntext().should('contain.text', 'Not ready for pay run')
    this.weblocators.readyfortaxsubmissionicon().should('have.class', 'icon icon-cross_circle compliance-incomplete')
    this.weblocators.readyfortaxsubmissiontext().should('contain.text', 'Not ready for tax submission')
    
    this.weblocators.getEmployeetypeclick().click()
    this.weblocators.getEmployeeTypeClickValue().scrollIntoView().click({ force: true })
    this.weblocators.getFirstName().type(firstname).should('have.value', firstname)
    cy.log(surename)
    this.weblocators.getSureName().type(surename).should('have.value', surename)
    this.weblocators.getDateBirth().click()
    this.weblocators.getSelectYear().select(year)
    this.weblocators.getSelectMonth().select(month)
    this.weblocators.getSelectDate().click({ force: true })
    /*this.weblocators.getDateBirth().invoke('val').then((val) => {
     expect(val).to.equal('15/08/1997');
   });*/
    this.weblocators.getEmailID().type(email, { force: true })
    this.weblocators.getEmployeeCode().type(tax)
    this.weblocators.getEmployeStartDateClick().click({ force: true })
    this.weblocators.getEmployeStartCalendar().contains('15').click({ force: true })
    this.weblocators.getPayFrequency().click({ force: true })
    this.weblocators.getPayFrequencySelection().click({ force: true })
    this.weblocators.getAverageWorking().scrollIntoView().type(avergaeworking).should('have.value', avergaeworking)
    this.weblocators.getHour().scrollIntoView().type(hours).should('have.value', hours)
    this.weblocators.getEmployeeRateClick().click()
    this.weblocators.getEmpoyeeRatesearch().type('Monthly')
    cy.wait(1000)
    this.weblocators.getEmployeeRateSelect().click({ force: true })
    this.weblocators.getEmployeeRateValueBox().should('have.text', 'Monthly')
    this.weblocators.getRateForEmployee().type(40000).should('have.value', '40000')
    this.weblocators.getHoureRate().should('contain.text', 'R200.00000')
    this.weblocators.getMonthlyRate().should('contain.text', 'R40,000.00000')
    this.weblocators.getTaxstart().click()
    this.weblocators.getTaxstartSelect().contains('15').click()
    this.weblocators.getTaxStatus().click({ force: true })
    this.weblocators.getTaxStatusSelect().click({ force: true })

    this.weblocators.readyforpayrunicon().should('have.class', 'icon icon-tick_circle valid-payrun-indicator')
    this.weblocators.readyforpayruntext().should('contain.text', 'Ready for pay run')
    this.weblocators.readyfortaxsubmissionicon().should('have.class', 'icon icon-cross_circle compliance-incomplete')
    this.weblocators.readyfortaxsubmissiontext().should('contain.text', 'Not ready for tax submission')
    
  }

  // payslips 
  AddEmployeePayslips(allowanceAmount,earningComponentName, earningsPayslipDescription, inputTypeDropdwonValue, irp5DropdownValue, overtimeAllowanceAmount, accomodationAmount, taxDeductionAmount, CompanyContributionAmount)
  {
    this.weblocators.getsavenext().click().should('have.text', 'Save and next page')
  this.weblocators.getBasicSalaryAmtDisplay().scrollIntoView().should('contain.text', 'R 40,000.00')
  this.weblocators.getAddEarnings().click({force : true})
  this.weblocators.getAddEarningsModal().should('be.visible')
  this.weblocators.getAllowanceCheckbox().click()
  this.weblocators.getAEModalAddBtn().click()
  this.weblocators.getAllowanceAmount().type(allowanceAmount)
  this.weblocators.getAllowanceAmountDisplay().should('contain.text', 'R 2,000.00')
  this.weblocators.getAddEarnings().scrollIntoView().click({ force: true })
  this.weblocators.customPayComponentRadioBtn().click()
  this.weblocators.componentNameTextField().type(earningComponentName)
  this.weblocators.payslipDescriptionTextField().type(earningsPayslipDescription)
  this.weblocators.taxCalculationMethodDropdownClick().click({force : true})
  this.weblocators.taxCalculationMethodDropdownSelectOption().click({force : true})
  this.weblocators.inputTypeDropdownClick().click()
  this.weblocators.inputTypeDropdownSearchField().type(inputTypeDropdwonValue)
  this.weblocators.inputTypeDropdownClickSearchResult().wait(3000)
  this.weblocators.inputTypeDropdownClickSearchResult().click()
  this.weblocators.iRP5CodeDropdownClick().click({ force: true })
  this.weblocators.iRP5CodeDropdownSearchField().type(irp5DropdownValue)
  this.weblocators.iRP5CodeDropdownSearchResult().wait(3000)
  this.weblocators.iRP5CodeDropdownSearchResult().click({ force: true })
  this.weblocators.getAEModalAddBtn().click({ force: true })
  this.weblocators.overtimeAllowanceAmount().type(overtimeAllowanceAmount)
  this.weblocators.overtimeAllowanceAmountDisplay().should('contain.text', 'R 5,000.00')

  this.weblocators.getAddBenefitsBtn().click({force:true})
  this.weblocators.getAddBenefitsModal().should('be.visible')
  this.weblocators.getAccomodationCheckbox().click()
  this.weblocators.getABModalAddBtn().click()
  this.weblocators.getAccomodationAmount().type(accomodationAmount)
  this.weblocators.getAccomodationAmountDisplay().should('contain.text', 'R 12,000.00')
  
  this.weblocators.getAddDeductionsBtn().click({force:true})
  this.weblocators.getAddDeductionsModal().should('be.visible')
  this.weblocators.getAdditionalTaxCheckbox().click()
  this.weblocators.getABModalAddBtn().click()
  this.weblocators.getAdditionalTaxAmount().type(taxDeductionAmount)
  
  this.weblocators.getCompanyContributionBtn().click({force:true})
  this.weblocators.getPensionCheckbox().click()
  this.weblocators.getACCModalAddBtn().click()
  this.weblocators.getCompanyContributionAmount().type(CompanyContributionAmount)
  this.weblocators.getsavenext().click()
  cy.wait(4000)
  }

  //  personal
  AddEmployeePersonal(Initailstextbox, rsaid,
    mobileNo,
    worktelephonenumber,
    FacsimileNumber,
    homeTelephoneNumber) {
    this.weblocators.getInitialsTextBox().type(Initailstextbox).should('have.value', Initailstextbox)
    this.weblocators.getRSAIDTextBox().type(rsaid).should('have.value', rsaid)
    this.weblocators.getMobileNoTextBox().type(mobileNo).should('have.value', mobileNo)
    this.weblocators.getWorkTelephoneNo().type(worktelephonenumber).should('have.value', worktelephonenumber)
    this.weblocators.getfacsimilenumber().type(FacsimileNumber).should('have.value', FacsimileNumber)
    this.weblocators.gethomeTelephoneNumberTextBox().type(homeTelephoneNumber).should('have.value', homeTelephoneNumber)
    this.weblocators.getsavenext().click().should('have.text', 'Save and next page')
  }

  // Employement 
  AddEmployeeEmployment(PrimaryLocation, departmentTextBox) {
    this.weblocators.getprimarylocationTextBox().type(PrimaryLocation).should('have.value', PrimaryLocation)
    this.weblocators.getDepartmentTextBox().click()
    this.weblocators.getAddnewdropdown().click({ multiple: true })

    this.weblocators.getDepartmentnameTextBox().type(departmentTextBox)

    this.weblocators.getSaveButton1().click()

    this.weblocators.getsavenext().click().should('have.text', 'Save and next page')
  }
  AddEmployeePayment() {
    // payment 
    this.weblocators.getsavenext().click().should('have.text', 'Save and next page')

  }
  // Tax 
  AddEmployeeTax(IncometaxRefernceNumber) {
    this.weblocators.getIncometaxreferencenumber().type(IncometaxRefernceNumber)
    this.weblocators.getStandardindustry().click({ force: true })
    cy.wait(5000)
    this.weblocators.getcheckBoxstandardIndustry().click()
    this.weblocators.getselectButton().click()
    this.weblocators.getExcludeCheckBox().check({ force: true }).should('be.checked')
    this.weblocators.getsavenext().click().should('have.text', 'Save and next page')
  }

  //Address

  AddEmployeeAddress(
    unitnumber,
    complexname,
    streetnumber,
    streetname,
    Suburb,
    City,
    PCode,
    Province
  ) {
    this.weblocators.unitnumber().type(unitnumber).should('have.value', unitnumber);
    this.weblocators.complexname().type(complexname).should('have.value', complexname);
    this.weblocators.streetnumber().type(streetnumber).should('have.value', streetnumber);
    this.weblocators.streetname().type(streetname).should('have.value', streetname);
    this.weblocators.suburb().type(Suburb).should('have.value', Suburb);
    this.weblocators.cityname().type(City).should('have.value', City);
    this.weblocators.provincedropdown().click();
    this.weblocators.selecteasterncape().click()
      .invoke('text').then((text) => {
        expect(text.trim()).to.equal(Province);
      });
    this.weblocators.postcode().type(PCode).should('have.value', PCode);
    this.weblocators.postaladdresscheckbox().click({ force: true }).should('be.checked');
    this.weblocators.workaddresscheckbox().click({ force: true }).should('be.checked');
    this.weblocators.getsavenext().click()

  }

  //Retirement Funds
  AddEmployeeRetirementFunds(rfcontributionamount, rfclearancenumber) {
    this.weblocators.addretirementfund().click();
    this.weblocators.rfstartdate().click();
    this.weblocators.rfyear().select('2023')
    this.weblocators.rfmonth().select('Jul')
    this.weblocators.rfdate().click({ force: true });
    this.weblocators.rfstartdate().invoke('val').then((val) => {
      expect(val).to.equal('01/07/2023');
    });
    this.weblocators.rfcontributionamount().type(rfcontributionamount).should('have.value', rfcontributionamount);
    this.weblocators.rfclearancenumber().type(rfclearancenumber).should('have.value', rfclearancenumber);
    this.weblocators.getsavenext().click()
  }

  AddEmployeeETI(ETINationalMinWageRate, ETIQualifying) {

    // Employement Tax Incentive

    this.weblocators.worksirregularhour().click({ force: true }).should('be.checked');
    this.weblocators.emppaidnationalminwage().click({ force: true }).should('be.checked');
    this.weblocators.nationalminwagerate().type(ETINationalMinWageRate).should('have.value', ETINationalMinWageRate);
    this.weblocators.qualifyingresult().should('contain.text', ETIQualifying);

    this.weblocators.readyforpayrunicon().should('have.class', 'icon icon-tick_circle valid-payrun-indicator');
    this.weblocators.readyforpayruntext().should('contain.text', 'Ready for pay run');
    this.weblocators.readyfortaxsubmissionicon().should('have.class', 'icon icon-cross_circle compliance-incomplete');
    this.weblocators.readyfortaxsubmissiontext().should('contain.text', 'Not ready for tax submission');
    this.weblocators.getsaveandclose().click().should('have.text', 'Save and close employee');
  }

   saveandcloseButton()
   {
    this.weblocators.getsaveandclose().click().should('have.text', 'Save and close employee');

   }



}

export default AddEmployee;