import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatIconRegistry,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatDatepicker,
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { WaterBodiesComponent } from './water-bodies/water-bodies.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodeTypesComponent } from './node-types/node-types.component';
import { SensorsComponent } from './sensors/sensors.component';
import { NodeDataComponent } from './node-data/node-data.component';
import { IcampffComponent } from './icampff/icampff.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeedComponent } from './seed/seed.component';
import { GetNodeDataFormComponent } from './forms/get-node-data-form/get-node-data-form.component';
import { GetLatLngComponent } from './get-lat-lng/get-lat-lng.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { WaterBodyNodesComponent } from './water-body-nodes/water-body-nodes.component';
import { EditWaterBodyDialogComponent } from './edit-water-body-dialog/edit-water-body-dialog.component';
import { EditWaterBodyPageComponent } from './edit-water-body-page/edit-water-body-page.component';
import { FileUploadComponent } from './fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OverviewComponent,
    HeaderComponent,
    WaterBodiesComponent,
    NodesComponent,
    NodeTypesComponent,
    SensorsComponent,
    NodeDataComponent,
    IcampffComponent,
    NotFoundComponent,
    SeedComponent,
    GetNodeDataFormComponent,
    GetLatLngComponent,
    WaterBodyNodesComponent,
    EditWaterBodyDialogComponent,
    EditWaterBodyPageComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot()
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/add.svg')
    );
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/close.svg')
    );
    iconRegistry.addSvgIcon(
      'exit_to_app',
      sanitizer.bypassSecurityTrustResourceUrl('assets/exit_to_app.svg')
    );
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg')
    );
    iconRegistry.addSvgIcon(
      'how_to_vote',
      sanitizer.bypassSecurityTrustResourceUrl('assets/how_to_vote.svg')
    );
    iconRegistry.addSvgIcon(
      'more_horiz',
      sanitizer.bypassSecurityTrustResourceUrl('assets/more_horiz.svg')
    );
    iconRegistry.addSvgIcon(
      'navigate_before',
      sanitizer.bypassSecurityTrustResourceUrl('assets/navigate_before.svg')
    );
    iconRegistry.addSvgIcon(
      'navigate_next',
      sanitizer.bypassSecurityTrustResourceUrl('assets/navigate_next.svg')
    );
    iconRegistry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('assets/people.svg')
    );
    iconRegistry.addSvgIcon(
      'refresh',
      sanitizer.bypassSecurityTrustResourceUrl('assets/refresh.svg')
    );
    iconRegistry.addSvgIcon(
      'view_quilt',
      sanitizer.bypassSecurityTrustResourceUrl('assets/view_quilt.svg')
    );
    iconRegistry.addSvgIcon(
      'remove',
      sanitizer.bypassSecurityTrustResourceUrl('assets/remove.svg')
    );
    iconRegistry.addSvgIcon(
      'center_focus_strong',
      sanitizer.bypassSecurityTrustResourceUrl('assets/center_focus_strong.svg')
    );
    iconRegistry.addSvgIcon(
      'call_received',
      sanitizer.bypassSecurityTrustResourceUrl('assets/call_received.svg')
    );
    iconRegistry.addSvgIcon(
      'call_made',
      sanitizer.bypassSecurityTrustResourceUrl('assets/call_made.svg')
    );
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/edit.svg')
    );
    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/check.svg')
    );
    iconRegistry.addSvgIcon(
      'timeline',
      sanitizer.bypassSecurityTrustResourceUrl('assets/timeline.svg')
    );
    iconRegistry.addSvgIcon(
      'save_alt',
      sanitizer.bypassSecurityTrustResourceUrl('assets/save_alt.svg')
    );
    iconRegistry.addSvgIcon(
      'help',
      sanitizer.bypassSecurityTrustResourceUrl('assets/help.svg')
    );
    iconRegistry.addSvgIcon(
      'sensor',
      sanitizer.bypassSecurityTrustResourceUrl('assets/sensor.svg')
    );
    iconRegistry.addSvgIcon(
      'data',
      sanitizer.bypassSecurityTrustResourceUrl('assets/data.svg')
    );
    iconRegistry.addSvgIcon(
      'node',
      sanitizer.bypassSecurityTrustResourceUrl('assets/node.svg')
    );
    iconRegistry.addSvgIcon(
      'cache',
      sanitizer.bypassSecurityTrustResourceUrl('assets/cache.svg')
    );
  }
}
