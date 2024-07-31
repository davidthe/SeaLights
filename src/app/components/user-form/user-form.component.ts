import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City, Country, Person } from '../../models/models';
import { addUser } from '../../store/user/user.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;
  countries$: Observable<Country[]>;
  cities$: Observable<City[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      addresses: FormArray
    });
    // this.userForm.valueChanges.subscribe(console.log)
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: Person = this.userForm.value;
      this.store.dispatch(addUser({ user }));
      // send requests on the server to create that user (no updateding on this server)
    }
  }
}
