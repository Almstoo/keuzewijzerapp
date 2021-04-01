import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { AlarmTool } from 'src/app/list-tools/list-tools.component';
// import { alarmTool } from 'src/app/interfaces/tool';



@Injectable({
  providedIn: 'root'
})
export class AlarmDataService {

  constructor(
    private httpClient: HttpClient
  ) { }
  retrieveAllTools(username) {
    return this.httpClient.get<AlarmTool[]>(`${API_URL}/users/${username}/alarmTools`);
    //console.log("Execute Hello World Bean Service")
  }

  retrieveAllToolsByLastq(username, lastq) {
    return this.httpClient.get<AlarmTool[]>(`${API_URL}/users/${username}/findByLastq_alarm/${lastq}`);
    //console.log("Execute Hello World Bean Service")
  }

}
