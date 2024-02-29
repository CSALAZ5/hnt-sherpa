import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { User } from '../../Models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild("normalModal") normalModal!: ElementRef<HTMLBdbMlModalNormalElement>;
  @ViewChild("atToastElement1") atToastElement1!: ElementRef<HTMLBdbAtToastElement>;
  @ViewChild("loader") loader!: ElementRef<HTMLBdbMlLoaderElement>;
  @ViewChild("confetti1") confetti1!: ElementRef<HTMLBdbAtConfettiElement>;
  @ViewChild("tablaDinamica") tablaDinamica!: ElementRef<HTMLBdbMlDynamicTableElement>;



  @Input('currentSlide') currentSlide: any;
  @Output() currentList: EventEmitter<any> = new EventEmitter();

  state = false;
  currentType = "";
  currentToastMessage = "";
  currentToastTitle = "";
  users: Array<User> = [];
  user = {
    document: 0,
    documentExpeditionPlace: "",
    name: "",
    email: "",
    surname: "",
    date: "",
    salary: 0.0,
    socialClass: 0,
    ocupation: "",

  }

  public formValidation(a: any) {
    this.user.document = +a.detail.inputs[0].value;
    if (!this.stringValidation(a.detail.inputs[1].value)) this.user.name = a.detail.inputs[1].value;
    else this.showToast("WARNING", "El nombre no debe incluir ninguno de los siguientes caracteres [#,$,-,/,!]", "Error de escritura");
    if (!this.stringValidation(a.detail.inputs[2].value)) this.user.surname = a.detail.inputs[2].value;
    else this.showToast("ERROR", "El apellido no debe incluir ninguno de los siguientes caracteres [#,$,-,/,!]", "Error de escritura");
    this.user.email = a.detail.inputs[3].value;
    if (a.detail.inputs[4].valid) this.user.date = a.detail.inputs[4].value.value
    this.user.salary = a.detail.inputs[5].value;
    this.user.socialClass = a.detail.inputs[7].value;
    this.user.ocupation = a.detail.inputs[8].value !== null ? a.detail.inputs[8].value.title : '';
    if (a.detail.canContinue) {
      this.state = true;
      a.detail.inputs[0].value = " "
    }
  }

  public stringValidation(str: string) {
    const letras = ['#', '$', '-', '/', '!']
    let res = false;
    if (str !== null && str !== undefined) {
      res = letras.some(item => str.includes(item));
    }
    return res;
  }

  public confirmCreation() {
    if (this.state) {
      this.normalModal.nativeElement.openModal();
    }
  }

  public createUser() {
    const newUser: User = new User(this.user.document, this.user.name, this.user.email, this.user.surname, new Date(this.user.date), this.user.salary, this.user.socialClass, this.user.ocupation);
    this.users.push(newUser);
    this.loader.nativeElement.openLoader();
    this.normalModal.nativeElement.closeModal();
    setTimeout(() => {
      this.loader.nativeElement.closeLoader();
    }, 3000);
    this.currentList.emit(this.users);
    window.scroll(0, 0)
  }

  public showToast(type: string, message: string, title: string) {
    this.currentToastTitle = title;
    this.currentType = type;
    this.currentToastMessage = message;
    this.atToastElement1.nativeElement.show();
  }
  public formReset(){

  }
}


