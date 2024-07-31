import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { City } from "../../../models/models";
import { addCity, loadCities } from "../../../store/city/city.actions";
import { selectAllCities } from "../../../store/city/city.selectors";
import { loadCountries } from "../../../store/country/country.actions";
import { selectAllCountries } from "../../../store/country/country.selectors";
import { Country } from "./../../../models/models";
import { AddCityDialogComponent } from "./add-city-dialog/add-city-dialog.component";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrl: "./address.component.scss",
})
export class AddressComponent {
  @Input() addressForm: any;
  cities$: Observable<string[]>;
  countries$: Observable<string[]>;
  selectedCountry: string = "";

  constructor(
    public dialog: MatDialog,
    private citiesStore: Store<{ cities: City[] }>,
    private countriesStore: Store<{ countries: Country[] }>,
  ) {
    this.countriesStore.dispatch(loadCountries());
    this.countries$ = this.countriesStore
      .select(selectAllCountries)
      .pipe(map((countries) => countries?.map((c) => c.name))) as Observable<
      string[]
    >;
  }

  setReleventCities(value: any) {
    this.selectedCountry = value;
    this.updateReleventCities();
  }

  addCityToSelectedCountry() {
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      width: "250px",
      data: { country: this.selectedCountry },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.countriesStore
          .select(selectAllCountries)
          .subscribe((countries) => {
            this.citiesStore.dispatch(
              addCity({
                city: {
                  countryId: countries.filter(
                    (c) => c.name !== this.selectedCountry,
                  )[0]?.id,
                  id: Math.random(),
                  name: result,
                },
              }),
            );
          });

        this.updateReleventCities();
      }
    });
  }

  private updateReleventCities() {
    this.countriesStore.select(selectAllCountries).subscribe((countries) => {
      this.citiesStore.dispatch(
        loadCities({
          countryId:
            countries.filter((c) => c.name !== this.selectedCountry)[0]?.id ??
            -1,
        }),
      );
      this.cities$ = this.citiesStore
        .select(selectAllCities)
        .pipe(map((cities) => cities?.map((c) => c.name))) as Observable<
        string[]
      >;
    });
  }
}
