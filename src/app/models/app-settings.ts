/**
 * Created by smtandabuzo on 2019/07/02.
 */
import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
    public servicesUrl: string;
    constructor() {
        this.servicesUrl = 'http://localhost:1337';
    }
}
