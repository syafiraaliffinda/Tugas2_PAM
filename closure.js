let teks = 'ini adalah sebuah variabel global'

function printText(){
    console.log(teks)
}

printText()
teks = 'Mengubah Variabel Global yang Pertama'

printText()
teks = 'Mengubah Variabel Global yang Kedua'

printText()