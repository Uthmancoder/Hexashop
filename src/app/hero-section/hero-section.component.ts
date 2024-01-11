import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations: [
    // Your existing animations
  ]
})
export class HeroSectionComponent {
  currentIndex = 0;

  slides = [
    { image: 'assets/men-01.jpg', caption: 'Classic spring', price: '$120.00', rating: 5 },
    { image: 'assets/men-02.jpg', caption: 'Another product', price: '$150.00', rating: 4 },
    { image: 'assets/baner-right-image-02.jpg', caption: 'Another product', price: '$150.00', rating: 4 },
    { image: 'assets/baner-right-image-01.jpg', caption: 'Another product', price: '$150.00', rating: 4 },
    { image: 'assets/baner-right-image-03.jpg', caption: 'Third product', price: '$99.99', rating: 3 }
  ];

  visibleSlides: any[] = this.slides.slice(0, 3);

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateVisibleSlides();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateVisibleSlides();
  }

  updateVisibleSlides() {
    this.visibleSlides = [
      this.slides[(this.currentIndex - 1 + this.slides.length) % this.slides.length],
      this.slides[this.currentIndex],
      this.slides[(this.currentIndex + 1) % this.slides.length]
    ];
  }
}
