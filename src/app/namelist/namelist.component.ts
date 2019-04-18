// Importing required components
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.css']
})
export class NamelistComponent implements OnInit {

  names: string; // used to store names from textarea input
  displayNameList: string[]; // used to display names in the form of list

  constructor() {
    this.displayNameList = [];
  }

  // This method is called to show names on new lines
  displayNames() {
    const names: string = this.names;
    if (names) {
        const namesArray = names.split('\r\n');
        const displayNameList = [];
        namesArray.forEach(name => {
            this.displayNameList.push(`${name}`);
        });
    } else {
        this.displayNameList = [];
    }
  }

  ngOnInit() {
    console.log(this.names);
  }

}
