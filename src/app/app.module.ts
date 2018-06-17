import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { FooterComponent } from './components/footer.component';
import { StorageService } from './services/storage.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StorageService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
