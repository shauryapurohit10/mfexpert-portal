import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

id:any = '';
name:any = '';
cnumber:any = '';

//Employee:any [] = [];
employees:any;



// addRow() {
//     //prompt("Checking the control!");
//     this.employees.push({
//         id: this.id,
//         name: this.name,
//         cnumber: this.cnumber
//     });
// }

deleteEmployee(index) {
    this.employees.splice(index, 1);
}

// editEmployee(index) {

//     //code for editing

// }

  constructor(private router : Router) {

    this.employees = [
        {
            id: '1',
            name: 'ABC',
            cnumber: '1234567890'    
        },
        {
            id: '2',
            name: 'DEF',
            cnumber: '0987654321' 
        },
        {
            id: '3',
            name: 'GHI',
            cnumber: '1122334455'
        }
    ];
   }

  ngOnInit() {
      //emp: Employee[] = [];

  }

}
