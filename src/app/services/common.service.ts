import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://127.0.0.1:8000/mm_back';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(baseUrl + '/get_countries');
  }

  getCategories(): Observable<any> {
    return this.http.get(baseUrl + '/get_categories');
  }

}
