import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'wf-app-version',
    template: '{{ longVersionNumber || versionNumber || versionCode || "not available" }}'
})
export class AppVersionComponent {
    versionNumber: string;
    versionCode: string;
    longVersionNumber: string;

    constructor(public platform: Platform, private appVersion: AppVersion) {
        this.platform.ready().then(() => {
            this.appVersion.getVersionNumber().then(versionNumber => {
                this.versionNumber = versionNumber;
            }, () => null);

            this.appVersion.getVersionCode().then(versionCode => {
                this.versionCode = versionCode;
                this.setLongVersionNumber();
            }, () => null);
        });
    }


    setLongVersionNumber() {
        var major = this.versionCode.slice(0, -6),
            minor = this.versionCode.slice(-6, -4),
            patch = this.versionCode.slice(-4, -2),
            whatever = this.versionCode.slice(-2);

        var versionNumber = parseInt(major) + '.'
            + parseInt(minor) + '.'
            + parseInt(patch) + '.'
            + parseInt(whatever);

        if (versionNumber.indexOf('NaN') == -1)
            this.longVersionNumber = versionNumber;
    }
}
