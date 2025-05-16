import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TraficServiceService {

  constructor(private http: HttpClient) { }

  loadCsvData() {
    return this.http.get('assets/ml-data/Dataset_Trafic_Routier2.csv', {
      responseType: 'text'
    }).pipe(
      map(data => this.csvToJSON(data))
    );
  }

  private csvToJSON(csv: string): any[] {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const obj: any = {};
      line.split(',').forEach((val, i) => {
        obj[headers[i].trim()] = val.trim();
      });
      return obj;
    });
  }
}
