import {Component, Input} from '@angular/core';
import {User} from "../../Models/user";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  @Input() currentUser!: User
  @Input() usersList: Array<any> = []
  inputsState = {
    inputName: true,
    inputSurname: true,
    inputEmail: true,
    inputSalary: true,
    inputSocialClass: true,
    inputOcupation: true,
  }

  public ngOnChanges() {
    console.log("ngOnChanges en modal component");
    console.log(this.currentUser)
  }

  public updateEditInput(id: string) {
    switch (id) {
      case "nameData": {
        this.inputsState.inputName = !this.inputsState.inputName;
        console.log(this.currentUser)
        break;
      }
      case "surnameData": {
        this.inputsState.inputSurname = !this.inputsState.inputSurname;
        break;
      }
      case "emailData": {
        this.inputsState.inputEmail = !this.inputsState.inputEmail;
        break;
      }
      case "salaryData": {
        this.inputsState.inputSalary = !this.inputsState.inputSalary;
        break;
      }
      case "socialClassData": {
        this.inputsState.inputSocialClass = !this.inputsState.inputSocialClass;
        break;
      }
      case "ocupationData": {
        this.inputsState.inputOcupation = !this.inputsState.inputOcupation;
        break;
      }

    }


  }
}
