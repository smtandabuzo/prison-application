import { Component, OnInit } from '@angular/core';
import { Court } from '../../models/court';
import { CourtService } from '../../services/court.service';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.scss']
})
export class CourtComponent implements OnInit {

  courtDetail: Court = new Court();

  newCourt: Court = new Court();
  actionMessage;
  showEdit;
  constructor(public courtService: CourtService) { }

  ngOnInit() {
    this.loadCourtData();
  }

  public loadCourtData(): any {
    this.courtDetail.courts = [];
    this.courtService.getCourts().subscribe(returnData => {
      console.log('Return Data ' + JSON.stringify(returnData));
      for (let i = 0; i < returnData.length; i++) {
        this.courtDetail.nationalID = returnData[i].nationalID;
        this.courtDetail.fileNumber = returnData[i].fileNumber;
        this.courtDetail.dateOfTrial = returnData[i].dateOfTrial;
        this.courtDetail.sentence = returnData[i].sentence;
        this.courtDetail.location = returnData[i].location;

        this.courtDetail.courts.push({
          'nationalID': this.courtDetail.nationalID,
          'fileNumber': this.courtDetail.fileNumber,
          'dateOfTrial': this.courtDetail.dateOfTrial,
          'sentence': this.courtDetail.sentence,
          'location': this.courtDetail.location
        });
      }
      console.log('Court Data ' + JSON.stringify(this.courtDetail.courts));
    });
  }

  public addCourt() {
    this.actionMessage = 'Add New Court';
    this.showEdit = true;
  }

  delete(newCourt: Court): void {
    console.log('New Case ' + JSON.stringify(newCourt));
    this.courtService.deleteCourt(newCourt).subscribe(returnData => {
      console.log('Response from delete ' + returnData);
      this.loadCourtData();
    });
  }
  add(newCourt): void {
    this.showEdit = false;
    this.courtService.addCourt(this.newCourt).subscribe(returnData => {
      console.log('Response from add ' + JSON.stringify(returnData));
      this.loadCourtData();
      this.newCourt = new Court ();
    });
  }
  cancel(): void {
    this.showEdit = false;
  }

}
