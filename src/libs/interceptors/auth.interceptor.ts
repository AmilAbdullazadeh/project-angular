import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url === "https://udemy-nestjs-course.herokuapp.com/api/login") {
      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.userService.getToken()}` } // API tarafında CDN keyleri eksik
        // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVzIjpbeyJuYW1lIjoiYWRtaW4ifSx7Im5hbWUiOiJjYWxsLWNlbnRlciJ9LHsibmFtZSI6InJlcGFpcm1hbiJ9XSwiZ3JvdXBzIjpbeyJuYW1lIjoibWFuYWdlciJ9XSwiX2lkIjoiNWUxYWYzNWE5OWJhNGUyMDA3YjE1NjQxIiwibmFtZSI6ImFobWV0Iiwic3VybmFtZSI6ImF5ZMSxbiIsImVtYWlsIjoiYWhtZXR0dGF5ZGluQHlhbmRleC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRibDdVMnp2S093eDM0UW5HM2piMUJlMHVNYlVSZHZWNWt4NmFCOGVkYXRCZ3MzT1lwTEZKTyIsImJpcnRoRGF5IjoiMTk5My0wNC0yNFQyMTowMDowMC4wMDBaIiwiX192IjowfSwiaWF0IjoxNTkzOTQzNDY5fQ.AhzLqdgn3GDKKeDNfjZuBYTHjB9DAur8ZPAbXQ31NfY`
      });
      return next.handle(request);
    }
  }
}
