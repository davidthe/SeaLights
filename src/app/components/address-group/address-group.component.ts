import { AfterViewInit, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Country } from '../../models/models';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressGroupComponent),
      multi: true
    }
  ]
})
export class AddressGroupComponent implements ControlValueAccessor, AfterViewInit {
  addresses: FormArray;
  value: Address[];

  onChange = (value: Address[]) => { };
  onTouched = () => { };

  constructor(private fb: FormBuilder) {
    this.addresses = this.fb.array([this.createAddressGroup()])
  }

  ngAfterViewInit(): void {
    this.addresses.valueChanges.subscribe(addresses => {
      this.value = addresses
      this.onChange(this.value);
      this.onTouched();
    });
  }

  writeValue(value: Address[]): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      street: [''],
      city: [''],
      country: ['']
    });
  }

  addAddress() {
    this.addresses.push(this.createAddressGroup());
  }

  removeAddress(index: number) {
    if (this.addresses.length > 1) {
      this.addresses.removeAt(index);
    }
  }
}
