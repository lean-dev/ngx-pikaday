import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-pikaday';

  hinflugDatum = new Date(2018,7,8);

  show(d: Date) {
    console.log(d);
  }
}
