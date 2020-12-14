import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";
import { Fitness } from "../modals/Fitness";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.component.html",
})
export class ViewAppointmentComponent implements OnInit {
  users: Fitness[];
  localUsers: Fitness[];
  idUser: string;
  searchTrainer: string = "No Preference";

  constructor(private userservice: UserService, private router: Router) {}

  setId(id) {
    this.idUser = id + "";
    // console.log(this.idUser);
  }

  deleteAppointment() {
    if (this.idUser) {
      this.userservice.deletefitnessdata(this.idUser).subscribe((result) => {
        this.refresh();
      });
    }
  }

  editAppointment(id) {
    if (id) {
      this.router.navigate([`/edit/${id}`]);
    }
  }

  refresh() {
    this.userservice.getfitnessdata().subscribe((data) => {
      this.users = [];
      data.forEach(
        (value: {
          inr: number;
          paisa: number;
          streetaddress: string;
          city: string;
          state: string;
          country: string;
          pincode: number;
          phonenumber: number;
          email: string;
          firstname: string;
          lastname: string;
          age: number;
          trainerpreference: string;
          physiotherapist: string;
          packages: string;
          id: string;
        }) => {
          this.users.push(
            new Fitness(
              value.inr,
              value.paisa,
              value.streetaddress,
              value.city,
              value.state,
              value.country,
              value.pincode,
              value.phonenumber,
              value.email,
              value.firstname,
              value.lastname,
              value.age,
              value.trainerpreference,
              value.physiotherapist,
              value.packages,
              value.id
            )
          );
        }
      );
      this.localUsers = this.users.slice();
    });
  }

  ngOnInit() {
    this.refresh();
  }

  onSearch() {
    console.log("this.searchTrainer", this.searchTrainer);
    if (this.searchTrainer == "" || this.searchTrainer == "All") {
      this.ngOnInit();
    } else {
      this.localUsers = this.users.filter((user) => {
        return user.$trainerpreference === this.searchTrainer.toLowerCase();
      });
    }
  }

  onSelectTrainer(event) {
    this.searchTrainer = event.target.value;
  }
}
