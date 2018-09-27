import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var ol: any;

@Component({
  selector: 'incident-location',
  templateUrl: './incident-location.component.html',
  styleUrls: ['./incident-location.component.css']
})
export class IncidentLocationComponent implements OnInit {

  position: any;
  map: any;

  constructor(private router: Router) { }

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.position = position,
            console.log(position)
          this.createMap(position.coords.latitude, position.coords.longitude);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };
  }

  createMap(lat: number, lon: number) {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 12
      })
    });
  }

  cancel() {
    this.router.navigate(['home']);
  }

  next() {
    this.router.navigate(['incident', 'details']);
  }

}
