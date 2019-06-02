// window.onload = function(){
    let box = document.querySelector('.logo')
    // let div = document.querySelector('div');
    console.log(box);
    let maxH = window.innerHeight - parseInt(getComputedStyle(box,null).height);
    let maxW = window.innerWidth - parseInt(getComputedStyle(box,null).width);
    console.log(maxH);
    let speed = 8;
    let speeds = 8;
    let tops = parseInt(getComputedStyle(box,null).top);
    let lefts = parseInt(getComputedStyle(box,null).left);

    let  fn = function(){
        lefts += speeds;
        tops += speed;
        // tops = 600;

        if(tops >= maxH){
            tops = maxH
            speed *= -1;
        }
        if(tops < 0){
            tops = 0 ;
            speed *= -1;
        }
        if(lefts >= maxW){
            lefts = maxW;
            speeds *= -1;
        }
        if(lefts < 0){
            lefts = 0;
            speeds *= -1;
        }
        // console.log(tops);
        // console.log(tops);
        box.style.top = tops + 'px';
        box.style.left = lefts + 'px';
    }
    window.onresize = function() {
        maxH = window.innerHeight - parseInt(getComputedStyle(box,null).height);
        maxW = window.innerWidth - parseInt(getComputedStyle(box,null).width);
    }

    let spe ;
    let spee ;


    box.onmouseenter= function(){
        spe = speed;
        spee = speeds;

        speed =0;
        speeds = 0;
        box.style.opacity = 1;
    }
    box.onmouseleave= function(){

        speed =spe;
        speeds = spee;
        box.style.opacity = 0.4;
    }
    setInterval(fn,100);

// }