import { Marker } from "@agm/core";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TenancyBranchService } from "../../service/tenancy-branch.service";

@Component({
  selector: "app-create-branch",
  templateUrl: "./create-branch.component.html",
  styleUrls: ["./create-branch.component.scss"],
})
export class CreateBranchComponent implements OnInit {
  branchCreateForm!: FormGroup;
  submitted: boolean = false;
  uploadedFiles: any = [];
  markers = [
    {
      lat: 51.673858,
      lng: 7.815982,
      // label: "A",
      draggable: true,
      visible: false,
      opacity: 0.7,
    },
  ];

  countryListDatas: Array<object>;
  stateListData: Array<object>;
  cityListData: Array<object>;

  constructor(
    private formBuilder: FormBuilder,
    private tenancyBranchService: TenancyBranchService
  ) {
    this.tenancyBranchService.countryListAPI().subscribe((res) => {
      console.log("countryListAPI", res);
      this.countryListDatas = res.data;
    });
  }

  ngOnInit(): void {
    this.branchCreateForm = this.formBuilder.group({
      branchName: ["", Validators.required],

      description: ["", [Validators.required]],
      coverImage: ["", [Validators.required]],
      logo: ["", Validators.required],
      mobileNumber: ["", [Validators.required]],
      countryName: ["", Validators.required],
      stateName: ["", Validators.required],
      cityName: ["", Validators.required],
      pinCode: ["", Validators.required],
      orderType: ["", Validators.required],
      riderSupport: ["", Validators.required],
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    //console.log(this.clickedMarker);
    this.markers[index].visible = false;
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.branchCreateForm?.controls;
  }

  branchCreateion() {
    this.submitted = true;
    console.log("branchCreateForm", this.branchCreateForm.value);
  }

  countryWiseStateFun(countryId: number) {
    this.tenancyBranchService
      .countryWiseStateList(countryId)
      .subscribe((res) => {
        console.log("countryWiseStateList", res);
        this.stateListData = res.data;
      });
  }

  stateWiseCityFun(stateId: number) {
    this.tenancyBranchService.stateWiseCityList(stateId).subscribe((res) => {
      console.log("stateWiseCityList", res);
      this.cityListData = res.data;
    });
  }

  addressEvent(event: any, type: string) {
    console.log("event", event);
    console.log("type", type);

    if (type == "country") {
      this.countryWiseStateFun(event.value.country_id);
    } else {
      this.stateWiseCityFun(event.value.state_id);
    }
  }
}
