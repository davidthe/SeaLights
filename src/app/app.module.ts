import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressGroupComponent } from './components/address-group/address-group.component';
import { AddressComponent } from './components/address-group/address/address.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CityService } from './services/city.service';
import { UserService } from './services/user.service';
import { CityEffects } from './store/city/city.effects';
import { cityReducer } from './store/city/city.reducer';
import { CountryEffects } from './store/country/country.effects';
import { countryReducer } from './store/country/country.reducer';
import { UserEffects } from './store/user/user.effects';
import { userReducer } from './store/user/user.reducer';
import { AddCityDialogComponent } from './components/address-group/address/add-city-dialog/add-city-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressGroupComponent,
    UserFormComponent,
    UserListComponent,
    AddressComponent,
    AddCityDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users: userReducer,
      countries: countryReducer,
      cities: cityReducer
    }),
    EffectsModule.forRoot([UserEffects, CountryEffects, CityEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [provideHttpClient(), UserService, CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
