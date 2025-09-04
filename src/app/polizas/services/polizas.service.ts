import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Poliza } from '../interfaces/Poliza.interface';

@Injectable({providedIn: 'root'})
export class PolizasService {
    
    private apiUrl: string = "http://localhost:8080/api/polizas"

    constructor(private httpClient: HttpClient) { }

    listarClientes(): Observable<Poliza[]> {
        return this.httpClient.get<Poliza[]>(this.apiUrl)
            .pipe(
                catchError(() => of([]))
            );
    }

    consultarPolizaById(id: number): Observable<Poliza> {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.get<Poliza>(url)
            .pipe(
                catchError(() => of(null as any))
            );
    }
    
    buscarPorFiltro(input: string): Observable<Poliza> {
        const url = `${this.apiUrl}?filtro=${input}`;
        return this.httpClient.get<Poliza>(url)
            .pipe(
                catchError(() => of(null as any))
            );
    }
}