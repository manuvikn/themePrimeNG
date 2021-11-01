import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    userList: Array<User> = [];

    constructor (private http: HttpClient) {}

    getUsers() {

        return this.http.get('https://randomuser.me/api/?results=9')
            .pipe(map(({results}:any) => {  
                this.userList = [];           
                results.forEach((data: any) => {
                    const {gender, email, cell, name, login, picture} = data;
                    const user = new User(
                        gender,
                        email,
                        cell,
                        (name['title'] + ' ' + name['first'] + ' ' + name['last']),
                        login['username'],
                        picture['thumbnail']
                    );
                    this.userList.push(user);
                });
                return this.userList;
            }))

    }

}