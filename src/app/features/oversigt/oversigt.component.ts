import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Registrering } from './registrering';

@Component({
  selector: 'app-oversigt',
  templateUrl: './oversigt.component.html',
  styleUrls: ['./oversigt.component.scss'],
})
export class OversigtComponent implements OnInit {
  editing: boolean = false;

  registreringer: Registrering[] = [
    { id: 1, antalTimer: 1, beskrivelse: 'Lukke fitness' },
    { id: 2, antalTimer: 1, beskrivelse: 'Lukke fitness' },
    { id: 3, antalTimer: 1, beskrivelse: 'Lukke fitness' },
    { id: 4, antalTimer: 1, beskrivelse: 'Lukke fitness' },
    { id: 5, antalTimer: 1, beskrivelse: 'Lukke fitness' },
  ];

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }

  onRowEditInit(registreing: Registrering) {}

  onRowEditSave(registreing: Registrering) {}

  onRowEditCancel(registreing: Registrering) {}
}
