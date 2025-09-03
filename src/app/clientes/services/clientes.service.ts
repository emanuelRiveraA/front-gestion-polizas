import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ClientesService {

    private apiUrl: string = "http://localhost:8080/api/clientes"

    constructor(private httpClient: HttpClient) { }

    listarClientes(): Observable<Cliente[]>{
        return this.httpClient.get<Cliente[]>( this.apiUrl )
            .pipe( 
                catchError( () => of([]) )
            );
    }
    
}