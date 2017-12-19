import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Widget } from '../_models/';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WidgetService {

  private widgetsUrl = 'api/widgets';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET widgets from the server */
  getWidgets (): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.widgetsUrl)
      .pipe(
        tap(widgets => this.log(`fetched widgets`)),
        catchError(this.handleError('getWidgets', []))
      );
  }

  /** GET widget by id. Return `undefined` when id not found */
  getWidgetNo404<Data>(id: number): Observable<Widget> {
    const url = `${this.widgetsUrl}/?id=${id}`;
    return this.http.get<Widget[]>(url)
      .pipe(
        map(widgets => widgets[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} widget id=${id}`);
        }),
        catchError(this.handleError<Widget>(`getWidget id=${id}`))
      );
  }

  /** GET widget by id. Will 404 if id not found */
  getWidget(id: number): Observable<Widget> {
    const url = `${this.widgetsUrl}/${id}`;
    return this.http.get<Widget>(url).pipe(
      tap(_ => this.log(`fetched widget id=${id}`)),
      catchError(this.handleError<Widget>(`getWidget id=${id}`))
    );
  }

  /* GET widgets whose name contains search term */
  searchWidgets(term: string): Observable<Widget[]> {
    if (!term.trim()) {
      // if not search term, return empty widget array.
      return of([]);
    }
    return this.http.get<Widget[]>(`api/widgets/?name=${term}`).pipe(
      tap(_ => this.log(`found widgets matching "${term}"`)),
      catchError(this.handleError<Widget[]>('searchWidgets', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new widget to the server */
  addWidget (widget: Widget): Observable<Widget> {
    return this.http.post<Widget>(this.widgetsUrl, widget, httpOptions).pipe(
      tap((widget: Widget) => this.log(`added widget w/ id=${widget.id}`)),
      catchError(this.handleError<Widget>('addWidget'))
    );
  }

  /** DELETE: delete the widget from the server */
  deleteWidget (widget: Widget | number): Observable<Widget> {
    const id = typeof widget === 'number' ? widget : widget.id;
    const url = `${this.widgetsUrl}/${id}`;

    return this.http.delete<Widget>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted widget id=${id}`)),
      catchError(this.handleError<Widget>('deleteWidget'))
    );
  }

  /** PUT: update the widget on the server */
  updateWidget (widget: Widget): Observable<any> {
    return this.http.put(this.widgetsUrl, widget, httpOptions).pipe(
      tap(_ => this.log(`updated widget id=${widget.id}`)),
      catchError(this.handleError<any>('updateWidget'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for widget consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a WidgetService message with the MessageService */
  private log(message: string) {
    this.messageService.add('WidgetService: ' + message);
  }
}
