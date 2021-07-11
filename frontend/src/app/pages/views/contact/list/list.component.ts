import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { HttpService } from 'src/app/services/http-service';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Contact[] = [
    {
      contactNumber: '11989477319',
      contactType: { id: 1, type: 'Celular' },
      name: 'Renato',
    },
  ];
  displayedColumns: string[] = [
    'name',
    'contactNumber',
    'contactType',
    'actions',
  ];

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  async ngOnInit() {
    this.dataSource = await this.httpService.get('contacts');
  }

  edit(id: number) {}
  remove(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialog);

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.httpService.delete(`contact/${id}`);
      }
    });
  }
  register() {}
}
