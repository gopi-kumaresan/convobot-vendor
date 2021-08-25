import { Component, OnInit } from "@angular/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

@Component({
  selector: "app-menuslot-tab",
  templateUrl: "./menuslot-tab.component.html",
  styleUrls: ["./menuslot-tab.component.scss"],
})
export class MenuslotTabComponent implements OnInit {
  addTimeslotModelStatus: boolean = false;

  events: any[] = [
    {
      id: 1,
      title: "All Day Event",
      start: "2017-02-01",
    },
    {
      id: 2,
      title: "Long Event",
      start: "2017-02-07",
      end: "2017-02-10",
    },
    {
      id: 3,
      title: "Repeating Event",
      start: "2017-02-09T16:00:00",
    },
  ];

  options: any;

  constructor() {}

  ngOnInit(): void {
    // this.options = {
    //   plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    //   defaultDate: "2017-02-01",
    //   header: {
    //     left: "prev,next",
    //     center: "title",
    //     right: "dayGridMonth,timeGridWeek,timeGridDay",
    //   },
    // };
  }
}
