import {Component, DoCheck, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements DoCheck {
  @ViewChild("normalModal") normalModal!: ElementRef<HTMLBdbMlModalNormalElement>
  @ViewChild("confetti1") confetti1!: ElementRef<HTMLBdbAtConfettiElement>

  @Input() currentUser: any = {}
  @Input() usersList: Array<any> = []

  users: Array<any> = []

  public ngDoCheck(): void {
    this.users = [];
    this.usersList.forEach((item: any) => {
      const user = {
        id: this.usersList.length - 1,
        nombre: item.name,
        apellido: item.surname,
        documento: item.id,
        boton: 'ico-search'
      };

      this.users.push(user);
    });
  }

  public rowSelected(a: any) {
    this.currentUser = this.usersList[a.detail.data.id];
    this.normalModal.nativeElement.openModal()
  }

  public rowStringify() {
    console.log("rowStringify en Table Component");
    console.log(this.users);    
    return JSON.stringify(this.users);
  }
}
