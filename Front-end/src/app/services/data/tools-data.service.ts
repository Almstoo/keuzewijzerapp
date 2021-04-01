import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tool } from 'src/app/list-tools/list-tools.component';
import { API_URL } from 'src/app/app.constants';
//import { Tool } from 'src/app/interfaces/tool';

@Injectable({
  providedIn: 'root'
})
export class ToolsDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTools(username) {
    return this.http.get<Tool[]>(`${API_URL}/users/${username}/tools`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTool(username, id){
    return this.http.delete<Tool>(`${API_URL}/users/${username}/tools/${id}`);
  }

  getTool(username, id){
    return this.http.get<Tool>(`${API_URL}/users/${username}/tools/${id}`);
  }

  updateTool(username, id, tool){
    return this.http.put<Tool>(`${API_URL}/users/${username}/tools/${id}`, tool);
  }

  createTool(username, tool){
    return this.http.post<Tool>(`${API_URL}/users/${username}/tools/`, tool);
  }

 
}
