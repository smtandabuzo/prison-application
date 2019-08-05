import { Component, OnInit, Input } from '@angular/core';
import { CasesService } from '../../services/cases.service';
import { AppSettings } from '../../models/app-settings';
import { Case } from '../../models/case';
import { HttpClient } from '@angular/common/http';
import { RemoveCaseComponent } from '../../pages/modal/remove-case/remove-case.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  caseDetail: Case = new Case();
  newCase: Case = new Case();
  actionMessage;
  showEdit;
  constructor(public casesService: CasesService, private http: HttpClient, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadCaseData();
    console.log('Case Data - Outside ' + JSON.stringify(this.caseDetail.cases));
  }

  public loadCaseData(): any {
    this.caseDetail.cases = [];
    this.casesService.getCases().subscribe(returnData => {
      console.log('Return Data ' + JSON.stringify(returnData));
      for (let i = 0; i < returnData.length; i++) {
        this.caseDetail.nationalID = returnData[i].nationalID;
        this.caseDetail.fileNumber = returnData[i].fileNumber;
        this.caseDetail.dateOfTrial = returnData[i].dateOfTrial;
        this.caseDetail.sentence = returnData[i].sentence;
        this.caseDetail.location = returnData[i].location;
        this.caseDetail.fullName = returnData[i].fullName;

        this.caseDetail.cases.push({
          'nationalID': this.caseDetail.nationalID,
          'fileNumber': this.caseDetail.fileNumber,
          'dateOfTrial': this.caseDetail.dateOfTrial,
          'sentence': this.caseDetail.sentence,
          'location': this.caseDetail.location,
          'fullName': this.caseDetail.fullName
        });
      }
      console.log('Case Data ' + JSON.stringify(this.caseDetail.cases));
    });
  }
  public addCase() {
    this.actionMessage = 'Add New Case';
    this.showEdit = true;
  }

  async removeCaseModal() {
    const modal = await this.modalCtrl.create({
      component: RemoveCaseComponent
    });
    return await modal.present();
  }

  delete(newCase: Case): void {
    console.log('New Case ' + JSON.stringify(newCase));
    this.casesService.deleteCase(newCase).subscribe(returnData => {
      console.log('Response from delete ' + returnData);
     this.loadCaseData();
    });
  }
  add(newCase): void {
    this.showEdit = false;
    this.casesService.addCase(this.newCase).subscribe(returnData => {
      console.log('Response from add ' + JSON.stringify(returnData));
      this.loadCaseData();
      this.newCase = new Case ();
    });
  }
  cancel(): void {
    this.showEdit = false;
  }
}
