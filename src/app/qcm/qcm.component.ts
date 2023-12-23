import {Component, OnInit, Renderer2, ElementRef} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {QcmService} from "../qcm_service/qcm.service";
import {QCM} from "../models/qcm.model";
import {NgClass, NgForOf} from "@angular/common";
import {Question} from "../models/question.model";

@Component({
  selector: 'app-qcm',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgClass
  ],
  templateUrl: './qcm.component.html',
  styleUrl: './qcm.component.css',
  providers: [QcmService],
})
export class QcmComponent implements OnInit{
  private qcmId: string = '';
  public qcm: QCM = new QCM({});

  constructor(
    private route: ActivatedRoute,
    public qcmService: QcmService,
    private router: Router,
    private renderer: Renderer2,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.qcmId = params['id'];

      if (parseInt(this.qcmId) < 0) {
        this.router.navigate(['/']).then(r => {});
      } else {

        this.qcmService.getQcmById(this.qcmId).subscribe((qcm: any) => {
          if (!qcm) {
            this.router.navigate(['/qcm/0']).then(r => {});
          } else {
            this.qcm = qcm;
          }
        }, (error) => {
          this.router.navigate(['/qcm/0']).then(r => {});
        });
      }


    });
  }

  onAnswerClick(index: number, event: any, question: Question): void {
  const target = event.target || event.srcElement || event.currentTarget;

  if (index === question.answerId) {
    this.renderer.removeClass(target, 'red');
    this.renderer.addClass(target, 'green');
  } else {
    this.renderer.removeClass(target, 'green');
    this.renderer.addClass(target, 'red');
  }
}
}
