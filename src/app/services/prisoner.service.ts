import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings';
import { Prisoner } from '../models/prisoner';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './../services/message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrisonerService {

  APP_SETTINGS: AppSettings = new AppSettings();

  public prisonerData: any;

  private apiURL = this.APP_SETTINGS.servicesUrl;

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getPrisoners(): any {
    this.prisonerData = this.http.get(this.apiURL + '/prisoners');
    return this.prisonerData;
  }

  /** DELETE: delete the court from the server */
  public deletePrisoner(newPrisoner: Prisoner ): Observable<Prisoner> {
    const nationalID = newPrisoner.nationalID;
    console.log('National ID ' + nationalID);
    const url = `${this.apiURL + '/prisoners/nationalID'}/${nationalID}`;
    console.log('URL ' + url);
    return this.http.delete<Prisoner>(url).pipe(
        tap(_ => this.log(`deleted prisoner national id=${nationalID}`)),
        catchError(
            this.handleError<Prisoner>('deletePrisoner')

        )
    );
  }

  /** POST: add a new prisoner to the server */
  addPrisoner (newPrisoner: Prisoner): Observable<Prisoner> {
    return this.http.post<Prisoner>(this.apiURL + '/prisoners', newPrisoner).pipe(
        tap((prisonerCreated: Prisoner) => this.log(`added court w/ national id=${prisonerCreated.nationalID}`)),
        catchError(this.handleError<Prisoner>('addPrisoner'))
    );
  }

  public getPrisoner(nationalID: number): Observable<Prisoner> {
    const url = `${this.apiURL + '/prisoners/nationalID'}/${nationalID}`;
    return this.http.get<Prisoner>(url).pipe(
        tap(_ => this.log(`fetched prisoner national id=${nationalID}`)),
        catchError(this.handleError<Prisoner>(`getPrisoner national id=${nationalID}`))
    );
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CourtsService: ${message}`);
  }

}
