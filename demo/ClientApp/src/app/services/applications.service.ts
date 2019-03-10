import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

    constructor(private http:HttpClient) {}

    getInfo(success, error?): void
    {
        this.http.get('http://localhost:5000/info/applications', 
        { withCredentials:false, responseType:'json' })
        .subscribe((data:Application[])=>{
            success(data);
        }, (err)=>{
            error(err.message);
        });
    }
}

export interface Application{
  img?:string;
  mutedText?:string;
  text?:string;
  link?:string;
  title?:string;
  imageName?:string;
}
