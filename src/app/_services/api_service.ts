import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable ,of } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class ApiService {
    
    constructor(private http: HttpClient) {
              
    }
    

    activate_account(token:string) : Observable<any> {
        let url  = environment.apiUrl + token;
        return this.http.post<any>(`${url}`, {});
    }   
}