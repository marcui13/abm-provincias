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
    this.apiService.getProvincias().subscribe((data) => {
      this.provincias = data;
      // console.log(data);
    });
    this.cargarCiudades()
      .then(() => {
        this.crearNuevaCiudad();
      })
      .catch((error) => {
        console.log('Error al cargar ciudades', error);
      });
  }

  crearNuevaCiudad() {
    const maxId = this.ciudades.reduce((max, ciudad) => {
      return ciudad.id > max ? ciudad.id : max;
    }, 0);
    this.nuevaCiudad = {
      id: maxId + 1,
      descripcion: '',
      id_provincia: 0,
    };
  }

  cargarCiudades(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.getCiudades().subscribe(
        (data) => {
          this.ciudades = data;
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  crearCiudad(): void {
    if (this.nuevaCiudad) {
      const idProvinciaNumero = Number(this.nuevaCiudad.id_provincia);
      this.nuevaCiudad = {
        id: this.nuevaCiudad.id,
        descripcion: this.nuevaCiudad.descripcion,
        id_provincia: idProvinciaNumero,
      };
      this.apiService.createCiudad(this.nuevaCiudad).subscribe(() => {
        this.cargarCiudades()
          .then((result) => {
            this.crearNuevaCiudad();
          })
          .catch((error) => {
            console.log('Error al cargar ciudades', error);
          });
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
