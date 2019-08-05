import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourtService } from './../../services/court.service';
import { Court } from './../../models/court';

@Component({
  selector: 'app-court-detail',
  templateUrl: './court-detail.component.html',
  styleUrls: ['./court-detail.component.scss']
})
export class CourtDetailComponent implements OnInit {
  @Input() court: Court;
  constructor(private route: ActivatedRoute,
              private courtService: CourtService) { }

  ngOnInit() {
  }

  getCourt(): void {
    const nationalID = +this.route.snapshot.paramMap.get('nationalID');
    this.courtService.getCourt(nationalID).subscribe(returnData => {
      this.court = returnData[0];
      console.log('Case details ' + this.court);
    });
  }

}
