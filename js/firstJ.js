// window.onload = function ( ) {
$(function () {
    let slideBtn = $('a:has(.slideDown)');
    let slideDowns = $('.slideDown');
    slideBtn.on('mouseenter mouseleave',function () {
        let index = $(this).index('li:has(.slideDown)');
        console.log(slideDowns.eq(index));
        slideDowns.eq(index).slideToggle();
    })
    /*小点*/
    // let first = document.getElementsByClassName('turnbut');
    let bottomBut = $('.bottomBut');
    let first = $('.turnbut');

    /*
    * 轮播图图片
    * */
    let diaAA = $('.turnA');
    /*

    /*
    * 轮播图右按钮
    * */
    let current = 0,next = 0 ;
    let rightBut = document.querySelectorAll('.rightBut');
    let rightButImg = rightBut[0].getElementsByTagName('img');
    let w = diaAA[0].offsetWidth;
    let flag = true;
    rightButImg[0].onclick = function ( ) {
        if(!flag){
            return;
        }
        flag = false;
        next++;
        if(next === diaAA.length){
            next = 0;
        }
        diaAA[next].style.left = w +'px';

        animate(diaAA[current],{left:-w},1000);
        animate(diaAA[next],{left:0},1000,()=>
        {
            flag = true
        })

        for(let j =0 ; j<diaAA.length; j++){
            first[j].style.background = '#ffffff';
        }
        first[next].style.background = '#12B7DE';

        current =next;
    };
    /*
    * 轮播图左按钮
    * */
    let leftBut = document.querySelectorAll('.leftBut')
    let leftButImg = leftBut[0].getElementsByTagName('img');

    leftButImg[0].onclick = function ( ) {
        if(!flag){
            return;
        }
        flag = false;
        next--;
        if(next === -1){
            next = diaAA.length-1;
        }
        diaAA[next].style.left = -w +'px';

        animate(diaAA[current],{left:w},1000)
        animate(diaAA[next],{left:0},1000,()=>
        {
            flag = true
        })

        for(let j =0 ; j<diaAA.length; j++){
            first[j].style.background = '#ffffff';
        }
        first[next].style.background = '#12B7DE';

        current =next;
    }
    /*
        * 轮播图底部按键对应
        * */
            bottomBut.on('click','.turnbut',function (e) {
                console.log(this);
                console.log(bottomBut.index($(e.target()).closest('div')));
                // console.log(next);
                if(next == bottomBut.index($(this).closest('div'))){
                return;
            }
            next = bottomBut.index($(this).closest('div'));
            if(next > current){
                diaAA.eq(next).css({'left': w});
                diaAA.eq(current).animate({'left':-w});
                diaAA.eq(next).animate({'left':0});
            }else{
                diaAA.eq(next).css({'left': -w});
                diaAA.eq(current).animate({'left':w});
                diaAA.eq(next).animate({'left':0});
            }
            $(this).siblings().css({'background' : '#12B7DE'});
            current =next;
        })

    /*
    /*
    * 时钟控制轮播图
    * */
    let Set =function () {
        next++;
        if(next === diaAA.length){
            next = 0;
        }
        diaAA[next].style.left = w +'px';

        animate(diaAA[current],{left:-w})
        animate(diaAA[next],{left:0})

        for(let j =0 ; j<diaAA.length; j++){
            first[j].style.background = '#ffffff';
        }
        first[next].style.background = '#12B7DE';

        current =next;
    }
    let t  = setInterval(Set,3000);
    /*
    * 控制时钟的开始与结束
    * */
    let turnLeftUl =document.querySelector('.turnLeftUl');
    turnLeftUl.onmouseenter= function(){
        clearInterval(t);
    }
    turnLeftUl.onmouseleave= function(){
        t=setInterval(Set,3000);
    }

    /*
    * 个人博客日志标题控制
    * */
    let diaTop = document.getElementsByClassName('diaTop');
    let diaTit = diaTop[0].getElementsByTagName('li');
    diaTit[0] .className="diaTitle";
    for(let i=0 ; i<diaTit.length;i++){
        diaTit[i].onmouseenter =function (){
            for(let j=0 ; j < diaTit.length ; j++){
                // diaTit[j] .setAttribute("id", "divid");//给创建的div设置id值；
                diaTit[j] .className="diaTitlediaTitle";
                // diaTit[i].style.
                // document.styleSheets[0].addRule('.diaTitle:before','background:#ffffff');
            }
            // document.styleSheets[i].addRule('.diaTitle:before','background:#000000');
            // this.style.background = '#12B7DE';
            diaTit[i] .className="diaTitle";
        }
    }


    /*

    /*
    * 个人博客日志标题控制
    * */


    diaTit[0] .className="diaTitle";
    for(let i=0 ; i<diaTit.length;i++){
        diaTit[i].onmouseenter =function (){
            for(let j=0 ; j < diaTit.length ; j++){
                // diaTit[j] .setAttribute("id", "divid");//给创建的div设置id值；
                diaTit[j] .className="diaTitlediaTitle";
                // diaTit[i].style.
                // document.styleSheets[0].addRule('.diaTitle:before','background:#ffffff');
            }
            // document.styleSheets[i].addRule('.diaTitle:before','background:#000000');
            // this.style.background = '#12B7DE';
            diaTit[i] .className="diaTitle";
        }
    }


    //博客日记文本显示与隐藏
    let rightText = document.querySelectorAll('.diary .right li');

    rightText.forEach(function (elem,value) {
        elem.onmouseenter = function ( ) {
            for(let i = 0 ; i < rightText.length; i++){
                rightText[i].classList.remove('hot');
            }
            this.classList.add('hot');
        }
    })
    /*
    * 懒加载*/
    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.ljz');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let  partent = ele.offsetParent;
        positionArr.push(partent.offsetTop + ele.offsetTop)
    })

    window.onscroll = function ( ) {
        let  scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        for (let  i =0 ; i<positionArr.length ; i++){
            if(scrolltop + viewH >= positionArr[i] + 50){
                if(!imgs[i].src){
                    imgs[i].src = imgs[i].getAttribute('aa');
                }

            }
        }
    }

});