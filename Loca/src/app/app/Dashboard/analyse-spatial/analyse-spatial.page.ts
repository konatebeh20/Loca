import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-analyse-spatial',
  templateUrl: './analyse-spatial.page.html',
  styleUrls: ['./analyse-spatial.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AnalyseSpatialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
