$('.toggle-nav-btn').on('click', function(event){
    event.stopPropagation();
    $(this).toggleClass('active');
    
    if($('.main-nav').hasClass('visible')){
      $('.main-nav').removeClass('visible transition-ended');
      $('.wrapper').removeClass('pushed');
      $('.dots').removeClass('pushed');
      
    }else{
      $('.main-nav').addClass('visible');
      $('.wrapper').addClass('pushed');
      $('.dots').addClass('pushed');
    }
    
  $('.main-nav').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
  
      if($(this).hasClass('visible')){
        $(this).addClass('transition-ended');
      }else{
        $(this).removeClass('transition-ended');
      }
      
    });
  });
  
  $('.main-nav').on('click', function(event){
    event.stopPropagation();
  });
  
  $('html, body').click(function(){
    $('.toggle-nav-btn').removeClass('active');
    $('.main-nav').removeClass('visible transition-ended');
    $('.wrapper').removeClass('pushed');
    $('.dots').removeClass('pushed');
  });
  
  
  $('.main-nav li').has('ul').addClass('has-sublevel').append('<span class="deployer">+</span>');
  
  $('.deployer').on('click', function(){
    
    var ulToShow = $(this).parent('li').find('ul');
    
    $(this).toggleClass('active');
   
    if(ulToShow.hasClass('visible')){
      
      $(this).html('+');
      
      ulToShow.slideUp(100, function(){
        $(this).removeClass('visible');
      });    
      
    }else{
      
      $(this).html('-');
      
      ulToShow.slideDown(300, function(){
        $(this).addClass('visible');
      });    
    }
    
  });
  
  $('.dots a').click(function(event){
    event.stopPropagation();                   
  });
  
  $('a[href^=#]').on("click",function(e){
      var $this = $(this);
      var t= $(this.hash);
      var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
      if(t.length){
          var tOffset=t.offset().top;
          $('html,body').animate({scrollTop:tOffset},'slow', function(){
            $this.addClass('active');
            $('a').not($this).removeClass('active');           
          });
       
          e.preventDefault();
      }
      
  
      
  });