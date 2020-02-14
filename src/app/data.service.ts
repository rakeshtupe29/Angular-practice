import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

    date = new Date();
    baseUrl = 'http://dummy.restapiexample.com/api/v1/';
   products = [
    {pid: 101, pname: 'LG optical Mouse', pprice: 350,date1: this.date},
    {pid: 102, pname: 'Dell Keyboard', pprice: 600, date1: this.date},
    {pid: 103, pname: 'Samsung Monitor', pprice: 4500, date1: this.date},
    {pid: 104, pname: 'Intel Motherboard', pprice: 5500, date1: this.date }
  ];
  constructor(private httpClient: HttpClient) {
  }

  getAllEmployees() {
    return this.httpClient.get(this.baseUrl + 'employees');
  }

  postEmployee(emp) {
    const status = this.httpClient.post(this.baseUrl + 'create', emp);
    console.log(JSON.stringify(status));
    return status;
  }

  getProducts() {
    return this.products;
  }

  getDesc(pid, flag) {

    const prd = this.products.filter(prd1 => prd1.pid == pid);
    if (flag == 'true') {
      return 'Got ' + prd[0].pname ;
    } else {
      return 'Not Found ' + prd[0].pname ;
    }
  }


}
