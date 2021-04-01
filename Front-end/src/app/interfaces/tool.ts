export interface Tool {
    id: number,
    name: string,
    officialWebpageHardwareTool: string

}

export interface text_value {
    text: string,
    value: string
}

export interface SignaalTool {
    id: number,
    name: string,
    describe: string,
    lastq: String;
}

// export interface alarm_geven_ontvangen {
//     text : string,
//     value: string
// }
// export interface alarmTool {
//      id: number,
//      name: string,
//      describe: string,
//      geven: boolean,
//      ontvangen: boolean,
//      binnen: boolean,
//      buiten: boolean,
// }


// <div *ngFor="let enum of enum_details">
//       <label for="enum_answer_{{enum.name}}">
//         <input id="enum_answer_{{enum.name}}" [value]='enum.name' type="radio" name="enums" [(ngModel)]="radioSelected">
//         {{enum.name}}
//       </label>
//     </div>
//     <button (click)='radioFun()'>Checked value of radio button</button>
