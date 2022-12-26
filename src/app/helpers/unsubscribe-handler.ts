import { Injectable, OnDestroy } from "@angular/core";
//import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";


@Injectable()
export abstract class UnsubscribeHandelr implements OnDestroy{
    protected Unsubscribe$ : Subject<void> = new Subject();
    constructor() {}
    
    ngOnDestroy(): void {
        this.Unsubscribe$.next();
        this.Unsubscribe$.complete();
    }
}