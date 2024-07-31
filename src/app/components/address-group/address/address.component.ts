import { Component, Host, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { City } from '../../../models/models';
import { AddressGroupComponent } from '../address-group.component';
import { Country } from './../../../models/models';
import { loadCities } from '../../../store/city/city.actions';
import { selectAllCities } from '../../../store/city/city.selectors';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  @Input() addressForm: any;
  cities$: Observable<string[]>;
  countries$: Observable<string[]>;

  constructor(private citiesStore: Store<{ cities: City[] }>) {
    this.citiesStore.dispatch(loadCities({ countryId: 1 }));

    this.cities$ = this.citiesStore.select(selectAllCities).pipe(map(cities => cities?.map(c => c.name))) as Observable<string[]>;

  }

}
