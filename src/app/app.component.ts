import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialComponentComponent } from "./core/material-component/material-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-app';
}
