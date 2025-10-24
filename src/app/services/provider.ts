import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Provider {
  
    constructor(public http:HttpClient) //injection de dépendence
  {
    
  }

   getProviders(){
    return this.http.get(" http://localhost:8081/ams/providers/getAllProvider");
  }

saveProvider(provider:any){
    return this.http.post("http://localhost:8081/ams/providers/addProvider",provider);
  }
}
