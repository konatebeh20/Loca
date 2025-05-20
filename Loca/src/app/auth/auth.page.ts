import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonImg, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonButton, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonIcon, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonButton, 
  ]
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
