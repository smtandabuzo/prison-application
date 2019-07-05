import { Component, OnInit } from '@angular/core';
import { CasesService } from '../../services/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  public caseData: any = [];
  //public cases: any = [];
  constructor(public casesService: CasesService) { }

  ngOnInit() {
    this.casesService.getCases().subscribe(returnData => {
      console.log('Return Data ' + JSON.stringify(returnData));
      this.caseData = returnData;
      console.log('Case Data ' + JSON.stringify(this.caseData));
    });
  }
  public addCase() {
    this.caseData.push({
      'nationalID': '',
      'fileNumber': '',
      'dateOfTrial': '',
      'sentence': '',
      'location': ''
    });
  }
}
