import { Component,ElementRef,NgZone,ViewChild, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

declare var google: any;

export interface Pasajero{
  nombrePas:string,
  celular:string,
  carrera:string
}


@Component({
  selector: 'app-confirmar-viaje-p',
  templateUrl: './confirmar-viaje-p.page.html',
  styleUrls: ['./confirmar-viaje-p.page.scss'],
})
export class ConfirmarViajePPage {

  agregar:Pasajero={ 
    nombrePas:"",
    celular:"",
    carrera:""
   }

  constructor(private platform:Platform, private zone:NgZone, private alertController: AlertController, private storage: Storage) { }

  async ngOnInit(){
  
    await this.storage.create(); 
  }

  async guardarPas(){
    let pasajeros = await this.storage.get("pasajeros") || []; 
    
    pasajeros.push(this.agregar)
    this.storage.set("pasajeros", pasajeros)
    console.log(pasajeros)
  }


  
  @ViewChild('map') mapElement: ElementRef | undefined;
  public map: any;
  public start: any = "Duoc UC: Sede Melipilla - Serrano, Melipilla, Chile";
  public end: any = "Melipilla";
  public latitude: any;
  public longitude: any;
  public directionsService: any;
  public directionsDisplay: any;
  public autocompleteItems: any



  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.initMap()
    })
  }

  initMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
      
    };
    this.map = new google.maps.Map(this.mapElement!.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response: any, status: string) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  updateSearchResults() {
    let GoogleAutocomplete = new google.maps.places.AutocompleteService();
    if (this.end == '') {
      this.autocompleteItems = [];
      return;
    }
    GoogleAutocomplete!.getPlacePredictions({ input: this.end },
      (predictions: any, status: any) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction: any) => {
            this.autocompleteItems!.push(prediction);
          });
        });
      });
  }
  selectSearchResult(item: any) {
    this.end = item.description
    this.autocompleteItems = []
    this.initMap()
  }

  async presentAlert(){
    const alert=await this.alertController.create({
      header: 'Solicitando Viaje...',
      message:'Te notificaremos cuando el chofer acepte tu solicitud',
      buttons: ['Ok'],
    });
    await alert.present()
  }
}
