import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
    	<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>
    `
})
export class SpinnerComponent { 
    // spinner is initially visible
    @Input() visible = true; 
}
