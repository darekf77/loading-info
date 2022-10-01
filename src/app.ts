//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-loading-info',
      template: 'hello from loading-info'
    })
    export class LoadingInfoComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [LoadingInfoComponent],
      declarations: [LoadingInfoComponent],
      providers: [],
    })
    export class LoadingInfoModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion