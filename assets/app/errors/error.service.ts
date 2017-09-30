import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Error } from './error.model';

@Injectable()

export class ErrorService {
    
    constructor(private http: Http) {}

    errorOccured = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    }    
}