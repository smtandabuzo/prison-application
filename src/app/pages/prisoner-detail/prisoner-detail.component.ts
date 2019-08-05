import { Component, OnInit, Input } from '@angular/core';
import { Prisoner } from './../../models/prisoner';
import { PrisonerService } from './../../services/prisoner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prisoner-detail',
  templateUrl: './prisoner-detail.component.html',
  styleUrls: ['./prisoner-detail.component.scss']
})
export class PrisonerDetailComponent implements OnInit {
  @Input() prisoner: Prisoner;
  constructor(private route: ActivatedRoute,
              private prisonerService: PrisonerService) { }

  ngOnInit() {
  }

  getPrisoner(): void {
    const nationalID = +this.route.snapshot.paramMap.get('nationalID');
    this.prisonerService.getPrisoner(nationalID).subscribe(returnData => {
      this.prisoner = returnData[0];
      console.log('Case details ' + this.prisoner);
    });
  }

}
