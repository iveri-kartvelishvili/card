import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1-1';

  myperson:Person = new Person();
  arr:Person[] = []

  onSaveClick(event:Person) {
     this.arr.push(event)
     console.log(this.arr)
  }
}





