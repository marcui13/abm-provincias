import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken: string | null = null;

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    this.authToken = token;
  }

  getToken(): string | null {
    return this.authToken;
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    // Realiza una solicitud HTTP al servidor para autenticar al usuario
    return this.http.post<any>(`${environment.apiUrl}/login`, credentials);
  }

  logout(): void {
    this.authToken = null;
    // Realiza cualquier otra limpieza necesaria al cerrar la sesión
  }
}
