import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { HttpClient } from '@angular/common/http';


import * as L from 'leaflet';
import * as Papa from 'papaparse';



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MapPage implements OnInit {

  map!: L.Map;
  traficData: any[] = [];
    
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
     this.loadCSV();
  }

  loadCSV() {
    this.http.get('assets/data/Dataset_Trafic_Routier_Abidjan.csv', { responseType: 'text' })
      .subscribe(data => {
        Papa.parse(data, {
          header: true,
          complete: result => {
            this.traficData = result.data;
            this.initMap();
            this.plotRoutes();
          }
        });
      });
  }

  initMap() {
    this.map = L.map('mapId').setView([5.35, -4.00], 12); // Centre Abidjan
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap'
    }).addTo(this.map);
  }

 plotRoutes() {
    this.traficData.forEach(point => {
      if (point.latitude_start && point.longitude_start && point.latitude_end && point.longitude_end) {
        const start: [number, number] = [parseFloat(point.latitude_start), parseFloat(point.longitude_start)];
        const end: [number, number] = [parseFloat(point.latitude_end), parseFloat(point.longitude_end)];

        const color = point.incident_signalé === 'oui' ? 'red' : 'green';

        L.polyline([start, end] as [number, number][], { color }).addTo(this.map)
          .bindPopup(`
            🚗 Vitesse moyenne: ${point.vitesse_moyenne} km/h <br>
            🔥 Incident: ${point.incident_signalé || 'non'} <br>
            🧭 Distance: ${point.distance_km} km
          `);
      }
    });
  }


}
