import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import{AppServiceService} from '../app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiScoreAngular';
  digiScore:number=0;
  recomendation:any;
  majorTicks:any;
  minorTicks:any;
  labelStyle:any;
  subscription: Subscription[]=[];
  customerID:any;
  id:any;
  showData:boolean=false;

  constructor(private appService: AppServiceService){}

  showDigiMeter(){
    this.subscription.push(this.appService.getCustomerDetails(this.id).subscribe(
      response=>{
        if(response){
          this.showData=true;
          this.digiScore=response.userScore;
          if(response.recommendation!=null)
          this.recomendation=response.recommendation.split("|");
          this.customerID=response.customerPI;
        }
      }
    ))
  }
  onIdChange(){
    this.showData=false;
  }
  
    ngOnInit(): void {
        this.majorTicks = {
            useRangeColor: true
        };
        this.minorTicks = {
            useRangeColor: true
        };
        this.labelStyle = {
            useRangeColor: true
        };
    }
}
