import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../@models/provincia.model';
import { ApiService } from '../../@services/api.service';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.scss'],
})
export class ProvinciaComponent implements OnInit {
  provincias: Provincia[] = [];
  nuevaProvincia!: Provincia | null;
  provinciaSeleccionada: Provincia | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.nuevaProvincia = {
      id: 0,
      descripcion: '',
    };
    this.cargarProvincias();
  }

  cargarProvincias(): void {
    this.apiService.getProvincias().subscribe((data) => {
      this.provincias = data;
      console.log(data);
    });
  }

  crearProvincia(): void {
    if (this.nuevaProvincia) {
      this.apiService.createProvincia(this.nuevaProvincia).subscribe(() => {
        this.nuevaProvincia = {
          id: 0,
          descripcion: '',
        };
        this.cargarProvincias();
      });
    }
  }

  seleccionarProvincia(provincia: Provincia): void {
    this.provinciaSeleccionada = provincia;
  }

  actualizarProvincia(): void {
    if (this.provinciaSeleccionada) {
      this.apiService
        .updateProvincia(
          this.provinciaSeleccionada.id,
          this.provinciaSeleccionada
        )
        .subscribe(() => {
          this.provinciaSeleccionada = null;
          this.cargarProvincias();
        });
    }
  }

  eliminarProvincia(): void {
    if (this.provinciaSeleccionada) {
      this.apiService
        .deleteProvincia(this.provinciaSeleccionada.id)
        .subscribe(() => {
          this.provinciaSeleccionada = null;
          this.cargarProvincias();
        });
    }
  }
}
