import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  // isChecked = true;
  // formGroup: FormGroup;

  model:any;
  constructor(){
    this.model = {name: '' , age: null, ifPrint: false};
  }
  formSubmit(){
    console.log('form submit request');
  }

  ngOnInit(): void {
  }
  

}
