$(document).ready(function(){

    //메뉴 슬라이더
    var $firstMenu = $('#menu_wrap > ul > li '),
			$header = $('header');
	
	$firstMenu.mouseenter(function(){
		$header.stop().animate({height:'550px'},300);
	})
	.mouseleave(function(){
		$header.stop().animate({height:'100px'},300);
	});

    //메뉴 슬라이드
    $('nav a').on('click', function(){
        $(this).addClass('best_on');
        $(this).siblings().removeClass('best_on');
    });

    const navtab = { 
        
        init: function(){ 
            this.motab(); 
        }, 
        motab: function() { 
            let mBtn = $(".mBtn"); 
            let closeBtn = $(".closeBtn");

    //모바일 메뉴 호버이벤트
    $(mBtn).click(function(){ 
        
        $(".mNav").addClass("on"); 
        $(".bg-shadow").css("display", "block"); 
    
    });

    // 화면 클릭 
    
    $(".bg-shadow").click(function(){ 
        
        $(".mNav").removeClass("on"); 
        $(".bg-shadow").css("display", "none"); 
    
    });

    // 닫기 버튼 클릭 
    
    $(closeBtn).click(function(){ 
        
        $(".mNav").removeClass("on"); 
        $(".bg-shadow").css("display", "none"); 
    
    });

} 

} 

$(document).ready(function(){ 
    navtab.init(); 
})

    //sec04메뉴
    var tabAnchor = $('.three_box a'),
        tabPanel = $('.sec04');

        //링크를 클릭하면 할 일 
        tabAnchor.click(function(e){
            e.preventDefault();
            
            tabAnchor.removeClass('active');
            $(this).addClass('active');
            
            tabPanel.hide();

            var $target =$(this).attr('href');
            console.log($target);

            $($target).fadeIn(600);

        });
    });

    // sec03 슬라이드
    $(document).ready(function(){
        $('.new_product_container').bxSlider({
        });
    
    });

    // sec04 슬라이드
    $(document).ready(function(){
        $('.sec04_container').bxSlider({
        });
        
    });
    
    var windowWidth = $( window ).width('1620px'); 
    if(windowWidth < 771) {
        $(document).ready(function(){
            $( '.best_product' ).width( '97vw' );
        });  
    } else if(windowWidth < 1619) {
        $(document).ready(function(){
            $( '.best_product' ).width( '90vw' );
        });  
    } else {
        $(document).ready(function(){
        $( '.best_product' ).width( '1620px' );
    });

    }
    
    //sec05 자동 슬라이드

    $(document).ready(function(){
        $('.news_container').bxSlider({
          auto:true,
          pause: 4000
        });
    
    });


    // top버튼 이벤트

    $('#top_btn').click(function(){

        $('body,html').animate({
            scrollTop : 0,
        },500);

    });


    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if(sct >= 50){
            $('#top_btn').fadeIn();
        }else if(sct < 50){
            $('#top_btn').fadeOut();
        }

    });

//end