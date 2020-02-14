import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  compTitle = 'Data Binding Demo';
  flagDiv = true;
  txtDesc = 'Acc';
  countInParent = 200;

  constructor() { }

  handleClick() {
    // alert("Clicked");
    this.flagDiv = !this.flagDiv;
    this.txtDesc = 'Button Clicked';
  }

  getCount(count) {
    this.countInParent = count;
  }

}
