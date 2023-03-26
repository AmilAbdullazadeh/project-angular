import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  BlackListValidator,
  WhiteSpaceValidator,
  UserNameExistValidator,
  UserService
} from "src/libs";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {
  registerForm: FormGroup;
  user = {
    username: "onur",
    age: 27
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.resetForm();
  }

  save(event: any) {
    this.user = event.value;
    console.log("userr savedd", this.user);
  }

  randomUsername(event: any) {
    this.registerForm.patchValue({
      username: "test-123"
    });
  }

  resetForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(this.user ? this.user.username : "", {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          BlackListValidator("ğ"),
          WhiteSpaceValidator
        ],
        asyncValidators: [UserNameExistValidator(this.userService)],
        updateOn: "change"
      }),
      age: new FormControl(this.user ? this.user.age : 0)
    });
  }
}
