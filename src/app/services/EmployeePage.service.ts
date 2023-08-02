export class EmployeePageServices {
  private CountryCodeList = [
    {
      option: 'AT',
      selected: 'false',
      queue: [
        { option: 'ATSNT', selected: 'false' },
        { option: 'AUSTRIA', selected: 'false' },
        { option: 'CredendoAT', selected: 'false' },
        { option: 'NL100', selected: 'false' },
        { option: 'NO Queue', selected: 'false' },
      ],
    },
    {
      option: 'AU',
      selected: 'false',
      queue: [
        { option: 'FIRSTFOCUS', selected: 'false' },
        { option: 'Leading_IT', selected: 'false' },
        { option: 'NL100', selected: 'false' },
        { option: 'NZ_FIRSTFOCUS', selected: 'false' },
        { option: 'NZ_Leading_IT', selected: 'false' },
        { option: 'NO Queue', selected: 'false' },
      ],
    },
    { option: 'BE', selected: 'false' },
    { option: 'CH', selected: 'false' },
    { option: 'CZ', selected: 'false' },
    { option: 'DE', selected: 'false' },
    { option: 'ES', selected: 'false' },
    { option: 'FR', selected: 'false' },
    { option: 'HK', selected: 'false' },
    { option: 'HU', selected: 'false' },
    { option: 'IE', selected: 'false' },
    { option: 'IT', selected: 'false' },
    { option: 'MY', selected: 'false' },
    { option: 'NL', selected: 'false' },
    { option: 'PL', selected: 'false' },
    { option: 'SG', selected: 'false' },
    { option: 'TT', selected: 'false' },
    { option: 'UK', selected: 'true' },
    { option: 'US', selected: 'false' },
    { option: 'ZA', selected: 'false' },
  ];
  getCountryCodeList() {
    return this.CountryCodeList;
  }

  private EmployeeRole = [
    { option: 'Engineer', selected: 'false' },
    { option: 'Logistic', selected: 'false' },
    { option: 'Manager', selected: 'false' },
    { option: 'Planner', selected: 'false' },
    { option: 'Qualifier', selected: 'false' },
    { option: 'SiteStock', selected: 'false' },
  ];
  getEmployeeRoleList() {
    return this.EmployeeRole;
  }
  private YesOrNo = [
    { option: 'Yes', selected: 'false' },
    { option: 'No', selected: 'false' },
  ];
  getYesorNoList() {
    return this.YesOrNo;
  }
}
