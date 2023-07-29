import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CountryCode } from '../../services/countryCodeLists.service';
@Component({
  templateUrl: 'employee.component.html',
  selector: 'app-omm_employee',
  styleUrls: ['employee.component.css'],
})
export class OMMEmployee {
  public options: any[] = [];
  public employeeName: string = '';

  employeeForm: FormGroup = new FormGroup({
    employeeName: new FormControl(''),
  });
  constructor(private CC: CountryCode, private formBuilder: FormBuilder) {
    this.options = this.CC.getCountryCodeList();
  }
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeName: [''],
    });
  }

  submit() {}
}
