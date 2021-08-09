import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { Observable } from 'rxjs';
import { User } from '../../user/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  configUserUrl: 'http://localhost:3000/users'


  constructor(
    private http: HttpClient,
    configServ: ConfigService
  ) { }
}
