import { Component, OnInit } from '@angular/core';
import { Prisoner } from '../../models/prisoner';
import { PrisonerService } from '../../services/prisoner.service';

@Component({
  selector: 'app-prisoners',
  templateUrl: './prisoners.component.html',
  styleUrls: ['./prisoners.component.scss']
})
export class PrisonersComponent implements OnInit {

  prisonerDetail: Prisoner = new Prisoner();

  newPrisoner: Prisoner = new Prisoner();

  actionMessage;

  showEdit;

  constructor(public prisonerService: PrisonerService) { }

  ngOnInit() {
    this.loadPrisonerData();
  }

  public loadPrisonerData(): any {
    this.prisonerDetail.prisoners = [];
    this.prisonerService.getPrisoners().subscribe(returnData => {
      console.log('Return Data ' + JSON.stringify(returnData));
      for (let i = 0; i < returnData.length; i++) {
        this.prisonerDetail.nationalID = returnData[i].nationalID;
        this.prisonerDetail.fileNumber = returnData[i].fileNumber;
        this.prisonerDetail.dateOfBirth = returnData[i].dateOfBirth;
        this.prisonerDetail.sentence = returnData[i].sentence;
        this.prisonerDetail.location = returnData[i].location;
        this.prisonerDetail.address = returnData[i].address;
        this.prisonerDetail.prison = returnData[i].prison;
        this.prisonerDetail.gender = returnData[i].gender;
        this.prisonerDetail.education = returnData[i].education;
        this.prisonerDetail.status = returnData[i].status;
        this.prisonerDetail.offence = returnData[i].offence;
        this.prisonerDetail.dateIn = returnData[i].dateIn;
        this.prisonerDetail.fullName = returnData[i].fullName;

        this.prisonerDetail.prisoners.push({
          'nationalID': this.prisonerDetail.nationalID,
          'fileNumber': this.prisonerDetail.fileNumber,
          'dateOfTrial': this.prisonerDetail.dateOfBirth,
          'sentence': this.prisonerDetail.sentence,
          'location': this.prisonerDetail.location,
          'address': this.prisonerDetail.address,
          'prison': this.prisonerDetail.prison,
          'gender': this.prisonerDetail.gender,
          'education': this.prisonerDetail.education,
          'status': this.prisonerDetail.status,
          'offence': this.prisonerDetail.offence,
          'dateIn': this.prisonerDetail.dateIn,
          'fullName': this.prisonerDetail.fullName
        });
      }
      console.log('Prisoner Data ' + JSON.stringify(this.prisonerDetail.prisoners));
    });
  }

  public addPrisoner() {
    this.actionMessage = 'Add Prisoner';
    this.showEdit = true;
  }

  delete(newPrisoner: Prisoner): void {
    console.log('New Case ' + JSON.stringify(newPrisoner));
    this.prisonerService.deletePrisoner(newPrisoner).subscribe(returnData => {
      console.log('Response from delete ' + returnData);
      this.loadPrisonerData();
    });
  }
  add(newPrisoner): void {
    this.showEdit = false;
    this.prisonerService.addPrisoner(newPrisoner).subscribe(returnData => {
      console.log('Response from add ' + JSON.stringify(returnData));
      this.loadPrisonerData();
      this.newPrisoner = new Prisoner ();
    });
  }
  cancel(): void {
    this.showEdit = false;
  }

}
