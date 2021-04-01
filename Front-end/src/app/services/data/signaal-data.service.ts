import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignaalTool } from 'src/app/interfaces/tool';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SignaalDataService {

  constructor(
    private httpClient:HttpClient
  ) { }

  retrieveAllTools(username){
    return this.httpClient.get<SignaalTool[]>(`${API_URL}/users/${username}/signaalTools`);
  }

  retrieveAllToolsByLastq(username, lastq){
    return this.httpClient.get<SignaalTool[]>(`${API_URL}/users/${username}/findByLastq/${lastq}`);
  }
}
