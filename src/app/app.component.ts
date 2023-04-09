import { Component } from '@angular/core';
import { WebServiceService } from './service/web-service.service';
import { TaskService } from './service/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health-Report';
  users:any
  person:string
  covid:string
  parkinson:any
  heart:string
  diabetes:string

  //diab_prediction,heart_prediction,parkinson_prediction,covid_prediction app.component.ts:27:12


  constructor(private useData: WebServiceService, private valuePasser:TaskService, private _snackBar:MatSnackBar) {
    this.useData.getAllPosts().subscribe((data)=>{
    this.person=data['person']
    this.covid=data['covid_prediction']
    this.parkinson=data['parkinson_prediction']
    this.heart=data['heart_prediction']
    this.diabetes=data['diab_prediction']
    console.log("fodho "+Object.keys(data))
    this.openSnackBar()
    this.classifier()
    this.valuePasser.setVariableValue(this.parkinson)
    })

    

   
}
refresher(){
  this.useData.getAllPosts().subscribe((data)=>{
   // console.log(data['person'])
    this.person=data['person']
    this.covid=data['covid_prediction']
    this.parkinson=data['parkinson_prediction']
    this.heart=data['heart_prediction']
    this.diabetes=data['diab_prediction']
    console.log("fodho "+Object.keys(data))
    this.openSnackBar()
    this.classifier()
    this.valuePasser.setVariableValue(this.parkinson)
  })
}
  classifier(){
    if(this.covid=="1")
    {
      this.covid="Positive"
    }
    else
    {
      this.covid="Negative"
    }
    if(this.diabetes=="1")
    {
      this.diabetes="Positive"
    }
    else
    {
      this.diabetes="Negative"
    }
    if(this.parkinson=="1")
    {
      this.parkinson="Positive"
    }
    else
    {
      this.parkinson="Negative"
    }
    if(this.heart=="1")
    {
      this.heart="Positive"
    }
    else
    {
      this.heart="Negative"
    }
    
  }

  openSnackBar()
  {
    if(this.covid=="1" && this.heart=="1" && this.diabetes=="1")
    {
    this._snackBar.open("Seedha Maut!", "CLOSE");
    }
    else if(this.heart=="1" && this.diabetes=="1")
    {
    this._snackBar.open("Chhole Bhature DHOKHA hai, Gym Chale ja Mauka hai!", "CLOSE");
    }
    else if(this.diabetes=="1")
    {
    this._snackBar.open("Kuch Meetha ho jaye!", "CLOSE");
    }
  }

}
