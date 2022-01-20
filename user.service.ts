import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: Any): Observable<any> {
    return this.http.post("http://localhost:4200/login", user);
  }
  registro(user: Any): Observable<any> {
    return this.http.post("http://localhost:4200/registro", user);
  }
 
}
