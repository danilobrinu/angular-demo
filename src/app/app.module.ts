import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FilterTodosPipe } from "./filter-todos.pipe";

@NgModule({
  declarations: [AppComponent, FilterTodosPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
