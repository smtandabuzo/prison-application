import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings';
import { HttpClient } from '@angular/common/http';
import { Case } from '../models/case';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  APP_SETTINGS: AppSettings = new AppSettings();
  private apiURL = this.APP_SETTINGS.casesUrl;
  public casesData: any;
  constructor(private http: HttpClient) { }

  getCases(): any {
    this.casesData = this.http.get(this.apiURL + '/cases');
    return this.casesData;
  }

  public createCase(newCase: Case): Promise<void | Case> {
    console.log('New Case ' + newCase);
    return this.http.post(this.apiURL, newCase)
        .toPromise()
        .then(response => response as Case)
        .catch(this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
