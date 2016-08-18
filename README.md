## Simple loading info component for Angular2 apps ##


Import ot

import { LoadingInfoComponent, LoadingInfoState } from 'loading-info/loading-info';

![with itput](/screen.png)

Include it

    ...
    directives: [LoadingInfoComponent]
    ...

Use it

//inside html

    <loading-info [id]="myID"></loading-info>

from component class

    LoadingInfoComponent.startLoading( 'myID' );
    LoadingInfoComponent.stopLoading(  'myID' );

or set on subscriber from rxjs

    let sub = model.subscribe( data => console.log(data)  )
    LoadingInfoComponent.setOn( 'myID' , sub );

