import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TranslateModule} from "ng2-translate/ng2-translate";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot(),  
  RouterModule.forRoot([
      { path: 'test', component: TestComponent },
      { path: '', component: AppComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
    ],
    declarations: [AppComponent,
    TestComponent,
    PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
