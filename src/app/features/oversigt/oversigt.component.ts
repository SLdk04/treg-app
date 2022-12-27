
import { Component, OnInit, ValueProvider } from '@angular/core';
import {ConfirmationService} from 'primeng/api';



@Component({
  selector: 'app-oversigt',
  templateUrl: './oversigt.component.html',
  styleUrls: ['./oversigt.component.scss']

})
export class OversigtComponent implements OnInit {
  value:any;
  value10:any;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
}
