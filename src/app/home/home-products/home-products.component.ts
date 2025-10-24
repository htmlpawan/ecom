import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  
  constructor() { }

  
  
  ngOnInit(): void {
    setTimeout(() => {
      $('.wrap-slick4').each(function(){
          console.log("testing...");
          $(this).find('.slick3').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              infinite: true,
              autoplay: false,
              autoplaySpeed: 6000,
  
              arrows: true,
              appendArrows: $(this).find('.wrap-slick3-arrows'),
              prevArrow:'<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
              nextArrow:'<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
              dots: true,
              appendDots: $(this).find('.wrap-slick3-dots'),
              dotsClass:'slick3-dots',
              customPaging: function(slick, index) {
                  var portrait = $("#abc"+index).attr('data-thumb');
                  return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
              },  
          });
      });

      var isotopeButton = $('.filter-tope-group-home button');
      $(isotopeButton).each(function(){
          $(this).on('click', function(){
              for(var i=0; i<isotopeButton.length; i++) {
                  $(isotopeButton[i]).removeClass('how-active1');
              }
              $(this).addClass('how-active1');
          });
      });
      
    }, 1000);

  }

  openModal(){
    $(".wrap-modal1").addClass("show-modal1");
  }
  close(){
    $(".wrap-modal1").removeClass("show-modal1");
  }

}
