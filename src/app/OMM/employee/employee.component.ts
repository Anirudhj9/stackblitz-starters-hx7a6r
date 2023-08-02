import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { EmployeePageServices } from '../../services/EmployeePage.service';
@Component({
  templateUrl: 'employee.component.html',
  selector: 'app-omm_employee',
  styleUrls: ['employee.component.css'],
})
export class OMMEmployee {
  public countryCodeList: any[] = [];
  public employeeRoleList: any[] = [];
  public yesOrNoList: any[] = [];
  public employeeName: string = '';

  employeeForm: FormGroup = new FormGroup({
    employeeName: new FormControl(''),
  });
  constructor(
    private employeePageServices: EmployeePageServices,
    private formBuilder: FormBuilder
  ) {
    this.countryCodeList = this.employeePageServices.getCountryCodeList();
    this.employeeRoleList = this.employeePageServices.getEmployeeRoleList();
    this.yesOrNoList = this.employeePageServices.getYesorNoList();
  }
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeName: [''],
    });
  }

  submit() {}
}
