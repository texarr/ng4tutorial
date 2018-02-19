import {Injectable} from "@angular/core";

@Injectable()
export class LogService {

  logger(log: string){
    console.log(log);
  }
}
