import { Injectable } from "@angular/core";
  let configKeyname = "config"
@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {
  }

  getCOnfigData(): any{
    return localStorage.getItem(configKeyname);
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };
    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(configKeyname, JSON.stringify(config));
  }
}
