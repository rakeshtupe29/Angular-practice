import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.scss']
})
export class ProductDetailsComponentComponent implements OnInit, OnDestroy {

  productId: any;
  flag: any;
  desc: any;
  sub1: any;
  sub2: any;
  constructor(private actRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.sub1 = this.actRoute.params.subscribe(
      params => {
        this.productId = params['pid'];
        this.desc = this.dataService.getDesc(this.productId, this.flag);
      }
    )

    this.sub2 = this.actRoute.queryParams.subscribe(
      qp => {
        this.flag = qp['flag'];
      }
    )

  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }


}
