import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  age: number;
  address: {
    city: string;
    zip: string;
    country: string;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _ev = new BehaviorSubject(null);
  title = 'angular-type-generator-poc';

  /**
   * I am the description for propertyWithDescription
   */
  propertyWithDescription = 'I should have a description';

  @Input() stringInput: string | undefined;
  @Input() numberInput: number | undefined;
  @Input() objectInput?: User;
  @Input() listOfObjectsInput: Array<{ a: string, b: number, c: boolean }> = [];
  @Input() stringInputWithDefault = 'Hey!';

  @Output() userChanged = new EventEmitter<User>();
  @Output() somethingHappened = this._ev.asObservable();



}
