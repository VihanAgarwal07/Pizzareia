var menu_list_array = ["Veg Margherita Pizza",
                   "Chiken Tandoori Pizza",
                   "Veg Supreme Pizza",
                   "Paneer Tikka Pizza",
                   "Deluxe Veg Pizza",
                   "Veg Extavanza Pizza"
                    ];
                    menu_list_array.sort();
var Menu_list_length =  menu_list_array.length ;                  

function getmenu(){
    
console.log(Menu_list_length);
    
var htmldata="";

htmldata="<ol class='menulist'>";
for(var i = 0;i<menu_list_array.length;i++){
htmldata=htmldata+"<li>"+ menu_list_array[i]+"</li>";
}
htmldata=htmldata+"</ol>";
    
document.getElementById("display_menu").innerHTML=htmldata;
//Complete the code
}

function add_item(){
var htmldata="";
var item=document.getElementById("add_item").value;
htmldata="<section class='cards'>";
for(var i = 0;i<menu_list_array.length;i++){
htmldata=htmldata+"<div class='card'>"+"<img src='images/pizzaImg.png'>"+ menu_list_array[i]+"</div>";
}
htmldata=htmldata+"</section>";
document.getElementById("display_addedmenu").innerHTML=htmldata;
//Complete the code

}

function addtop(){
//Complete the code
var topping_name = document.getElementById("add_item").value;
menu_list_array.push(topping_name);
}