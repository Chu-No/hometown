const left_btn = document.getElementById('left-btn')
const right_btn = document.getElementById('right-btn')

const summer = document.getElementById('summer')
const david = document.getElementById('david')
const zeo = document.getElementById('zeo')
const bien = document.getElementById('bien')
const eidde = document.getElementById('eidde')
const nicole = document.getElementById('nicole')

const person_list = [summer, david, zeo, bien, eidde, nicole]

left_btn.addEventListener('click', (e) =>{
    var slide_num = document.getElementById('member_list').className;
    console.log(slide_num)
    if(slide_num == "member_list member_list1"){
        document.getElementById('member_list').className = 'member_list member_list0';
    }else if(slide_num == "member_list member_list2"){
        document.getElementById('member_list').className = 'member_list member_list1';
    }

})

right_btn.addEventListener('click', (e) =>{
    var slide_num = document.getElementById('member_list').className;
    console.log(slide_num)
    if(slide_num == "member_list member_list0"){
        document.getElementById('member_list').className = 'member_list member_list1';
    }else if(slide_num == "member_list member_list1"){
        document.getElementById('member_list').className = 'member_list member_list2';
    }
})