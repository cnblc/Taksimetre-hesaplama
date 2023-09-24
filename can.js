function hesapla() {

    var km = document.getElementById('km').value;


    var hesap = 18 + (km * 15);

    document.getElementById('sonuc').innerHTML = hesap;
}