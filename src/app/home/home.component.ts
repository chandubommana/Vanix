import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { SectionThreeComponent } from '../section-three/section-three.component';
import { SectionFourComponent } from '../section-four/section-four.component';
import { SectionFiveComponent } from '../section-five/section-five.component';
import { SectionSixComponent } from '../section-six/section-six.component';
import { SectionSevenComponent } from '../section-seven/section-seven.component';
import { FooterComponent } from '../footer/footer.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent,AboutCompanyComponent,SectionThreeComponent,SectionFourComponent,SectionFiveComponent,SectionSixComponent,SectionSevenComponent,FooterComponent,UserDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('bgVideo') bgVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideoRef.nativeElement;
    video.muted = true;
    video.play().catch(error => {
      console.error('Video play failed:', error);
    });
  }

}
