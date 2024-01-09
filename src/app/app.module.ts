import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from './content/modal/modal/modal.component';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {contentReducer} from "./content/state/content/content.reducer";
import {clickCountReducer} from "./content/state/click-count/click-count.reducer";
import {modalReducer} from "./content/state/modal/modal.reducer";
import {ClickCountEffects} from "./content/state/click-count/click-count.effects";
import {EffectsModule} from "@ngrx/effects";
import { ListComponent } from './list/list.component';
import { InputFieldComponent } from './list/input-field/input-field.component';
import {listReducer} from "./list/state/list/list.reducer";
import {ListEffects} from "./list/state/list/list.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    ModalComponent,
    ListComponent,
    InputFieldComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({content: contentReducer, clickCount: clickCountReducer, modal: modalReducer, list: listReducer}),
    EffectsModule.forRoot([ClickCountEffects, ListEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      name: 'redux-pomodoro',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
