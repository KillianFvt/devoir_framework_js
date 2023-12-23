import {Component, OnInit} from '@angular/core';
import {QcmService} from "../qcm_service/qcm.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [QcmService]
})
export class HomeComponent implements OnInit {
  constructor(private qcmService: QcmService) {}

  QCMList: any[] = [];

  ngOnInit() {
    this.QCMList = this.qcmService.getQcmList();
  }
}
