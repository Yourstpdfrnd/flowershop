$(function(){



    $('.menu-btn').on('click', function(){
        $('.mobile > ul').slideToggle();        
      });


      $('.menu-btn').on('click', function(){
        $(this).toggleClass('active'); 
        return false;              
      });
      

      $('.search__form-categories').on('click', function(){
        $('.categories__select').slideToggle();        
      });


      $('.contacts__inner-title').on('click', function(){
        $('.contacts__inner-items').removeClass('contacts__inner--active');
        $(this).parent().addClass('contacts__inner--active');
      
      });

       $('.search__menu-list').on('click', function(){
         $('.search__menu-dropdown').slideToggle();        
       });

        $('.search__menu-mobile').on('click', function(){
          $('.search__menu-dropdown').slideToggle();        
        });

       $('.menu-dropdown__item-list > ul').on('click', function(){
         $('.menu-dropdown__item-info.info').slideToggle();        
       });

      
        $('.menu__search-mobile').on('click', function(){
         $('.mobile__search').slideToggle();        
       });
      

      

    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
      })

      
  
});