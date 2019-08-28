import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-garage',
  templateUrl: './garage.page.html',
  styleUrls: ['./garage.page.scss'],
})
export class GaragePage implements OnInit {
    subscription: Subscription;
    intervalId: number;
    results: any;
    records = {
      state : "",
    }
    state = -1
    url = "http://api.x10host.com/garage/index.php/garage"

    constructor(private http: HttpClient) { }
    

    ngOnInit() {
      
    this.http.get(this.url  + "/state/get" ).subscribe((res : any)=>{ 
        this.state = res.records.state
    }); 
    // This is METHOD 1
    const source = interval(1000);    
    this.subscription = source.subscribe(val => this.getChanges());



    }

    getChanges() {
     
      this.http.get(this.url  + "/state/get" ).subscribe((res : any)=>{
        var element = document.getElementById("bulb");
        if (res.records.state != this.state){
                              
          setTimeout(function(){ 
            var element = document.getElementById("bulb");
            element.setAttribute("color","danger");
          }, 250);
          element.setAttribute("color","dark");
          this.state = res.records.state
        }else{
          element.setAttribute("color","dark");
        }
        
                
      }); 


    }
  
    ngOnDestroy() {
      // For method 1
      this.subscription && this.subscription.unsubscribe();
  
      // For method 2
      clearInterval(this.intervalId);
    }

    
    setState(){
      
       this.http.get(this.url  + "/state/set" ).subscribe((res : any)=>{
        
          this.results = res;
          console.log(this.results)
          this.records.state = res.records.state
        });     
      
      
    }

    getState(){
      this.http.get(this.url  + "/state/get" ).subscribe((res : any)=>{
        
        this.results = res;
        console.log(this.results)
        this.records.state = res.records.state
        });     
      
      
    }


  }
