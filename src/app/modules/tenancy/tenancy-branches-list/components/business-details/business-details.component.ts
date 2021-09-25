import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TenancyBranchService } from "../../service/tenancy-branch.service";

@Component({
  selector: "app-business-details",
  templateUrl: "./business-details.component.html",
  styleUrls: ["./business-details.component.scss"],
})
export class BusinessDetailsComponent implements OnInit {
  businessForm!: FormGroup;
  submitted: boolean = false;

  countryListDatas: Array<object>;
  stateListData: Array<object>;
  cityListData: Array<object>;

  uploadedFiles: any = [];
  constructor(
    private tenancyBranchService: TenancyBranchService,
    private formBuilder: FormBuilder
  ) {
    this.tenancyBranchService.countryListAPI().subscribe((res) => {
      console.log("countryListAPI", res);
      this.countryListDatas = res.data;
    });
  }

  ngOnInit(): void {
    this.businessForm = this.formBuilder.group({
      businessName: ["", Validators.required],

      brandName: ["", [Validators.required]],
      countryName: ["", [Validators.required]],
      stateName: ["", Validators.required],
      cityName: ["", [Validators.required]],
      pincode: ["", Validators.required],
      address1: ["", Validators.required],
      address2: ["", Validators.required],
      cin: ["", Validators.required],
      taxation: ["", Validators.required],
      taxName: ["", Validators.required],
      taxPercentage: ["", Validators.required],
      addDocument: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.businessForm?.controls;
  }

  businessDetailsSumbit() {
    this.submitted = true;
    console.log("businessForm", this.businessForm.value);
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
