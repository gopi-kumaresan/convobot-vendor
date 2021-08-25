import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-branch-support",
  templateUrl: "./branch-support.component.html",
  styleUrls: ["./branch-support.component.scss"],
})
export class BranchSupportComponent implements OnInit {
  supportModelViewStatus: boolean = false;
  question =
    "I would like to get my money back to the card... Every time i use the application it rejects my order and anyway jio is the only restaurant so i already ordered since it keeps rejecting";
  supportListData: any = [
    {
      name: "Ahmed ",
      question:
        " I would like to get my money back to the card... Every time i use the application it rejects my order and anyway jio is the only restaurant so i already ordered since it keeps rejecting",
      dateTime: "04/04/2019 12:10",
      status: "Open",
      mobileNumber: "33383272",
    },
    {
      name: "Sharifa",
      question: "Order rejected but amount deducted",
      dateTime: "04/04/2019 12:10",
      status: "Open",
      mobileNumber: "56986532",
    },
    {
      name: "shah",
      question: "Where is my order?",
      dateTime: "23/05/2019 12:10",
      status: "Open",
      mobileNumber: "12536545",
    },
    {
      name: "bayan",
      question: "Where is my order i am very hungry ?",
      dateTime: "28/04/2019 12:10",
      status: "Open",
      mobileNumber: "65987845",
    },
    {
      name: "ebtisam",
      question:
        "Hello So can I know the time for me to deliver the food? I did not see the status of the request nor the time",
      dateTime: "30/08/2019 12:10",
      status: "Open",
      mobileNumber: "02365856",
    },
    {
      name: "dalya",
      question: "One hour has passed now!! There is no number to call you !",
      dateTime: "14/04/2019 12:10",
      status: "Open",
      mobileNumber: "34337724",
    },
    {
      name: "Omaima",
      question: "i ordered from jasmis an hour ago but it didnt arrive yet",
      dateTime: "06/06/2019 12:10",
      status: "Open",
      mobileNumber: "34151435 ",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
