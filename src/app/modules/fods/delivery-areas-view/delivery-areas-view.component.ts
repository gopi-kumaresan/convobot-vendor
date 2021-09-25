import { I } from "@angular/cdk/keycodes";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-delivery-areas-view",
  templateUrl: "./delivery-areas-view.component.html",
  styleUrls: ["./delivery-areas-view.component.scss"],
})
export class DeliveryAreasViewComponent implements OnInit {
  totalHeight: number = window.innerHeight;
  deliveryModelStatus: boolean = false;

  map: any;

  options: any = {
    lat: 33.5362475,
    lng: -111.9267386,
    zoom: 10,
  };

  paths = [
    {
      latLng: [
        { lat: 52.06723902324181, lng: 5.066095487243647 },
        { lat: 52.077368416035775, lng: 5.576959745056147 },
        { lat: 51.83702263696568, lng: 5.533014432556147 },
        { lat: 51.84720417161532, lng: 5.082574979431147 },
      ],
      open: false,
    },
    {
      latLng: [
        { lat: 51.66017664955071, lng: 5.121027127868647 },
        { lat: 51.276922978903166, lng: 5.104547635681147 },
        { lat: 51.27004989103561, lng: 5.730768338806147 },
        { lat: 51.482637788245285, lng: 5.626398221618647 },
        { lat: 51.595387065776414, lng: 5.725275174743647 },
      ],
      open: false,
    },
    {
      latLng: [
        { lat: 52.09087069850436, lng: 5.818658963806147 },
        { lat: 51.75888768735398, lng: 5.796686307556147 },
        { lat: 51.78268222301472, lng: 6.532770291931147 },
        { lat: 52.08074436962954, lng: 6.565729276306147 },
      ],
      open: false,
    },
  ];

  circleDatas = [
    {
      lat: 52.016557582510494,
      lng: 8.647638455993647,
      open: false,
    },
    {
      lat: 51.6397267767311,
      lng: 8.850885526306147,
      open: false,
    },
    {
      lat: 51.287230682998775,
      lng: 10.075861112243647,
      open: false,
    },
  ];

  managerOptions = {
    drawingControl: true,

    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ["polygon", "circle"],
      // drawingModes: ["circle"],
    },
    polygonOptions: {
      draggable: true,
      editable: true,
      strokeColor: "#5EBA7D",
      fillColor: "#5EBA7D",
    },

    circleOptions: {
      editable: true,
      circleDraggable: true,
      strokeColor: "#5EBA7D",
      fillColor: "#5EBA7D",
    },
    // drawingMode: ["polygon", "circle"],
    drawingMode: "'circle','polygon'",
  };
  previous;

  markers = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: "A",
      draggable: true,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B",
      draggable: false,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: "C",
      draggable: true,
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  clickedMarker(infowindow) {
    console.log("infowindow", infowindow);

    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  clickedPolygon(poly) {
    console.log(poly);
    if (poly.open) {
      poly.open = false;
      poly.open = true;
    } else {
      poly.open = true;
    }
  }

  infoWindowClose(data) {
    console.log("data", data);
    data.open = false;
  }

  testEvents(event) {
    this.map = event;
  }

  polygonCreated(event) {
    console.log("event", event);
    var paths = [];
    event
      .getPaths()
      .getArray()[0]
      .forEach(function (xy, i) {
        // console.log(xy);
        let latLng = {
          lat: xy.lat(),
          lng: xy.lng(),
        };
        console.log("paths", paths);
        paths.push(latLng);
      });

    const bermudaTriangle = new google.maps.Polygon({
      paths: paths,
      strokeColor: "#5EBA7D",
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: "#5EBA7D",
      fillOpacity: 0.35,
      editable: true,
    });
    bermudaTriangle.setMap(this.map);

    console.log("this.map", this.map);

    // this.polygon = event;
    // // console.log("me", this.polygon);
    // // localStorage.setItem("sample_polygon_data", JSON.stringify(this.polygon));

    // this.polygon
    //   .getPaths()
    //   .getArray()[0]
    //   .forEach(function (xy, i) {
    //     // console.log(xy);
    //     let latLng = {
    //       lat: xy.lat(),
    //       lng: xy.lng(),
    //     };
    //     console.log("paths", paths);
    //     paths.push(latLng);
    //   });
    // localStorage.setItem("_ploygonPaths", JSON.stringify(paths));

    // this.addPolygonChangeEvent(this.polygon);
    // // this.getPolygonLatLng(this.polygon);
    // google.maps.event.addListener(
    //   this.polygon,
    //   "coordinates_changed",
    //   function (index, obj) {
    //     // Polygon object: yourPolygon
    //     console.log("coordinates_changed");
    //     console.log("index", index);
    //     console.log("obj", obj);
    //   }
    // );
  }
}
