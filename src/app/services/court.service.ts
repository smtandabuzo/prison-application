import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings';
import { Court } from '../models/court';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './../services/message.service';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourtService {
  APP_SETTINGS: AppSettings = new AppSettings();
  public courseData: any;
  private apiURL = this.APP_SETTINGS.servicesUrl;
  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCourts(): any {
    this.courseData = this.http.get(this.apiURL + '/courts');
    return this.courseData;
  }

  /** DELETE: delete the court from the server */
  public deleteCourt(newCourt: Court ): Observable<Court> {
    const nationalID = newCourt.nationalID;
    console.log('National ID ' + nationalID);
    const url = `${this.apiURL + '/courts/nationalID'}/${nationalID}`;
    console.log('URL ' + url);
    return this.http.delete<Court>(url).pipe(
        tap(_ => this.log(`deleted court national id=${nationalID}`)),
        catchError(
            this.handleError<Court>('deleteCourt')
        )
    );
  }

  /** POST: add a new case to the server */
  addCourt (newCourt: Court): Observable<Court> {
    return this.http.post<Court>(this.apiURL + '/courts', newCourt).pipe(
        tap((courtCreated: Court) => this.log(`added court w/ national id=${courtCreated.nationalID}`)),
        catchError(this.handleError<Court>('addCourt'))
    );
  }
  public getCourt(nationalID: number): Observable<Court> {
    const url = `${this.apiURL + '/courts/nationalID'}/${nationalID}`;
    return this.http.get<Court>(url).pipe(
        tap(_ => this.log(`fetched court national id=${nationalID}`)),
        catchError(this.handleError<Court>(`getCourt national id=${nationalID}`))
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
