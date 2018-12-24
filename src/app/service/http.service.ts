import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    cabecalho = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
    };

    constructor(private http: HttpClient) {}

    get(url: string): Observable<any> {
        return this.http.get(url);
    }
    post(url: string, obj: any): Observable<any> {
        return this.http.post(url, obj, this.cabecalho);
    }
}
