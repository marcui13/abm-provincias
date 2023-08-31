import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../@models/ciudad.model'; // Importa el modelo de Ciudad
import { ApiService } from '../../@services/api.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
})
export class CiudadComponent implements OnInit {
  ciudades!: Ciudad[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Cargar la lista de ciudades desde el backend
    this.apiService.getCiudades().subscribe((data) => {
      this.ciudades = data;
    });
  }

  // Implementa funciones para crear, actualizar y eliminar ciudades
}
