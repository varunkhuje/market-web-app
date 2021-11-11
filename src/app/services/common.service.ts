import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://127.0.0.1:8000/mm_back';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  selectedDetails: any;

  getCountries(): Observable<any> {
    return this.http.get(baseUrl + '/get_countries');
  }

  getCategories(): Observable<any> {
    return this.http.get(baseUrl + '/get_categories');
  }

  getChannels(data:any): Observable<any> {
    return this.http.post(baseUrl + '/get_channels', data);
  }

  createSimuation(data:any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl + '/create_simulation', data);
  }

  setSelectedDetails(details:any){
    this.selectedDetails = details;
    console.log(this.selectedDetails);
  }

}
