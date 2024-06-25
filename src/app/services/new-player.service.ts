import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPlayerService {
  apiUrl: string = "http://localhost:3000/user"
  constructor(private httpClient: HttpClient) { }

  newPlayer(playerData: any){
    return this.httpClient.post<any>(this.apiUrl, playerData);
  }
}
