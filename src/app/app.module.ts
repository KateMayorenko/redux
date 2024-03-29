import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from './content/modal/modal/modal.component';
import {FormsModule} from "@angular/forms";
import {ActionReducer, MetaReducer, StoreModule} from "@ngrx/store";
import {clickCountReducer} from "./content/state/click-count/click-count.reducer";
import {ClickCountEffects} from "./content/state/click-count/click-count.effects";
import {EffectsModule} from "@ngrx/effects";
import {ListComponent} from './list/list.component';
import {InputFieldComponent} from './list/input-field/input-field.component';
import {listReducer} from "./list/state/list/list.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {countdownReducer} from "./content/state/countdown/countdown.reducer";
import {CountdownEffects} from "./content/state/countdown/countdown.effects";
import {userReducer} from "./header/state/user/user.reducer";
import {AppRoutingModule} from "./app-routing.module";
import {localStorageSync} from "ngrx-store-localstorage";
import {FormattedTimePipe} from "./content/pipes/format-time.pipe";
import {PushPipe} from "@ngrx/component";

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['clickCount', 'list'], rehydrate: true })(reducer);
}


const allMetaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    ModalComponent,
    ListComponent,
    InputFieldComponent,
    FormattedTimePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      clickCount: clickCountReducer,
      user: userReducer,
      list: listReducer,
      countdown: countdownReducer
    }, {metaReducers: allMetaReducers}),
    EffectsModule.forRoot([ClickCountEffects, CountdownEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      name: 'redux-pomodoro',
    }),
    AppRoutingModule,
    PushPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
