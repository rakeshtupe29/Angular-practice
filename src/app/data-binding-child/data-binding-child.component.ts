import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding-child',
  templateUrl: './data-binding-child.component.html',
  styleUrls: ['./data-binding-child.component.scss']
})
export class DataBindingChildComponent implements OnInit {

  @Input() descChild: string;

  @Output() changeCount: EventEmitter<number> = new EventEmitter();
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incCount() {
    this.count++;
    this.changeCount.emit(this.count);
  }

}
