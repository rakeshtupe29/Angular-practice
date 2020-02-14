import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees = [];

  status: string;

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  frmEmp = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      salary: ['', Validators.required],
      age: ['', Validators.required],
      address: this.fb.array([this.fb.group({ add1: '' })])
    }
  )

  ngOnInit(): void {
    this.refreshEmployee();
  }

  refreshEmployee() {
    console.log('REFRESH EMPLOYEE LIST');
    this.dataService.getAllEmployees().subscribe(
      (res: { status: string, data: [] }) => {
        this.employees = res.data;
      }
    )
  }

  onSubmit() {
    console.log('IN SUBMIT');

    if (this.frmEmp.valid) {
      this.dataService.postEmployee(this.frmEmp.value).subscribe(
        (res: { status: string, data: {} }) => {
          if (res.status == 'success') {
            this.status = 'Record inserted successfully';
            this.refreshEmployee();
          } else {
            this.status = 'Error while inserting';
          }
        }
      )
    } else {
      this.status = 'Validation error';
    }
  }

  get address() {

    return this.frmEmp.get('address') as FormArray;
  }

  addAddress(event) {
    // event.preventDefault();
    this.address.push(this.fb.group({ add1: '' }));
  }

  deleteAddress(index) {

    this.address.removeAt(index);
  }

}
