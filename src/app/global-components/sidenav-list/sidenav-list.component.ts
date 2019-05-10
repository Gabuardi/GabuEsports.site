import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.sass']
})
export class SidenavListComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  // OUTPUT
  @Output() sidenavClose = new EventEmitter();

  // ------------------------------------------------------
  // METHOD -> ADVICE TO PARENT COMPONENT THAT A SIDE NAV CLOSED BUTTON HAVE BEEN CLICKED
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  // METHOD -> OPEN IN ANOTHER WINDOW AN DISCORD INVITATION
  openDiscordInvitation(): void {
    window.open('https://discord.gg/jQuKtMW');
  }

} // COMPONENTS ENDS
