import { Component, OnInit, Input } from '@angular/core';
import { Transfer } from './../../models/transfer';
import { TransferService } from './../../services/transfer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transfer-detail',
  templateUrl: './transfer-detail.component.html',
  styleUrls: ['./transfer-detail.component.scss']
})
export class TransferDetailComponent implements OnInit {

  @Input() transfer: Transfer;
  constructor(private route: ActivatedRoute,
              private transferService: TransferService) { }

  ngOnInit() {
    this.getTransfer();
  }

  getTransfer(): void {
    const nationalID = +this.route.snapshot.paramMap.get('nationalID');
    this.transferService.getTransfer(nationalID).subscribe(returnData => {
      this.transfer = returnData[0];
      console.log('Transfer details ' + this.transfer);
    });
  }

}
