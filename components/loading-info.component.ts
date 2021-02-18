import { Component, OnInit, Input } from '@angular/core';
import { Observable  } from 'rxjs';

const url = require('file!./loading.gif');

import { LoadingInfoState } from './loading-info-state';
import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('loading info component', Level.__NOTHING);

interface LoadingFn {
    (): any;
}

@Component({
    selector: 'loading-info',
    template: require('./loading-info.component.html'),
    styles: [require('./loading-info.component.scss')]
})
export class LoadingInfoComponent implements OnInit {
    private static instances = {};

    @Input() id: string;
    state: LoadingInfoState = LoadingInfoState.NORMAL;


    loadingInfoState = LoadingInfoState;


    private loaderImgUlr = url;
    static startLoading(id: string) {
        log.i('startLoading', id);
        // return () => {
        setTimeout(() => {
            let d: LoadingInfoComponent = LoadingInfoComponent.instances[id];
            if (d !== undefined) d.state = LoadingInfoState.LOADING;
        });
        // };
    }


    static stopLoading(id: string) {
        log.i('stopLoading', id);
        // return () => {
        let d: LoadingInfoComponent = LoadingInfoComponent.instances[id];
        d.state = LoadingInfoState.NORMAL;
        // };
    }

    static setOn(id: string, o: Observable<any>) {
        log.i('setOn', id);
        log.i('setOn instances', LoadingInfoComponent.instances);
        let d: LoadingInfoComponent = LoadingInfoComponent.instances[id];
        log.i('setOn actual instance', LoadingInfoComponent.instances[id]);
        if (d === undefined) {

            for (let p in LoadingInfoComponent.instances) {
                if (p) {
                    log.d(`object property: ${p}`, LoadingInfoComponent.instances[p]);
                }
            }

            console.error(`LoadinInfoCmp, setOn: '${id}' is undefinded`);
            return;
        }
        d.state = LoadingInfoState.LOADING;
        o.subscribe(() => {
            d.state = LoadingInfoState.NORMAL;
        }, () => {
            d.state = LoadingInfoState.NORMAL;
        });
    }



    constructor() {

    }

    ngOnInit() {
        if (!this.id) this.state = LoadingInfoState.LOADING;
        LoadingInfoComponent.instances[this.id] = this;
    }

}
