import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "../_services/contact.service";

/**
 * Component for contact-us.
 */

export class Contact {
  constructor(
    public firstname: string,
    public lastname: string,
    public phonenumber: number,
    public email: string,
    public message: string
  ) {}
}
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
})
export class ContactUsComponent implements OnInit {
  @Output() contactdata = new EventEmitter<Contact>();
  contactForm: FormGroup;
  public obj: any = {};

  constructor(
    private fb: FormBuilder, // private userservice: UserService
    private contactservice: ContactService
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      message: ["", [Validators.required]],
    });
  }

  onSubmit() {
    this.obj = { ...this.contactForm.value, ...this.obj };
    this.contactForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.contactForm.value",
      this.contactForm.value
    );

    if (this.contactForm.valid) {
      const dataForm = new Contact(
        this.contactForm.value.firstname,
        this.contactForm.value.lastname,
        this.contactForm.value.phonenumber,
        this.contactForm.value.email,
        this.contactForm.value.message
      );
      this.contactdata.emit(dataForm);
      //this.contactForm.reset();

      this.contactservice
        .postcontactdata({
          firstname: dataForm.firstname,
          lastname: dataForm.lastname,
          phonenumber: dataForm.phonenumber,
          email: dataForm.email,
          message: dataForm.message,
        })
        .subscribe((result) => {
          console.log(result);
          this.contactForm.reset();
        });
    } else {
      let elementsofform = this.contactForm.controls;
      let elements = Object.keys(elementsofform);
      let error = elements.map((element) => {
        if (elementsofform[element].status === "INVALID") {
          return `\n ${element} value not correct. !!`;
        }
      });
      window.alert(
        error +
          "\n\n Please ensure you have written correct values for all fields... !!!"
      );
    }
  }
}
