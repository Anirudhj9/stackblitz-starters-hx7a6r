export class CountryCode {
  private CountryCodeList = [
    { option: 'AT', selected: 'false' },
    { option: 'AU', selected: 'false' },
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
}
