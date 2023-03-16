//1.


//2.
let angka1 = 20;
let angka2 = 7;
function myFunction(angka1, angka2){
   return angka1 + angka2
}
let output = myFunction(angka1, angka2);
console.log(output)

//3.

const hello = () => {return "hai"}
let out = hello();
console.log(out)
//4.

let object= {
   nama:"jhon",
   umur:22,
   bahasa:"indonesia"
   ,showName:function(){
      console.log(object.bahasa);
   }
}



//5
let arrayDaftarPerserta = ["jhon deo", "laki-laki", "baca buku", 1992]
let objectDaftarPerserta= {
   nama: arrayDaftarPerserta[0],
   jenisKelamin: arrayDaftarPerserta[1],
   hobi:arrayDaftarPerserta[2],
   lahir:arrayDaftarPerserta[3],
}
console.log(objectDaftarPerserta);


//6
const Buah = [{
   nama:`nanas`,
   adaBijinya:`tidak`,
   warna:'kuning',
   harga:'9000',
},
{
   nama:`jeruk`,
   warna:'oranye',
   adaBijinya:'ada',
   harga:'8000',
},
{
   nama:`semangka`,
   warna:'hijau & merah',
   adaBijinya:'ada',
   harga:'1000',
},
{
   nama:`pisang`,
   warna:'kuning',
   adaBijinya:'tidak',
   harga:'1200',
}
];

let berbiji = Buah.filter((Buah) => Buah.adaBijinya != 'ada' );
console.log(berbiji); 
  