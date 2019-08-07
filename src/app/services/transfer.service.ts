import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings';
import { Transfer } from '../models/transfer';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './../services/message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  APP_SETTINGS: AppSettings = new AppSettings();

  public transferData: any;


  private apiURL = this.APP_SETTINGS.servicesUrl;

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getTransfers(): any {
    this.transferData = this.http.get(this.apiURL + '/transfers');
    return this.transferData;
  }

  /** DELETE: delete the court from the server */
  public deleteTransfer(newTransfer: Transfer ): Observable<Transfer> {
    const nationalID = newTransfer.nationalID;
    console.log('National ID ' + nationalID);
    const url = `${this.apiURL + '/transfers/nationalID'}/${nationalID}`;
    console.log('URL ' + url);
    return this.http.delete<Transfer>(url).pipe(
        tap(_ => this.log(`deleted transfer national id=${nationalID}`)),
        catchError(
            this.handleError<Transfer>('deleteTransfer')

        )
    );
  }

  /** POST: add a new prisoner to the server */
  addTransfer (newTransfer: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(this.apiURL + '/transfers', newTransfer).pipe(
        tap((transferCreated: Transfer) => this.log(`added transfer w/ national id=${transferCreated.nationalID}`)),
        catchError(this.handleError<Transfer>('addTransfer'))
    );
  }

  public getTransfer(nationalID: number): Observable<Transfer> {
    const url = `${this.apiURL + '/transfers/nationalID'}/${nationalID}`;
    return this.http.get<Transfer>(url).pipe(
        tap(_ => this.log(`fetched transfer national id=${nationalID}`)),
        catchError(this.handleError<Transfer>(`getTransfer national id=${nationalID}`))
    );
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TransferService: ${message}`);
  }
}
