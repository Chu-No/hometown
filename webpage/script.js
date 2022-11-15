const left_btn = document.getElementById('left_btn')
const right_btn = document.getElementById('right_btn')

// console.log("a")

// document.getElementById("left_btn").addEventListener("click", left_move);

// function left_move(){
//     console.log("a")
// }
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
// document.defaultView.style.getPropertyValue("---slide");