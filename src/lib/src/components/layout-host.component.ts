import { Component,Input, TemplateRef } from '@angular/core';
import { LayoutType, LayoutOptions } from '../models/index';

@Component({
  selector: 'avam-layout',
  templateUrl: './layout-host.component.html',
  styleUrls: ['./layout-host.component.css']
})
export class AvamGuiLayoutComponent {
  name = 'AVAM Gui Layout';

  @Input()
  headerTemplate: TemplateRef<any>;

  @Input() 
  layoutOptions : LayoutOptions;

  @Input()
  layoutType : string;





}
