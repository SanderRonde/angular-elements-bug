import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [AppComponent, FooComponent, BarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {
    this.addCustomElement(FooComponent, 'custom-foo');
    this.addCustomElement(BarComponent, 'custom-bar');
  }

  private addCustomElement(type: any, selector: string) {
    const customElement = createCustomElement(type, {
      injector: this.injector,
    });
    customElements.define(selector, customElement);
  }
}
