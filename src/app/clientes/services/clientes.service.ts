import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientesService {

    private apiUrl: string = "http://localhost:8080/api/clientes"

    constructor(private httpClient: HttpClient) { }

    listarClientes(): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(this.apiUrl)
            .pipe(
                catchError(() => of([]))
            );
    }

    registrarCliente(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.post<Cliente>(this.apiUrl, cliente) // pasar cliente en POST body
            .pipe(
                catchError(() => of(null as any)) // retorna null por error, evitar vacio of()
            );
    }

    consultarClienteById(id: number): Observable<Cliente> {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.get<Cliente>(url)
            .pipe(
                catchError(() => of(null as any))
            );
    }

    editarCliente(cliente: Cliente, id?: number): Observable<Cliente> {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.put<Cliente>(url, cliente)
            .pipe(
                catchError(() => of(null as any))
            );
    }

    buscarPorFiltro(input: string): Observable<Cliente[]> {
        const url = `${this.apiUrl}?filtro=${input}`;
        return this.httpClient.get<Cliente[]>(url)
            .pipe(
                catchError(() => of(null as any))
            );
    }

    asociarClienteAPoliza(clienteId: number, polizaId?: number): Observable<Cliente> {
        const url = `${this.apiUrl}/${clienteId}/asignar-poliza/${polizaId}`;
        return this.httpClient.put<Cliente>(url,{})
            .pipe(
                catchError(() => of(null as any))
            );
    }

}