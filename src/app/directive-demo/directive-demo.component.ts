import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss'],
  providers: [DataService]
})
export class DirectiveDemoComponent implements OnInit {

  flag = false;
  count = 3;
  country = '';

  products;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.dataService.products;
  }

  toggle() {
    this.flag = !this.flag;
    this.count++;
    this.products[this.count] = {pid: 101 + this.count, pname: 'My New Product' + 1, pprice: 5500, date1: new Date()};
  }

  handleChange(event) {
    this.country = event.target.value;
  }

  onClick(pid, flagP) {
    this.router.navigate (['directive/details', pid], {queryParams: {flag: flagP}});

  }

}
