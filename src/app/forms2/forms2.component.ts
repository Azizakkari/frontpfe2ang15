import { Component } from '@angular/core';
import  jsondataproc from '../../data/procedures.json'
import { MesusersService } from '../mesusers.service';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component {
 
  mesproc:any[]=jsondataproc.procedures;
  constructor(private mesusers:MesusersService) { }

  ngOnInit(): void { 
   
  }
 
  
}
