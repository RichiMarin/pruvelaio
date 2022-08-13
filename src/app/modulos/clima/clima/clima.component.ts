import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/2640/2640490.png';
  ciudad='';
  temperatura = 0;
  humedad = 0;
  clima = 0;
  query = false;
  loading = false;
  mostrarError = false;
  
  constructor(private _climaService: ClimaService ) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    },error => {
      this.loading = false;
      this.error();
    })

  }

  error(){
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000 );
  }

}
