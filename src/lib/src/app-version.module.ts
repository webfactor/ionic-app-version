import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';

import { AppVersionComponent } from './app-version.module';

export * from './components/app-version';

@NgModule({
    imports: [CommonModule],
    declarations: [AppVersionComponent],
    exports: [AppVersionComponent]
})
export class AppVersionModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppVersionModule,
            providers: [AppVersion]
        };
    }
}
