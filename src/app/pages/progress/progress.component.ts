import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progressOne: any = 10;
  progressTwo: number = 15;

  get getPorcent1(){ 
    return `${ this.progressOne }%`;
  }

  get getPorcent2(){ 
    return `${ this.progressTwo }%`;
  }

  setProgress( value: number ){
    this.progressOne = value;
  }
  setProgress2( value: number ){
    this.progressTwo = value;
  }
}
