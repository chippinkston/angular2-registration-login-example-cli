import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { of } from'rxjs/observable/of'
import { Widget } from "../_models/widget";
import { WIDGETS } from "../_mocks/mock-widgets"
import { MessageService } from "../_services/message.service";

@Injectable()
export class WidgetService {

  constructor(private messageService: MessageService) { }

  getWidgets(): Observable<Widget[]> {
    return of(WIDGETS);
  }

}
