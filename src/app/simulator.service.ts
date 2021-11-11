import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://127.0.0.1:8000/mm_back';

@Injectable({
  providedIn: 'root'
})

export class SimulatorService {

  constructor(private http: HttpClient) { }

  runSimulator(data:any): Observable<any> {
    return this.http.post(baseUrl + '/run_simulation', data);
  }
}
