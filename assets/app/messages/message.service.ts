import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from './../errors/error.service';
import { Message } from './message.model';

@Injectable()

export class MessageService {
    private messages: Message[] = [];
    messegeIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {}

    addMessage(message: Message) {
        //this.messages.push(message);
        console.log(this.messages);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'})
        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://heroku-node-angular.herokuapp.com/message' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(
                    result.obj.content,
                    result.obj.user ? result.obj.user.firstName : '',    
                    result.obj._id,
                    result.obj.user ? result.obj.user._id : '');
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getMessages() {        
        return this.http.get('https://heroku-node-angular.herokuapp.com/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user ? message.user.firstName : '',                       
                        message._id,
                        message.user ? message.user._id : ''
                    ));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editMessage(message: Message) {
        this.messegeIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        console.log(this.messages);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') 
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.patch('https://heroku-node-angular.herokuapp.com/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token') 
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.delete('https://heroku-node-angular.herokuapp.com/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}