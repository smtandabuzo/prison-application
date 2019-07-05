import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  APP_SETTINGS: AppSettings = new AppSettings();
  public casesData: any;
  constructor(private http: HttpClient) { }

  getCases(): any {
    const apiURL = this.APP_SETTINGS.casesUrl;
    this.casesData = this.http.get(apiURL + '/cases');
    return this.casesData;
  }
}
