$(function(){
    $('#gnb .mainMenu > li').hover(
        function(){
            $(this)
            .children('.subMenu')
            .addClass('on');
        },
        function(){
            $(this)
            .children('.subMenu')
            .removeClass('on');
        }
    );
    //메인비주얼 슬라이더
    let num = 0; //이미지 번호
    
    function changeSlider(img_num){

        let img_height = -300 * img_num;
        
        $('.slider .sliders').css({
            transform: `translateY(${img_height}px)`
        })
    }

    //자동재생
    setInterval(function(){
        num++;
        if(num==3){num=0;}
        changeSlider(num);
    }, 3000);

    //공지사항/갤러리 탭버튼
    $('.tab_buttons .noticeBtn').click(function(){
        $('.tab_contents').removeClass('on')
        
        $('#notice').addClass('on');
    });
    $('.tab_buttons .galleryBtn').click(function(){
        
        $('.tab_contents').removeClass('on')
        
        $('#gallery').addClass('on');
    });

    $('.close').click(function(){
        $('.modal').addClass('off');
    })
    $('.open').click(function(){
        $('.modal').removeClass('off');
    })

})


