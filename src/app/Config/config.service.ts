import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import configFile from '../../assets/config.json';
import { IRequest } from '../types/IRequest';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  PostLoginUser(loginCredientials: IRequest) {
    return this.http.post(
      configFile.API_URL + configFile.POST_LOGIN,
      loginCredientials
    );
  }

  PostRegisterUser(registerCredientials: IRequest) {
    return this.http.post(
      configFile.API_URL + configFile.POST_REGISTER,
      registerCredientials
    );
  }
}
