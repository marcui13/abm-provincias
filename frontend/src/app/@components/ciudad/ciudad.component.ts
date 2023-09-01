import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../@models/ciudad.model';
import { ApiService } from '../../@services/api.service';
import { Provincia } from 'src/app/@models/provincia.model';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss'],
})
export class CiudadComponent implements OnInit {
  ciudades: Ciudad[] = [];
  nuevaCiudad!: Ciudad | null;
  ciudadSeleccionada: Ciudad | null = null;
  provincias: Provincia[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.nuevaCiudad = {
      id: 0,
      descripcion: '',
      id_provincia: 0,
    };
    this.apiService.getProvincias().subscribe((data) => {
      this.provincias = data;
      console.log(data);
    });
    this.cargarCiudades();
  }

  cargarCiudades(): void {
    this.apiService.getCiudades().subscribe((data) => {
      this.ciudades = data;
      console.log(data);
    });
  }

  crearCiudad(): void {
    if (this.nuevaCiudad) {
      this.apiService.createCiudad(this.nuevaCiudad).subscribe(() => {
        this.nuevaCiudad = {
          id: 0,
          descripcion: '',
          id_provincia: 0,
        };
        this.cargarCiudades();
      });
    }
  }

  seleccionarCiudad(ciudad: Ciudad): void {
    this.ciudadSeleccionada = ciudad;
  }

  actualizarCiudad(): void {
    if (this.ciudadSeleccionada) {
      this.apiService
        .updateCiudad(this.ciudadSeleccionada.id, this.ciudadSeleccionada)
        .subscribe(() => {
          this.ciudadSeleccionada = null;
          this.cargarCiudades();
        });
    }
  }

  eliminarCiudad(): void {
    if (this.ciudadSeleccionada) {
      this.apiService.deleteCiudad(this.ciudadSeleccionada.id).subscribe(() => {
        this.ciudadSeleccionada = null;
        this.cargarCiudades();
      });
    }
  }

  obtenerNombreProvincia(idProvincia: number): string {
    // Buscar la provincia por su ID
    const provinciaEncontrada = this.provincias.find(
      (provincia) => provincia.id === idProvincia
    );
    // Si se encuentra la provincia, devuelve su nombre; de lo contrario, devuelve un mensaje de error
    return provinciaEncontrada
      ? provinciaEncontrada.descripcion
      : 'Provincia no encontrada';
  }
}
