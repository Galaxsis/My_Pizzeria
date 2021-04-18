menu_list_array = [
    "Chicken Tandoori Pizza",
    "Chicken Overload Pizza",
    "Pepperoni Pizza",
    "Meatzza Pizza",
    "Veggie Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
]
function getmenu()
{
    var htmldata;
    var i=0;
    htmldata = "<ol class = 'menulist'>"
    menu_list_array.sort();
        for(var i = 0;i<menu_list_array.length;i++){
            htmldata=htmldata+ '<li>' + menu_list_array[i] + '</li>'
        }
    htmldata=htmldata+"<ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item()
{
    var htmldata;
    var i=0;
    var item = document.getElementById("addtoppings").value;
        menu_list_array.push(item);
        menu_list_array.sort();
            htmldata="<section class = 'cards'>"
                for(var i=0;i<menu_list_array.length;i++){
                    htmldata=htmldata+'<div class="card">'+'<img src="pizzaimg.png"/>'+menu_list_array[i]+'</div>'
                }
            htmldata=htmldata+"</section>"
            document.getElementById("display_addedmenu").innerHTML=htmldata;
}