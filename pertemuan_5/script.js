// var a = 10;

// let b = 20;

// const c = 30; //1 block saja

// console.log(c / 3 * 100);

// var int = 5;
// var float = 5.5;

// var string = "Halo ";
// var string2 = "Pagi";

// console.log(string + string2);

// penjumlahan
var a = 10;
var b = 90;

var hasil = a + b;
console.log(hasil + a + b);

//pengurangan
var a = 10;
var b = 90;

var hasil = a + b;
console.log(hasil - a - b);

//perkalian
var a = 10;
var b = 90;

var hasil = a + b;
console.log(hasil * b);

//pembagian
var a = 10;
var b = 90;

var hasil = a + b;
console.log(hasil / a);

//modulus
var a = 90;
var b = 90;
var c = 7;

var hasil = a + b;
console.log(hasil % c);

//array
var array = [1,2,3,4,5];
console.log(array);     //manggil semua
console.log(array[2]); //manggil 1 doang

var data = ["Ncull","Jakarta","28 September 2003"]
console.log(data);
console.log(data[0]);

//object
var obj = {nama: "Ncull", nim: "696969", alamat: "jalan antah berantah"}
console.log(obj);      //manggil semua
console.log(obj.nama); //manggil salah satu doang


//control flow (perintah kondisional/perintah berulang)

//if else
var angka = prompt('Masukan angka woy : ');
if (angka == "4") {
    alert('User memasukan angka 4')
} else {
    alert('User tidak memasukan angka 4')
}

//or
var num = prompt('Masukan angka woy : ');
if (num == "4" || num == "50") {
    alert('User memasukan angka ' + num);
} else {
    alert('User tidak memasukan angka 4 atau 50')
}

//and
var input = prompt('Masukan angka woy : ');
if (input == "4" && input == "50") {
    alert('User memasukan angka ' + input);
} else {
    alert('User tidak memasukan angka 4 atau 50')
}

//function (blok code terorganisir yang dapat digunakan kembali dan dapat digunakan untuk melakukan tindakan atau action)

function test(){
    var total;

    total = a + b;
}

console.log( 10, 20 );