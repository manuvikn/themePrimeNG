import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Usuario } from "src/app/maqueta/models/usuario";

@Component({
    selector: 'datos-personales',
    templateUrl: './datos-personales.component.html',
    styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit{

    usuario: Usuario | undefined;
    today: string = '';

    constructor(private route: ActivatedRoute,
                private http: HttpClient) {}

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.today = new Date().toLocaleDateString();
        this.getUserById(id);
    }

    getUserById(id: number) {
        
        this.http.get('/assets/data/users1.json')
            .pipe(
                map((arrData: any) => {
                    return arrData.filter((user: any) => user['id'] == id);
                })
            )
            .subscribe( ([response]) => this.usuario = response);
            

    }

}