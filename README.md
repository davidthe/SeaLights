# SeaLights Exercise

This project is an implementation of a frontend application using Angular, NgRx store, and reactive forms. The project includes two main views: a form to add a new user and a list to display added users.

- [X] Create User
- [X] Add / Remove an Address
- [X] Address Requirements
- [X] Display Users
- [X] Display List of Added Users
- [X] Integrate Development server

## Project Structure

1. **User List Component:**
   * Displays the list of added users with columns for ID, name, birthdate, and address count.
   * Includes a button to navigate to the user form.
2. **User Form Component:**
   * Form to add a new user with required fields (User Name, Address Name, Street).
   * Includes functionality to add and remove addresses.
   * Uses reactive forms for validation and form control.
   * Address is created as a separate component implementing Control Value Accessor.
   * Save address button is disabled until the form is valid.
   * When adding a new city, the relevant dropdowns are updated.
3. **Address Component:**
   * Implements Control Value Accessor for custom form control.
   * Allows adding and removing addresses within the user form.

## Getting Started

### Prerequisites

* Node.js and npm installed
* Angular CLI installed

## Installation
### Clone the repository:

```bash
git clone https://github.com/davidthe/SeaLights.git
cd SeaLights
```
### Install dependencies:

```bash
npm install
```
### Start the development server:

```bash
ng serve
```
Open your browser and navigate to http://localhost:4200.

For the server go to https://github.com/NaorT/Sealights-task and folow instructions

## Ngrex-store usage
![alt text](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)
