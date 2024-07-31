import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../../models/models';
import { loadUsers } from '../../store/user/user.actions';
import { selectAllUsers } from '../../store/user/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<Person[]>;
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = ['id', 'name', 'birthdate', 'addressesCount'];

  constructor(private store: Store<{ users: Person[] }>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectAllUsers);
    this.users$.subscribe(users => {
      console.log(users)
      this.dataSource = new MatTableDataSource(users);

    });
  }

  navigateToAddUser() {
    this.router.navigate(['/add-user']);
  }
}
