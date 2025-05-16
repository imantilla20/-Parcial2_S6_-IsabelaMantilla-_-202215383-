import { Component, Input, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { AerolineaService } from '../aerolinea.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aerolinea-detail',
  templateUrl: './aerolinea-detail.component.html',
  styleUrls: ['./aerolinea-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() aerolineaDetail!: Aerolinea;
  aerolineaId!: number;

  constructor(private route: ActivatedRoute,
    private aerolineaService: AerolineaService,
    private router: Router
  ) {}

  getTrainerById() {
    this.aerolineaService.getAerolineaById(this.aerolineaId).subscribe((data) => {
    this.aerolineaDetail = data;
    })
  }

  ngOnInit() {
    if (this.aerolineaDetail == undefined) {
      this.aerolineaId = this.route.snapshot.paramMap.get('id')! as unknown as number;
      if(this.aerolineaId){
        this.getAerolineaById();
      }
    }
  }
   
goBack(): void {
  this.router.navigate(['/trainers']);
}


}
