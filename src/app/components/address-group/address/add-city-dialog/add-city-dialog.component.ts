import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-add-city-dialog",
  templateUrl: "./add-city-dialog.component.html",
  styleUrls: ["./add-city-dialog.component.scss"],
})
export class AddCityDialogComponent {
  cityName: string = "";

  constructor(
    public dialogRef: MatDialogRef<AddCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { country: string },
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close(this.cityName);
  }
}
