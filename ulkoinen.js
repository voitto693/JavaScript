
function pvm() {

    var inp = document.getElementById("myInput")

    inp.setAttribute("type", "date")
}



function väri(asetettava) {

    if (asetettava === "ruskea") {

        document.getElementById("sivu").style.backgroundColor = 'burlywood'
    }
    else {
        document.getElementById("sivu").style.backgroundColor = 'aquamarine'
    }
}


function metodi1(toimenpide, huomiot) {

    if (toimenpide === "in") {
        let x = "Ikä 64v, Ammatti: Sekatyömies"
        document.getElementById("a").innerText = x
    }
    else {
        document.getElementById("a").innerText = ''
    }
}

function metodi2(toimenpide) {
    if (toimenpide === "in") {
        let x = "Ikä 51v, Ammatti: Kalastaja"
        document.getElementById("b").innerText = x
    }
    else {
        document.getElementById("b").innerText = ''
    }

}
function metodi3(toimenpide) {
    if (toimenpide === "in") {

        let x = "Ikä 44v, Ammatti: Metallimies"
        document.getElementById("c").innerText = x
    }
    else {
        document.getElementById("c").innerText = ''
    }

}
