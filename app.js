function calculator(wight, hight) {
    if(isNaN(parseInt(wight) || parseInt(hight))) {
        return "กรุณากรอกตัวแปรค่า number :"
    }
    let bmi = parseInt(wight)/((parseInt(hight)/100)^2)
    return bmi.toFixed(2)
}
function display_showBMI(value) {
    document.getElementById("result-bmi").innerHTML = value

    let status;

    if(value >29.99){
        status = "อ้วนระยะสุดท้าย ลดด่วน!!";
    }
    else if(value > 24.99){
        status = "อวบจะอ้วนแร๊ว ลดดด่วนมาก!";
    }
    else if(value > 18.60){
        status = "สมส่วนสมชายชาตรี!!!";
    }
    else if(value >= 0.00){
        status = "ผมเกิลปุย กินข้าวบร้าน๊าาา";
    }
    document.getElementById("status-bmi").innerHTML = status;
}

