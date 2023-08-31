import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../@models/provincia.model';
import { Ciudad } from '../@models/ciudad.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) {}

  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(`${this.baseUrl}/provincias`);
  }

  getProvinciaById(id: number): Observable<Provincia> {
    return this.http.get<Provincia>(`${this.baseUrl}/provincias/${id}`);
  }

  createProvincia(provincia: Provincia): Observable<Provincia> {
    return this.http.post<Provincia>(`${this.baseUrl}/provincias`, provincia);
  }

  updateProvincia(id: number, provincia: Provincia): Observable<Provincia> {
    return this.http.put<Provincia>(
      `${this.baseUrl}/provincias/${id}`,
      provincia
    );
  }

  deleteProvincia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/provincias/${id}`);
  }

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.baseUrl}/ciudades`);
  }

  getCiudadById(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.baseUrl}/ciudades/${id}`);
  }

  createCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.baseUrl}/ciudades`, ciudad);
  }

  updateCiudad(id: number, ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(`${this.baseUrl}/ciudades/${id}`, ciudad);
  }

  deleteCiudad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/ciudades/${id}`);
  }
}
