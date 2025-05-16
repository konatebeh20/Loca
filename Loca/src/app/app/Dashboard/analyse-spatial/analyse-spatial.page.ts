import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analyse-spatial',
  templateUrl: './analyse-spatial.page.html',
  styleUrls: ['./analyse-spatial.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AnalyseSpatialPage implements OnInit {

  dataset: any[] = [];
  moyenneVitesseParHeure: number = 0;
  tempsParSegment: string = '';
  tauxCongestion: number = 0;


  constructor(private http: HttpClient,) { }

  ngOnInit() {
    // this.loadDataset();
  }

  // loadDataset() {
  //   this.http.get('assets/data/Dataset_Trafic_Routier.csv').subscribe((data: any[]) => {
  //     this.dataset = data;
  //     this.calculateStats();
  //   });
  // }

  // calculateStats() {
  //   // Calcul de la vitesse moyenne par heure
  //   const totalVitesse = this.dataset.reduce((sum, item) => sum + item.vitesse_moyenne, 0);
  //   this.moyenneVitesseParHeure = totalVitesse / this.dataset.length;

  //   // Temps parcourus par segment
  //   const segmentData = this.dataset.map(item => ({
  //     segment: item.segment_start,
  //     temps: item.distance_km / (item.vitesse_moyenne || 1) * 60,
  //   }));

  //   this.tempsParSegment = segmentData
  //     .map(seg => `${seg.segment}: ${seg.temps.toFixed(2)} min`)
  //     .join(', ');

  //   // Taux de congestions
  //   const congestedCount = this.dataset.filter(item => item.incident_signalé === 'oui').length;
  //   this.tauxCongestion = (congestedCount / this.dataset.length) * 100;
  // }

}
