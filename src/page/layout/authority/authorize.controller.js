import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operator/map';

/* eslint-disable angular/document-service */
export class AuthorizeController {
  /* @ngInject */
  constructor() {
    this.trigger = document.querySelector('.btn-danger');

    this.stream$ = Observable::fromEvent(this.trigger, 'click')::map(event => {
      return event.target;
    });
  }

  connectStreamSwitcher() {
    this.stream$.subscribe((transfer) => {
      console.log(transfer);
    });
  }
}

AuthorizeController.ng_hmr_identity ='layout_flow_authorize_controller_js';