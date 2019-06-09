// window.addEventListener('load',function(){

// })
window.onload = function () {
    // console.log(1);
    let photo = document.querySelectorAll('.photo img');
    let index = 0;
    for(let i = 0 ; i < photo.length ;i++){
        photo[i].onclick = function(){
            // console.log(1);
            photo[index].style.opacity = 0.7 ;
            this.style.opacity = 1;
            index = i ;
        }
    }
    let textarea = document.querySelector('textarea');
    let yjsr = document.querySelector('.yjsr');
    let syzs = document.querySelector('.syzs');
    let max = 25 ;
    yjsr.innerText = 0;
    syzs.innerText = max;
    textarea.onkeyup = function(){
        let value = this.value;
        yjsr.innerText = value.length;
        syzs.innerText = max - value.length;
    }
    let list = document.querySelector('.remark_list');
    let submit = document.querySelector('input[type=submit]')
    let username = document.querySelector('input[name=username]')



    submit.onclick = function (e) {
        let users  = username.value.trim();
        let content= textarea.value;
        // console.log(index);
        let thumbs = photo[index].src;
        let time   = new Date(). toLocaleDateString();
        e.preventDefault();
        if(yjsr.innerText === ''){
            alert('内容不能为空');
            return ;
        }
        if(username.value === ''){
            alert('用户名不能为空');
            return ;
        }

        let html = `
        <div class="mes">
            <div class="mesImg"><img src="${thumbs}" alt=""></div>
            <div>
                <span>${users}</span>
                <span>${time.slice(0,10)}</span>
            </div>
            <div><span>${content}</span></div>
        </div>
        <div class="reply">
            <div class="rep">
                <span>站长回复:</span>
                <span>模板更新了可以给你们用</span>
            </div>
        </div>`
        textarea.innerText = '';
        username.value = '';
        // console.log("value" + value);
        list.innerHTML = html + list.innerHTML;
    }

}