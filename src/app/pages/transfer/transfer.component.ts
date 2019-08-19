import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../models/transfer';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transferDetail: Transfer = new Transfer();

  newTransfer: Transfer = new Transfer();

  actionMessage;

  showEdit;

  constructor(public transferService: TransferService) { }

  ngOnInit() {
    this.loadTransferData();
  }

  public loadTransferData(): any {
    this.transferDetail.transfers = [];
    this.transferService.getTransfers().subscribe(returnData => {
      console.log('Return Data ' + JSON.stringify(returnData));
      for (let i = 0; i < returnData.length; i++) {
        this.transferDetail.nationalID = returnData[i].nationalID;
        this.transferDetail.fileNumber = returnData[i].fileNumber;
        this.transferDetail.fromPrison = returnData[i].fromPrison;
        this.transferDetail.toPrison = returnData[i].toPrison;
        this.transferDetail.dateOfTransfer = new Date(returnData[i].dateOfTransfer).toDateString();

        this.transferDetail.transfers.push({
          'nationalID': this.transferDetail.nationalID,
          'fileNumber': this.transferDetail.fileNumber,
          'fromPrison': this.transferDetail.fromPrison,
          'toPrison': this.transferDetail.toPrison,
          'dateOfTransfer': this.transferDetail.dateOfTransfer
        });
      }
      console.log('Prisoner Data ' + JSON.stringify(this.transferDetail.transfers));
    });
  }

  public addTransfer() {
    this.actionMessage = 'Add Transfer';
    this.showEdit = true;
  }

  delete(newTransfer: Transfer): void {
    console.log('New Case ' + JSON.stringify(newTransfer));
    this.transferService.deleteTransfer(newTransfer).subscribe(returnData => {
      console.log('Response from delete ' + returnData);
      this.loadTransferData();
    });
  }
  add(newTransfer): void {
    this.showEdit = false;
    this.transferService.addTransfer(newTransfer).subscribe(returnData => {
      console.log('Response from add ' + JSON.stringify(returnData));
      this.loadTransferData();
      this.newTransfer = new Transfer ();
    });
  }
  cancel(): void {
    this.showEdit = false;
  }

}
