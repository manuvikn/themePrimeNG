import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UsersService } from "src/app/providers/users.service";


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    userList: Array<User> = [];

    constructor(private usersService: UsersService) {}

    ngOnInit() {

        this.generarUsers();
    }

    deleteUser(i: number) {
        this.userList.splice(i, 1);
    }

    generarUsers() {
        this.usersService.getUsers()
        .subscribe((data: Array<User>) => {
            this.userList = data;
        });
    }
}