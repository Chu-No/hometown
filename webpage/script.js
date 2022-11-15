const left_btn = document.getElementById('left_btn')
const right_btn = document.getElementById('right_btn')

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
    if(slide_num == "member_list member_list0"){
        document.getElementById('member_list').className = 'member_list member_list1';
    }else if(slide_num == "member_list member_list1"){
        document.getElementById('member_list').className = 'member_list member_list2';
    }
})

window.addEventListener('scroll', () => {
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	let windowHeight = window.innerHeight; // 스크린 창
	let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
    let perHeight = (scrollLocation)/(fullHeight-windowHeight) * 100
    
    document.getElementById('alt-bar').style.width=perHeight+"%"
})