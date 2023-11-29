import { Component,ElementRef,NgZone,ViewChild, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
declare var google: any;



export interface Viaje{
  id: number,
  hora: string,
  asientos: number,
  destino: string,
  precio: number
}

@Component({
  selector: 'app-homechofer',
  templateUrl: './homechofer.page.html',
  styleUrls: ['./homechofer.page.scss'],
})
export class HomechoferPage{
  @ViewChild('map') mapElement: ElementRef | undefined;
  public map: any;
  public start: any = "Duoc UC: Sede Melipilla - Serrano, Melipilla, Chile";
  public latitude: any;
  public longitude: any;
  public directionsService: any;
  
  public directionsDisplay: any;
  public autocompleteItems: any



  toAdd:Viaje={
    id:0,
    asientos:0,
    precio:0,
    hora:"",
    destino: "Pomaire"
  }

  async crearViaje(){
    let viajes = await this.storage.get("viajes") || []
    this.toAdd.id= viajes.length + 1
    viajes.push(this.toAdd)
    this.storage.set("viajes", viajes)
    console.log(viajes)
  }


  constructor(private platform:Platform,
     private zone:NgZone,
      private alertController: AlertController,
      private storage: Storage) { }

      
  async ngOnInit() {
    await this.storage.create();
  }

  

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.initMap()
    })
  }

  initMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    let mapOptions = {
      
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
      destination: this.toAdd.destino,
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
    if (this.toAdd.destino == '') {
      this.autocompleteItems = [];
      return;
    }
    GoogleAutocomplete!.getPlacePredictions({ input: this.toAdd.destino },
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
    this.toAdd.destino = item.description
    this.autocompleteItems = []
    this.initMap()
  }

  async presentAlert(){
    const alert=await this.alertController.create({
      header: 'Creando Viaje...',
      message:'Te notificaremos las solicitudes de viaje',
      buttons: ['Ok'],
    });
    await alert.present()
  }


}

