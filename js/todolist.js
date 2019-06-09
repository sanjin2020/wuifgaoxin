window.addEventListener('load',function () {
    let li = document.querySelectorAll('main  .top  li');
    let content = document.querySelector('.content');
    // console.log(content);
    // console.log(li[0]);

    let type = 'all';
    let todolist = [
        {
            id:1,content:"明月几时有,把酒问青天",ctime:'2019/6/4',status:true
        },
        {
            id:2,content:"海上生明月,天涯共此时",ctime:'2019/6/4',status:false
        },
        {
            id:3,content:"端午节交作业",ctime:'2019/6/4',status:true
        },
        {
            id:4,content:"交就交吧",ctime:'2019/6/4',status:true
        }
    ];
    let str = localStorage.getItem('todolist');
    if(!str){
        saveDate();
        str = localStorage.getItem('todolist');
    }
    todolist = JSON.parse(str);

    // console.log(todolist[1].ctime);
    let per = 0;
    li.forEach(function(ele,index){
        ele.onclick = function ( ) {
            li[per].classList.remove('hot');
            this.classList.add('hot');
            per = index;
            type = this.getAttribute('type');
            // console.log(type);
            render(filterDate(type));
    }
    })
    render(todolist);
    // console.log(li[0]);
    li[0].onclick();
    // console.dir(render(arr));
    /*//////////////////////////////////////////////////////*/
    content.addEventListener('click',function (ele) {
        // let arr = [];
        let target =ele.target;
        console.log(target);
        if(target.nodeName === 'INPUT'){
            console.log(target);
            let id = target.parentNode.id;
            let arr = todolist.filter(eles=>eles.id==id)[0];
            console.log(arr.status);
            if(arr.status == true){
                arr.status = false;
            }else{
                arr.status = true;
            }
        }
        saveDate();
        render(filterDate(type));

    })
    /*//////////////////////////////////////////////////////*/
    content.onclick = function(e){
        let arr = [];
        let target =e.target;

        if(target.nodeName === 'INPUT'){

        }else if(target.nodeName === 'DEL'){
            let id = target.parentNode.id;
            let index = todolist.findIndex(ele=>ele.id==id);
            todolist.splice(index,1);
            saveDate();
            render(filterDate(type));
        }
    }
    /*/////////////////////获取新表单/////////////////////////////////*/
    let forms =document.forms[0];
    let textBut = forms.elements['content'];
    let submitBut = forms.elements[1];

    submitBut.onclick = function (e) {
        e.preventDefault();
        let obj =createObj();
        todolist.push(obj);
        forms.reset();
        render(filterDate(type));
    }
    /*/////////////////////摄取输入信息////////////////////////////////*/
    function createObj() {
        let id = todolist[todolist.length-1].id+1;
        let content = textBut.value;
        let ctime = new Date().toLocaleDateString();
        let status = false;
        return {id,content,ctime,status};
    }
    /*//////////////////////////////////////////////////////*/
    function filterDate(){
        let arr = [];
        switch (type){
            case 'all':
                // console.log(todolist);
                arr=todolist;
                break;
            case 'done':
                // console.log(todolist);
                arr=todolist.filter(function (ele) {return ele.status;});
                break;
            case 'doing':
                // console.log(todolist);
                arr=todolist.filter(function (ele) {return !ele.status;});
                break;
        }
        return arr;
        // render(arr);
    }

    /*//////////////////////////////////////////////////////////////////*/
    function saveDate(){
        localStorage.setItem("todolist",JSON.stringify(todolist));
}
    /*//////////////////////////////////////////////////////////////////*/
    function render (arr) {
    let html = ``;
    arr.forEach(ele =>{
        // console.log(ele.ctime);
        if(ele.status){
            html += `
            <li id="${ele.id}">
                <input type="checkbox" checked> 
                <p>${ele.content}</p> 
                <del>❌</del>
                <time>${ele.ctime}</time>
            </li>
            `;
        }else{
            html += `
            <li id="${ele.id}">
                <input type="checkbox">
                <p>${ele.content}</p> 
                <del>❌</del>
                <time>${ele.ctime}</time>
            </li>
            `;
        }
    })
        content.innerHTML = html;
    }

})