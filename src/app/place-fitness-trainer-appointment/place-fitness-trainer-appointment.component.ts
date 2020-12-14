import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../_services";
import { Fitness } from "../modals/Fitness";
import { ActivatedRoute, Router } from "@angular/router";

export * from "../modals/Fitness";
@Component({
  selector: "app-place-fitness-trainer-appointment",
  templateUrl: "./place-fitness-trainer-appointment.component.html",
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  fitnessForm: FormGroup;
  editflag: boolean;
  loadingComplete = false;
  rupees: number;

  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id")) {
      this.editflag = true;
      this.userservice
        .getfitnessdatabyid(this.route.snapshot.paramMap.get("id"))
        .subscribe((user) => {
          this.loadingComplete = true;
          this.fitnessForm = this.fb.group({
            firstname: [user.firstname, [Validators.required]],
            lastname: [user.lastname, [Validators.required]],
            phonenumber: [user.phonenumber, [Validators.required]],
            email: [
              user.email,
              [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
              ],
            ],
            age: [
              user.age,
              [Validators.required, Validators.min(18), Validators.max(60)],
            ],
            trainerpreference: [user.trainerpreference, [Validators.required]],
            physiotherapist: [user.physiotherapist, [Validators.required]],
            packages: [user.packages, [Validators.required]],
            inr: [user.inr, [Validators.required]],
            paisa: [user.paisa, [Validators.required, Validators.max(99)]],
            streetaddress: [user.streetaddress, [Validators.required]],
            city: [user.city, [Validators.required]],
            state: [user.state, [Validators.required]],
            country: [user.country, [Validators.required]],
            pincode: [
              user.pincode,
              [Validators.required, Validators.pattern("^[0-9]{6}$")],
            ],
          });
        });
    } else {
      this.editflag = false;
      this.loadingComplete = true;

      this.fitnessForm = this.fb.group({
        firstname: ["", [Validators.required]],
        lastname: ["", [Validators.required]],
        phonenumber: ["", [Validators.required]],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
          ],
        ],
        age: [
          "",
          [Validators.required, Validators.min(18), Validators.max(60)],
        ],
        trainerpreference: ["", [Validators.required]],
        physiotherapist: ["", [Validators.required]],
        packages: ["", [Validators.required]],
        inr: ["", [Validators.required]],
        paisa: ["", [Validators.required, Validators.max(99)]],

        streetaddress: ["", [Validators.required]],
        city: ["", [Validators.required]],
        state: ["", [Validators.required]],
        country: ["", [Validators.required]],
        pincode: ["", [Validators.required, Validators.pattern("^[0-9]{6}$")]],
      });

      console.log(this.fitnessForm);
    }
  }

  onSubmit() {
    this.fitnessForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.fitnessForm.value",
      this.fitnessForm
    );

    if (this.fitnessForm.valid) {
      console.log("success");

      const data = new Fitness(
        this.fitnessForm.value.inr,
        this.fitnessForm.value.paisa,
        this.fitnessForm.value.streetaddress,
        this.fitnessForm.value.city,
        this.fitnessForm.value.state,
        this.fitnessForm.value.country,
        this.fitnessForm.value.pincode,
        this.fitnessForm.value.phonenumber,
        this.fitnessForm.value.email,
        this.fitnessForm.value.firstname,
        this.fitnessForm.value.lastname,
        this.fitnessForm.value.age,
        this.fitnessForm.value.trainerpreference,
        this.fitnessForm.value.physiotherapist,
        this.fitnessForm.value.packages,
        ""
      );
      if (this.editflag) {
        this.userservice
          .editfitnessdata(this.route.snapshot.paramMap.get("id"), data)
          .subscribe((result) => {
            this.router.navigate([`view-appointment`]);
          });
      } else {
        this.userservice
          .postfitnessdata(data.toObject())
          .subscribe((result) => {
            // console.log(result);
            this.fitnessForm.reset();
          });
      }

      // console.log(this.fitnessdata);
    } else {
      let elementsofform = this.fitnessForm.controls;
      let elements = Object.keys(elementsofform);
      let error = elements.map((element) => {
        if (elementsofform[element].status === "INVALID") {
          this.fitnessForm.controls[element];
          return `\n ${element} value not correct. !!`;
        }
      });
      window.alert(
        error +
          "\n\n Please ensure you have written correct values for all fields... !!!"
      );
    }
  }

  onChangePrice(rupees) {
    this.rupees = rupees.target.value;
  }
}
