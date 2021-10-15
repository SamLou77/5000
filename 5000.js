let kuo = {date:"2021/10/12 (二)",name:"國旅券",num:[21,32,98,67,97,410]};//國旅
let iyu = {date:"2021/10/12 (二)",name:"i原券",num:[64,85]};//i原
let non = {date:"	2021/10/13 (三)",name:"農遊券",num:[89,32,54,597,453,152]};//農遊券
let efun_e = {date:"	2021/10/13 (三)",name:"藝fun券[數位]",num:[96,15,07,30,73,98,19,11]};//藝fun數位
let efun = {date:"	2021/10/13 (三)",name:"藝fun券",num:[39,37,23,36,79,08,14,75]};//藝fun
let don = {date:"2021/10/14 (四)",name:"動滋券",num:[97,13,19,55,71,93,381,734,644,453,985]};//動滋2.0
let kj = {date:"2021/10/14 (四)",name:"客庄券",num:[81,900]};//客庄
let difun = {date:"2021/10/15 (五)",name:"地方創生券",num:[081,105,594,188,089,396,521,467,912,798,358,441,367,41,335]};//地方創生



let arr = [];

//組成arr
arr.push(kuo,iyu,non,efun_e,efun,don,kj,difun);

const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
let str = "";
btn.addEventListener("click",function(){
    //click清空str
    str="";
    let ipt = document.querySelector(".ipt");
    if(ipt.value ==""){
        alert("請輸入身分證後三碼");
        return;
    }


    //券陣列
    arr.forEach(function(item,index){
        //console.log(item.num);
        let date,name,num;
        date = item.date;
        name = item.name;

        //數字陣列
        let numArr = item.num;
        numArr.forEach(function(item,index){
            
            //輸入值等於數字陣列顯示
            if(ipt.value == item){
                num = item;
                str += `<li>中獎日期:${date} ,中獎票券:${name}, 中獎號碼:${num}</li>`;
            }

        });
      //console.log(num);

       
    });
    //console.log(str);
    if(str ==""){
        str = `<li>未中獎</li>`;
    }
     render();
});

//渲染頁面
function render(){

    list.innerHTML = str;
}