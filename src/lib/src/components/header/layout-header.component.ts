import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent {
    @Input()
    htemplate : TemplateRef<any>;
    

}
