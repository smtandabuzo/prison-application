import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from './../../services/cases.service';
import { Case } from './../../models/case';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {
  @Input() case: Case;
  constructor(private route: ActivatedRoute,
              private casesService: CasesService) { }

  ngOnInit() {
    this.getCase();
  }

  getCase(): void {
    const nationalID = +this.route.snapshot.paramMap.get('nationalID');
    this.casesService.getCase(nationalID).subscribe(returnData => {
      this.case = returnData[0];
      console.log('Case details ' + this.case);
    });
  }

}
