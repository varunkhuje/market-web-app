import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000/mm_back';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  simulationParameters: any
  recommendedValues: any;


  getCSVData(data:any): Observable<any> {
    return this.http.post(baseUrl + '/fetch_csv_data', data);  
  }

  runSimulator(data:any): Observable<any> {
    return this.http.post(baseUrl + '/run_simulator', data);
  }

  setRecommendedValues(details:any){
    this.recommendedValues = details;
    console.log(this.recommendedValues);
  }

  setSimulationParameters(parameters:any){
    this.simulationParameters = parameters;
    // console.log(this.recommendedValues);
  }
}

