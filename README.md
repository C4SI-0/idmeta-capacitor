

# idmeta-capacitor

`idmeta-capacitor` is a Capacitor Plugin integrated with the Idmeta SDK, providing seamless integration and functionality for your Capcitor/Ionic Application.
"Tested with ioninc/angular application"

## Install

```bash
npm install https://github.com/C4SI-0/idmeta-capacitor.git
npx cap sync
```

## Android Setup

```js

To configure your Android project to use this library, add the following lines to your android/build.gradle

allprojects {
    repositories {
        google()
        mavenCentral()
        String storageUrl = "https://storage.googleapis.com"
        maven {
            url uri("../../node_modules/idmeta-capacitor/build/host/outputs/repo")
        }
        maven {
            url "$storageUrl/download.flutter.io"
        }
    }
}
```


## API

<docgen-index>

* [`startIdmetaFlow(...)`](#startidmetaflow)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startIdmetaFlow(...)

```typescript
startIdmetaFlow(options: { flowId: string; userToken: string; }) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ flowId: string; userToken: string; }</code> |

--------------------

</docgen-api>


## Example Usage with Ionic

```html
<!-- tab1.page.html -->

<ion-header>
  <ion-toolbar>
    <ion-title>
      Tab 1
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-button (click)="startIdmetaFlow()">Start ID Meta Flow</ion-button>
</ion-content>

```
```ts

//tab1.page.html


import { Component } from '@angular/core';
import { IdMetaCapacitor } from 'idmeta-capacitor'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  async startIdmetaFlow() {
    try {
      // Replace with appropriate values for flowId and userToken
      await IdMetaCapacitor.startIdmetaFlow({ flowId: 'flowID', userToken: 'tokenID' });
      console.log('Idmeta flow started.');
    } catch (error) {
      console.error('Error starting Idmeta flow:', error);
    }
  }
}

```