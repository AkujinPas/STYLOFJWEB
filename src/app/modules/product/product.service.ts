import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = "http://localhost:8000/api/product/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true // Asegura el envío de credenciales con cada solicitud
  };

  constructor(private httpClient: HttpClient) { }

  // Obtener todos los productos
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL, { withCredentials: true }) // Opciones con credenciales
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Crear un nuevo producto
  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL, JSON.stringify(product), { ...this.httpOptions, withCredentials: true })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Obtener un producto específico por ID
  find(id): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiURL}${id}`, { withCredentials: true })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Actualizar un producto específico por ID
  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiURL}${id}`, JSON.stringify(product), { ...this.httpOptions, withCredentials: true })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Eliminar un producto específico por ID
  delete(id): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.apiURL}${id}`, { ...this.httpOptions, withCredentials: true })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Manejo de errores
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
