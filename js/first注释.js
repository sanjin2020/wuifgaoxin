window.onload = function ( ) {
    let first = document.getElementsByClassName('turnbut');


    let diaTop = document.getElementsByClassName('diaTop');
    let diaTit = diaTop[0].getElementsByTagName('li');
    /*
    * 轮播图图片
    * */
    let diaImg = document.getElementsByClassName('turnLeft');
    let diaA = diaImg[0].getElementsByTagName('li');
    let diaAA =  document.querySelectorAll('.turnA');

    console.log(diaImg.length);
    console.log(diaA.length);

    console.log(first.length);
    console.log(diaAA.length);

    // console.log(diaTit[0]);
    // console.log(diaTit);
    // console.log(first[0]);
    /*
    * 轮播图底部按键对应
    * */
    let turnRight = 0 ;
    for(let i = 0 ; i<diaAA.length ; i ++){
        diaAA[i].turnRightIndex = i;

         // turnRight=diaAA.turnRightIndex ;
        first[i].onclick =function () {
            turnRight = diaAA[i].turnRightIndex;
            for(let j =0 ; j<diaAA.length; j++){
                // diaAA[j].style.zIndex = '98';
                diaAA[j].style.opacity = 0;
                first[j].style.background = '#ffffff';
            }
            // diaAA[i].style.zIndex = '333';
            diaAA[i].style.opacity = 1;
            first[i].style.background = '#12B7DE';
        }
    }
    /*
    * 轮播图左按钮
    * */

    let leftBut = document.querySelectorAll('.leftBut')
    let leftButImg = leftBut[0].getElementsByTagName('img');

    console.log(leftBut);
    console.log(leftButImg);

    leftButImg[0].onclick = function ( ) {
        console.log(1);
        turnRight--;
        if(turnRight === -1){
            turnRight = diaAA.length-1;
        }
        for(let i = 0 ; i<diaAA.length ; i++){
            // diaAA[i].style.zIndex = '98';
            diaAA[i].style.opacity = 0;
            first[i].style.background = '#ffffff';
        }
        diaAA[turnRight].style.opacity = 1;
        // diaAA[turnRight].style.zIndex = '333';
        first[turnRight].style.background = '#12B7DE';
    }

    /*
    * 轮播图右按钮
    * */
    // let turnRight = 0 ;
    let rightBut = document.querySelectorAll('.rightBut');
    let rightButImg = rightBut[0].getElementsByTagName('img');

    console.log(rightBut);
    console.log(rightButImg);

    rightButImg[0].onclick = function ( ) {
        console.log(1);
        turnRight++;
        if(turnRight === diaAA.length){
            turnRight = 0;
        }
        for(let i = 0 ; i<diaAA.length ; i++){
            // diaAA[i].style.zIndex = '98';
            diaAA[i].style.opacity = 0;
            first[i].style.background = '#ffffff';
        }
        diaAA[turnRight].style.opacity = 1;
        // diaAA[turnRight].style.zIndex = '333';
        first[turnRight].style.background = '#12B7DE';
    }
    /*
    * 轮播图按钮变色
    * */
    // for(let i = 0 ; i < first.length ; i++){
    //     first[i].onmouseenter =function () {
    //         first[i].style.background = '#12B7DE';
    //     }
    //     first[i].onmouseleave =function () {
    //         first[i].style.background = '#ffffff';
    //     }
    //
    // }
    /*
    * 时钟控制轮播图
    * */

    diaAA[0].style.zIndex = '333';
    let Set =function () {
        console.log(1);
        // turnRight = diaAA[turnRight].turnRightIndex;
        // console.log(diaAA[turnRight].turnRightIndex);
        turnRight++;
        if(turnRight === diaAA.length){
            turnRight = 0;
        }
        for(let i = 0 ; i<diaAA.length ; i++){
            // diaAA[i].style.zIndex = '98';
            diaAA[i].style.opacity = 0;
            first[i].style.background = '#ffffff';
        }
        diaAA[turnRight].style.opacity = 1;
        // diaAA[turnRight].style.zIndex = '333';
        first[turnRight].style.background = '#12B7DE';
    }
    let t  = setInterval(Set,4000);
    /*
    * 控制时钟的开始与结束
    * */
    let turnLeftUl =document.querySelector('.turnLeftUl');
    console.log(turnLeftUl);
    turnLeftUl.onmouseenter= function(){
        clearInterval(t);
        console.log(1);
    }
    turnLeftUl.onmouseleave= function(){
        t=setInterval(Set,4000);
    }

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

}