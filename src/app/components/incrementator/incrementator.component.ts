import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styleUrls: ['./incrementator.component.css']
})
export class IncrementatorComponent implements OnInit{

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input() progress: number = 40;
  @Input() btnClass: string = 'btn-primary';
  @Output() changeProgress: EventEmitter<number> = new EventEmitter();
  
  onChange( event:number ){
    if( event >= 100 ){
      this.progress = 100;
    }else if( event <= 0 ){
      this.progress = 0;
    }else{
      this.progress = event;
    }
    this.changeProgress.emit( this.progress );
  }

  changeValue( value: number ){

    if( this.progress >= 100 && value >= 0 ){
      this.changeProgress.emit(100)
      return this.progress = 100;
    }


    if( this.progress <= 0 && value < 0 ){
      this.changeProgress.emit(0)
      return this.progress = 0;
    }

    this.changeProgress.emit(this.progress += value)
    return this.progress += value;
  }
}
