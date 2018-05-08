import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * @title Basic select
 */
@Component({
  selector: 'angular-material.component',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AngularMaterialComponent implements OnInit {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  ngOnInit() {
    var atest = this.foods;
    console.debug(atest.length);
  }
}
