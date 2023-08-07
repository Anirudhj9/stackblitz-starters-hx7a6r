export class EmployeePageServices {
  private intitalQueue = [];
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
    { option: 'BE', selected: 'false', queue: [] },
    { option: 'CH', selected: 'false', queue: [] },
    { option: 'CZ', selected: 'false', queue: [] },
    { option: 'DE', selected: 'false', queue: [] },
    { option: 'ES', selected: 'false', queue: [] },
    { option: 'FR', selected: 'false', queue: [] },
    { option: 'HK', selected: 'false', queue: [] },
    { option: 'HU', selected: 'false', queue: [] },
    { option: 'IE', selected: 'false', queue: [] },
    { option: 'IT', selected: 'false', queue: [] },
    { option: 'MY', selected: 'false', queue: [] },
    { option: 'NL', selected: 'false', queue: [] },
    { option: 'PL', selected: 'false', queue: [] },
    { option: 'SG', selected: 'false', queue: [] },
    { option: 'TT', selected: 'false', queue: [] },
    { option: 'UK', selected: 'true', queue: [] },
    { option: 'US', selected: 'false', queue: [] },
    { option: 'ZA', selected: 'false', queue: [] },
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
  getIntitalQueueList() {
    return this.intitalQueue;
  }
}
