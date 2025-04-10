import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  data:any[]=[];
  constructor(private Auth:AuthService){

  }
  ngOnInit() {
    this.Auth.getPlacesAutocomplete().subscribe({
      next: (res:any) => {
      this.data=res.suggestions;
      console.log(this.data)
        console.log('API Response:', res)},
      error: (err) => console.error('API Error:', err)
    });
  }

}
