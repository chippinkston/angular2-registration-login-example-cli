import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Widget } from "../../_models/";
import { WidgetService} from "../../_services/";

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html'
})
export class WidgetDetailsComponent implements OnInit {
  @Input() widget: Widget;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private location: Location) { }

  ngOnInit(): void {
    this.getWidget();
  }

  getWidget(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.widgetService.getWidget(id)
      .subscribe(widget => this.widget = widget);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.widgetService.updateWidget(this.widget)
      .subscribe(() => this.goBack());
  }

}
