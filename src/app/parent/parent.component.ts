import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild('para') paraEle! : ElementRef;

  showParentVal(){
    console.log(this.paraEle.nativeElement); 
  }

}
