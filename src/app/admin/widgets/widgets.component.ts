import { Component, OnInit } from '@angular/core';
import { Widget } from "../../_models/widget";
import { WidgetService} from "../../_services/widget.service"

@Component({
  selector: 'admin-widgets',
  templateUrl: './widgets.component.html'
})
export class WidgetsComponent implements OnInit {

  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetService: WidgetService) { }

  getWidgets(): void {
    this.widgetService.getWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }

  ngOnInit() {
    this.getWidgets();
  }

}
