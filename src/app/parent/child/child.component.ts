import { Component, ContentChild, ElementRef,ContentChildren,QueryList } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @ContentChild('para') paragraphEl!: ElementRef;
  @ContentChild(TestComponent) testComp! : TestComponent;
  @ContentChildren('para') paraElements! : QueryList<ElementRef>

  @ContentChildren(TestComponent) testCompElements! : QueryList<TestComponent>;

  styleParagrpah(){
    // console.log(this.paragraphEl.nativeElement);
    // console.log(this.testComp.name)
    // this.paraElements.forEach((el)=>{console.log(el.nativeElement)})
    this.testCompElements.forEach((testElemts)=> {
      console.log(testElemts.name);
    });
  }

}
