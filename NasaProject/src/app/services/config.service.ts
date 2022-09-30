import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ConfigService implements OnInit {

    configUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    getConfig(): Observable<any> {
        return this.http.get(this.configUrl)
            .pipe(
                map((reponse: any) => {
                    console.log(reponse)
                    return reponse
                })
            )
    }



}