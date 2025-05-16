import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import * as Papa from 'papaparse';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class AccueilPage implements OnInit {

  troncons: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadTroncons();
  }

  loadTroncons() {
    this.http.get('assets/data/Dataset_Trafic_Routier.csv', { responseType: 'text' })
      .subscribe(csvData => {
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const uniqueTroncons = new Set<string>();
            result.data.forEach((row: any) => {
              if (row['target']) {
                uniqueTroncons.add(row['target']);
              }
            });
            this.troncons = Array.from(uniqueTroncons);
          }
        });
      });
  }

}
