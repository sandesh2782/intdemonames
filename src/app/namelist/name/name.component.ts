import { Component, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnChanges {

  @Input() messages: string;
  displayNameList: string[];

  constructor() {
    this.displayNameList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
      for (let propName in changes) {
        let change = changes[propName];
        this.displayNameList = change.currentValue ? change.currentValue.split('\n'): '';
      }
    }
}
