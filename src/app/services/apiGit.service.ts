import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  constructor(private httpClient: HttpClient) { }

  searchUser(query: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(`https://api.github.com/search/users?q=${query}`, { observe: 'response' });
  }

  getPicture(pathApi: any): Observable<Blob> {
    return this.httpClient.get(`${pathApi}`, { responseType: "blob" }).pipe(take(1));
  }

}
