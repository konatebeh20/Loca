import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardPage implements OnInit {

  dataset: any[] = [];
  filteredData: any[] = [];

  // Données dynamiques pour les statistiques
  vitesseMoyenne: number = 0;
  congestion: string = 'Non';
  troncons: string[] = [];

  // Options pour les filtres
  uniqueMonths: string[] = [];
  uniqueDays: string[] = [];
  uniqueYears: string[] = [];

  constructor(private http: HttpClient) { }

  // Charger le dataset depuis les assets
  loadDataset() {
    this.http.get<any[]>('assets/data/dataset.json').subscribe((data) => {
      this.dataset = data;
      this.filteredData = [...this.dataset];
      this.calculateStats();
      this.extractUniqueFilters();
    });
  }

  // Calculer les statistiques dynamiques
  calculateStats() {
    if (!this.filteredData || this.filteredData.length === 0) {
      this.vitesseMoyenne = 0;
      this.congestion = 'Non';
      return;
    }

    const totalVitesse = this.filteredData.reduce((sum, item) => sum + item.vitesse_moyenne, 0);
    this.vitesseMoyenne = totalVitesse / this.filteredData.length;
    const congestedCount = this.filteredData.filter(item => item.incident_signalé === 'oui').length;
    this.congestion = congestedCount > 0 ? 'Oui' : 'Non';

    // Tronçons
    this.troncons = [...new Set(this.filteredData.map(item => item.segment_start))];
  }

  // Extraire les options uniques pour les filtres
  extractUniqueFilters() {
    this.uniqueMonths = [...new Set(this.dataset.map(item => String(item.mois)))];
    this.uniqueDays = [...new Set(this.dataset.map(item => String(item.jour_semaine)))];
    this.uniqueYears = [...new Set(this.dataset.map(item => new Date(item.date).getFullYear().toString()))];
    // this.uniqueMonths = [...new Set(this.dataset.map(item => item.mois))];
    // this.uniqueDays = [...new Set(this.dataset.map(item => item.jour_semaine))];
    // this.uniqueYears = [...new Set(this.dataset.map(item => new Date(item.date).getFullYear()))];
  }

  // Mettre à jour les filtres
  onFilterChange(filterKey: string, event: any) {
    const filterValue = event.detail.value;

    this.filteredData = this.dataset.filter(item => {
      if (filterKey === 'mois') return item.mois === filterValue;
      if (filterKey === 'jour_semaine') return item.jour_semaine === filterValue;
      if (filterKey === 'annee') return new Date(item.date).getFullYear() === filterValue;
      if (filterKey === 'congestion') return item.incident_signalé === filterValue;

      return true;
    });

    this.calculateStats();
  }

  ngOnInit() {
  }

}
