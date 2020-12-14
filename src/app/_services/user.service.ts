import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { of } from "rxjs";

/**
 * Service to Handle Place Appointment POST, GET, DELETE, PUT requests.
 * Data : Object -->> json-server
 */

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class UserService {
  public static BaseUrl = "http://localhost:6565/";

  constructor(private http: Http) {}

  /**
   * @param data
   * data : Object -->> json-server
   * POST /allfriends
   */
  postfitnessdata(data) {
    try {
      return this.http
        .post(UserService.BaseUrl + "allfriends", data, httpOptions)
        .pipe(map((response: Response) => response.json()));
    } catch (exception) {
      return of();
    }
  }

  /**
   * GET /allfriends
   */
  getfitnessdata() {
    try {
      return this.http
        .get(UserService.BaseUrl + "allfriends", httpOptions)
        .pipe(map((response: Response) => response.json()));
    } catch (exception) {
      console.log(exception);
      return of([]);
    }
  }

  /**
   *
   * @param id :integer
   * GET /allfriends/id
   */
  getfitnessdatabyid(id) {
    try {
      return this.http
        .get(UserService.BaseUrl + "allfriends" + `/${id}`, httpOptions)
        .pipe(map((response: Response) => response.json()));
    } catch (exception) {
      return of({});
    }
  }

  /**
   *
   * @param id :integer
   * @param data :Object
   * PUT /allfriends/id
   */

  editfitnessdata(id, data) {
    try {
      return this.http
        .put(UserService.BaseUrl + "allfriends" + `/${id}`, data, httpOptions)
        .pipe(map((response: Response) => response.json()));
    } catch (exception) {
      return of(data);
    }
  }

  /**
   *
   * @param id :integer
   * DELETE /allfriends/id
   */

  deletefitnessdata(id) {
    try {
      return this.http
        .delete(UserService.BaseUrl + "allfriends" + `/${id}`, httpOptions)
        .pipe(map((response: Response) => response.json()));
    } catch (exception) {
      return of(id);
    }
  }
}
