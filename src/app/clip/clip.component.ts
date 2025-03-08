import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clip',
  standalone: true,
  imports: [],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.css'
})
export class ClipComponent {
  id = ''

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  }
}
