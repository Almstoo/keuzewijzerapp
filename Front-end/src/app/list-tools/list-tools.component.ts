import { Component, OnInit } from '@angular/core';
import { ToolsDataService } from '../services/data/tools-data.service';
//import { Tool } from 'src/app/interfaces/tool';
import { Router } from '@angular/router';


export class Tool {
  constructor(
    public id: number,
    public name: string,
    public officialWebpageHardwareTool: string,

  ){

  }
}

export class AlarmTool {
  constructor(
    public id: number,
    public name: string,
    public describe: string,
    public lastq :String,
    public geven: boolean,
    public ontvangen: boolean,
    public binnen: boolean,
    public buiten: boolean,
  ){}
}

@Component({
  selector: 'app-list-tools',
  templateUrl: './list-tools.component.html',
  styleUrls: ['./list-tools.component.css']
})
export class ListToolsComponent implements OnInit {

  user: String = sessionStorage.getItem('authUser');
  tools: Tool[]
  //  [
  //   new Tool(1, 'tool one ', 'description one' ),
  //   new Tool(2, 'tool two', 'description two' ),
  //   new Tool(3, 'tool three', 'description three')

  // ]

  constructor(
    private toolsDataService: ToolsDataService,
    private router: Router
  ) { }

  message: string
  name = sessionStorage.getItem('authUser')

  ngOnInit() {
    this.refreshMyTools();
  }

  refreshMyTools() {
    this.toolsDataService.retrieveAllTools(this.user).subscribe(
      response => {
        this.tools = response;
      }
    )
  }

  deleteTool(id) {
    this.toolsDataService.deleteTool(this.user, id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of tools ${id} Successful!`;
        this.refreshMyTools();
      }
    ) 
  }

  updateTool(id){
    this.router.navigate(['users',this.name,'tools', id])
  }

  addTool(id){
    this.router.navigate(['users',this.name,'tools', -1])
  }

}
