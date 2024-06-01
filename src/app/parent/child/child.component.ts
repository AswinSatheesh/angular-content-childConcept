import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @ContentChild('para') paragraphEl!: ElementRef;
  @ContentChild(TestComponent) testComp! : TestComponent;

  styleParagrpah(){
    console.log(this.paragraphEl.nativeElement);
    console.log(this.testComp.name)
  }

}
