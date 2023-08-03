{
    let a = 5;
    let b = 7;

    a = 7
    b = 5
    console.log(a, b);
}


{
    let x = 5;
    let y = 7;
    let z = 40;
    z = (x * y) + y;
    console.log(x, y);

}

function square() {
    let a, area, perimeter;
    a = parseInt(document.getElementById("calc").value);
    area = a * a;
    perimeter = 4 * a;
    document.getElementById("area").innerHTML = "kvadratin sahesi:" + area;
    document.getElementById("perimeter").innerHTML = "kvadratin perimetri:" + perimeter;
}

function rectan() {
    let x, y, area, perimeter;
    x = parseInt(document.getElementById("length").value);
    y = parseInt(document.getElementById("height").value);
    area = x * y;
    perimeter = 2 * (x + y)
    document.getElementById("arena").innerHTML = "duzbucaqlinin sahesi:" + area;
    document.getElementById("perimetr").innerHTML = "duzbucaqlinin perimeteri:" + perimeter;
}

function register(c, d) {
    let c = urfankarim
    let d = 4177
    c === urfankarim && d === 4177 ? alert("success") : alert("something wrong")

    { document.getElementById("submit").innerHTML = "background-color:green" }
}