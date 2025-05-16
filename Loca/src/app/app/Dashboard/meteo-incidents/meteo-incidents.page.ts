import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-meteo-incidents',
  templateUrl: './meteo-incidents.page.html',
  styleUrls: ['./meteo-incidents.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MeteoIncidentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
