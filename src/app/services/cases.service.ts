import { Injectable, EventEmitter } from '@angular/core';
import { AppSettings } from '../models/app-settings';
import { HttpClient } from '@angular/common/http';
import { Case } from '../models/case';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  APP_SETTINGS: AppSettings = new AppSettings();
  private apiURL = this.APP_SETTINGS.servicesUrl;
  public casesData: any;
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCases(): any {
    this.casesData = this.http.get(this.apiURL + '/cases');
    return this.casesData;
  }

  /** DELETE: delete the hero from the server */
  public deleteCase(newCase: Case ): Observable<Case> {
    const nationalID = newCase.nationalID;
    console.log('National ID ' + nationalID);
    const url = `${this.apiURL + '/cases/nationalID'}/${nationalID}`;
    console.log('URL ' + url);
    return this.http.delete<Case>(url).pipe(
        tap(_ => this.log(`deleted case national id=${nationalID}`)),
        catchError(
            this.handleError<Case>('deleteCase')
        )
    );
  }

  /** POST: add a new case to the server */
  addCase (newCase: Case): Observable<Case> {
    return this.http.post<Case>(this.apiURL + '/cases', newCase).pipe(
        tap((caseCreated: Case) => this.log(`added case w/ national id=${caseCreated.nationalID}`)),
        catchError(this.handleError<Case>('addCase'))
    );
  }

  public getCase(nationalID: number): Observable<Case> {
   const url = `${this.apiURL + '/cases/nationalID'}/${nationalID}`;
    return this.http.get<Case>(url).pipe(
        tap(_ => this.log(`fetched case national id=${nationalID}`)),
        catchError(this.handleError<Case>(`getCase national id=${nationalID}`))
    );
  }
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CasesService: ${message}`);
  }
}
