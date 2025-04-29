import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: any) {
    this.loadedFeature = feature;
  }
}
