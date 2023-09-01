import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../@models/provincia.model';
import { Ciudad } from '../@models/ciudad.model';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(`${environment.apiUrl}/provincias`);
  }

  getProvinciaById(id: number): Observable<Provincia> {
    return this.http.get<Provincia>(`${environment.apiUrl}/provincias/${id}`);
  }

  createProvincia(provincia: Provincia): Observable<Provincia> {
    return this.http.post<Provincia>(
      `${environment.apiUrl}/provincias`,
      provincia
    );
  }

  updateProvincia(id: number, provincia: Provincia): Observable<Provincia> {
    return this.http.put<Provincia>(
      `${environment.apiUrl}/provincias/${id}`,
      provincia
    );
  }

  deleteProvincia(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/provincias/${id}`);
  }

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${environment.apiUrl}/ciudades`);
  }

  getCiudadById(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${environment.apiUrl}/ciudades/${id}`);
  }

  createCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${environment.apiUrl}/ciudades`, ciudad);
  }

  updateCiudad(id: number, ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(
      `${environment.apiUrl}/ciudades/${id}`,
      ciudad
    );
  }

  deleteCiudad(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/ciudades/${id}`);
  }
}
