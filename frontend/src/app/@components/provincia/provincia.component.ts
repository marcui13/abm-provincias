import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../@models/provincia.model'; // Importa el modelo de Provincia
import { ApiService } from '../../@services/api.service';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css'],
})
export class ProvinciaComponent implements OnInit {
  provincias!: Provincia[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Cargar la lista de provincias desde el backend
    this.apiService.getProvincias().subscribe((data) => {
      this.provincias = data;
    });
  }

  // Implementa funciones para crear, actualizar y eliminar provincias
}
