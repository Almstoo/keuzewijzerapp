import { Component, OnInit } from '@angular/core';
import { ToolsDataService } from '../services/data/tools-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tool } from '../list-tools/list-tools.component';
//import { Tool } from '../interfaces/tool';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  tool: Tool
  id;
  user = sessionStorage.getItem('authUser')

  constructor(
    private toolsDataService: ToolsDataService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.activatedroute.snapshot.params['id'];

    // to avoid undifined property in the console we add create initial tool opject 
    this.tool = new Tool(this.id, '', '');
    // we added this condtion to avoid connecting with the serverto retieve exist tool data when we add a new tool
    if (this.id != -1) {
      this.toolsDataService.getTool(this.user, this.id).subscribe(
        data => {
          this.tool = data
          console.log(this.tool)
        }
      )
    }
  }

  saveTool() {
    if (this.id == -1) {
      this.toolsDataService.createTool(this.user, this.tool).subscribe(
        data => {
          console.log(data)
          this.router.navigate([`users/${this.user}/tools`])
        }
      )
    }
    else {
      this.toolsDataService.updateTool(this.user, this.id, this.tool).subscribe(
        data => {
          console.log(data)
          this.router.navigate([`users/${this.user}/tools`])
        }
      )
    }
  }

}
