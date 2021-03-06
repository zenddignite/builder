import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Service
import { EmailService } from 'app/shared/email/email.service';

// Routing
import { AppRoutingModule } from 'app/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolsNavComponent } from './components/tools-nav/tools-nav.component';
import { LayoutToolsComponent } from './components/layout-tools/layout-tools.component';
import { ContentToolsComponent } from './components/content-tools/content-tools.component';
import { SettingsToolsComponent } from './components/settings-tools/settings-tools.component';
import { NumberComponentComponent } from './components/number-component/number-component.component';
import { SizeComponent } from './components/size/size.component';
import { AlignmentComponent } from './components/alignment/alignment.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { EmailComponent } from './components/email/email.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { TypeOfElementComponent } from './components/type-of-element/type-of-element.component';
import { InputComponent } from './components/input/input.component';  
import { LayoutService } from 'app/shared/layout/layout.service';
import { ContentService } from 'app/shared/content/content.service';

/**
 * Declarations - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
 * Exports - the subset of declarations that should be visible and usable in the component templates of other modules.
 * Imports - other modules whose exported classes are needed by component templates declared in this module.
 * Providers - creators of services that this module contributes to the global collection of services; they become accessible 
 * in all parts of the app.
 * Bootstrap - the main application view, called the root component, that hosts all other app views. 
 * Only the root module should set this bootstrap property.
 */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolsNavComponent,
    LayoutToolsComponent,
    ContentToolsComponent,
    SettingsToolsComponent,
    NumberComponentComponent,
    SizeComponent,
    AlignmentComponent,
    SpacingComponent,
    EmailComponent,
    ContentComponentComponent,
    TypeOfElementComponent,
    InputComponent
  ],
  exports: [],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [EmailService, LayoutService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
