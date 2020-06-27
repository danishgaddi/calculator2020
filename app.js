function result(num){
    var type = document.getElementById("type")
    type.value += num;
    // console.log(num)
}

function clearAll(){
    var type = document.getElementById("type")
    type.value = "";
    // console.log(type.value)
}



function getResult(){
    var type = document.getElementById("type")
    type.value = eval(type.value)
}

function back(){
    var result = document.getElementById("type");
    result.value = result.value.slice(0,-1)
}
