import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs-compat/Observable";
import { EndPoints } from "src/app/_metronic/core/end-points/EndPoints";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TenancyBranchService {
  constructor(private http: HttpClient) {}

  countryListAPI(): Observable<any> {
    return this.http.get(
      // "https://testcbaccountsbl.jignov.com/index.php/api/v1/country"
      `${environment.laraval_base_url}${EndPoints.country_list_api}`
    );
  }

  countryWiseStateList(request: number): Observable<any> {
    return this.http.get(
      `${environment.laraval_base_url}${EndPoints.state_list_api}/${request}`
    );
  }

  stateWiseCityList(request: number): Observable<any> {
    return this.http.get(
      `${environment.laraval_base_url}${EndPoints.city_list_api}/${request}`
    );
  }
}
