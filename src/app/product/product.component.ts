import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import  'slick-carousel';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  
  constructor() {

    
   }

  ngOnInit(): void {
     
  }

  ngAfterViewInit(): void {
  // $(document).ready(function(){
  //   alert("testing");
  // });
    console.log("after");
         

          $(document).ready(function(){
            console.log("ngOnInit");
            setTimeout(() => {
              $('.wrap-slick3').each(function(){
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
        
            var isotopeButton = $('.filter-tope-group button');
            $(isotopeButton).each(function(){
                $(this).on('click', function(){
                    for(var i=0; i<isotopeButton.length; i++) {
                        $(isotopeButton[i]).removeClass('how-active1');
                    }
                    $(this).addClass('how-active1');
                });
            });
            }, 1000);

           
          });

          $(document).ready(function(){
            
            var multisidetabs=(function(){
                 var opt:any,parentid:any,
              vars={
                listsub:'.list-sub',
                showclass:'mg-show'
              },
              test=function(){
                console.log(parentid);
              },
              events = function(){
                $(parentid).find('a').on('click',function(ev){
                  ev.preventDefault();
                  var atag = $(this), childsub = atag.next(vars.listsub);
                  //console.log(atag.text());
                  if(childsub && opt.multipletab == true){
                    if(childsub.hasClass(vars.showclass)){
                      childsub.removeClass(vars.showclass).slideUp(500);
                    }else{
                      childsub.addClass(vars.showclass).slideDown(500);
                    }
                  }
                  if(childsub && opt.multipletab == false){
                   childsub.siblings(vars.listsub).removeClass(vars.showclass).slideUp(500);
                   if(childsub.hasClass(vars.showclass)){
                     childsub.removeClass(vars.showclass).slideUp(500);
                   }else{
                     childsub.addClass(vars.showclass).slideDown(500);
                   }
                  }
                });
              },
              init=function(options:any){//initials
                if(options){
                  opt = options;
                  parentid = '#'+options.id;
                  //test();
              	  events();
                }else{ alert('no options'); }
              }
              
            	return {init:init};
            })();
            
            multisidetabs.init({
            	"id":"mg-multisidetabs",
              "multipletab":false
            });
            
          })
 }

  openModal(){
    $(".wrap-modal1").addClass("show-modal1");
  }
  close(){
    $(".wrap-modal1").removeClass("show-modal1");
  }

}
