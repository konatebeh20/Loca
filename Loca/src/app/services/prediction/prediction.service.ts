import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) {}

  getPredictions(): Observable<any> {
    return this.http.get('assets/ml-data/predictions.json');
  }

}
