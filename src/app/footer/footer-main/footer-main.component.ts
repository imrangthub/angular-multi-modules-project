import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/core/design.service';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.css']
})
export class FooterMainComponent implements OnInit {

  constructor(
    private designService : DesignService
  ) { }

  appFooterColor:string = 'blue';

  ngOnInit() {

    this.setFooterColor();
  }

  setFooterColor(): void {
    console.log("footerColor: ",this.designService.footerColor);
  }

}
