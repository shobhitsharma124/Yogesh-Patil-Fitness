import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { of } from "rxjs/internal/observable/of";
import { map } from "rxjs/internal/operators/map";

/**
 * Service to Handle Contacts POST requests.
 */

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class ContactService {
  public static BaseUrl = "http://localhost:6565/";

  constructor(private http: HttpClient) {}

  /**
   *
   * @param data :Object
   * POST /contacts
   */
  postcontactdata(data) {
    try {
      return this.http
        .post(ContactService.BaseUrl + "contacts", data)
        .pipe(map((response: Response) => response));
    } catch (exception) {
      return of();
    }
  }
}
