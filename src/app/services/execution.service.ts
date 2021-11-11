import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://127.0.0.1:8000/mm_back';

@Injectable({
  providedIn: 'root'
})
export class ExecutionService {

  constructor(private http: HttpClient) { }

  getPackDetailsByChannel(data:any): Observable<any> {
    return this.http.post(baseUrl + '/pack_details_by_channel', data);

  }

  getMediaDetails(data:any): Observable<any> {
    return this.http.post(baseUrl + '/media_details_by_type', data);

  }

  execution_levers(data:any): Observable<any> {
    return this.http.post(baseUrl + '/execution_levers', data);

  }
}
