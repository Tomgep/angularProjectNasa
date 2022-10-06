import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ConfigService implements OnInit {

    configUrl = 'https://api.nasa.gov/planetary/apod?api_key=IfG1JxpqHmdyJq4qxwgLvBxIPms7pQZGzwJfiqX4';


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

@Injectable({
    providedIn: 'root',
})

export class ConfigServiceEvent implements OnInit {

    configUrl2 = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {

    }

    getConfig2(): Observable<string> {
        return this.http.get(this.configUrl2)
            .pipe(
                map((reponse2: any) => {
                    console.log(reponse2)
                    return reponse2
                })
            )
    }

}

@Injectable({
    providedIn: 'root',
})

export class ConfigServiceETH implements OnInit {

    configUrl3 = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR';

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {

    }

    getConfig3(): Observable<string> {
        return this.http.get(this.configUrl3)
            .pipe(
                map((reponse3: any) => {
                    console.log(reponse3)
                    return reponse3
                })
            )
    }

}

@Injectable({
    providedIn: 'root',
})

export class ConfigServiceFinalSpace implements OnInit {

    configUrl2 = 'https://finalspaceapi.com/api/v0/quote';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    getConfig2(): Observable<any> {
        return this.http.get(this.configUrl2)
            .pipe(
                map((reponse2: any) => {
                    console.log(reponse2)
                    return reponse2
                })
            )
    }
}


@Injectable({
    providedIn: 'root',
})

export class ConfigServiceFinalSpaceCharacter implements OnInit {

    configUrl2 = 'https://finalspaceapi.com/api/v0/character/';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    getConfig2(): Observable<any> {
        return this.http.get(this.configUrl2)
            .pipe(
                map((reponse2: any) => {
                    console.log(reponse2)
                    return reponse2
                })
            )
    }
}

