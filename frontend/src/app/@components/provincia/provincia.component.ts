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
    this.cargarProvincias()
      .then(() => {
        this.crearNuevaProvincia();
      })
      .catch((error) => {
        console.log('Error al cargar provincias', error);
      });
  }

  crearNuevaProvincia() {
    const maxId = this.provincias.reduce((max, ciudad) => {
      return ciudad.id > max ? ciudad.id : max;
    }, 0);
    this.nuevaProvincia = {
      id: maxId + 1,
      descripcion: '',
    };
  }

  cargarProvincias(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.getProvincias().subscribe(
        (data) => {
          this.provincias = data;
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  crearProvincia(): void {
    if (this.nuevaProvincia) {
      this.apiService.createProvincia(this.nuevaProvincia).subscribe(() => {
        this.cargarProvincias()
          .then(() => {
            this.crearNuevaProvincia();
          })
          .catch((error) => {
            console.log('Error al cargar provincias', error);
          });
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
