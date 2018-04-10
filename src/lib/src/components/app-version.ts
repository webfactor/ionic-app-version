import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'wf-app-version',
    template: '{{ versionNumber || versionCode || "not available" }}'
})
export class AppVersionComponent {
    versionNumber: string;
    versionCode: string;

    constructor(public platform: Platform, private appVersion: AppVersion) {
        this.platform.ready().then(() => {
            this.appVersion.getVersionNumber().then(versionNumber => {
                this.versionNumber = versionNumber;
            }, () => null);

            this.appVersion.getVersionCode().then(versionCode => {
                this.versionCode = versionCode;
            }, () => null);
        });
    }
}
