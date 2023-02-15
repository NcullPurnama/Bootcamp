//definisi DOM
//antar muka pemrograman untuk memanipulasi element HTML sehingga program dapat mengubah dan memanipulasi strukturnya

//////DOM selection

//getELementById()               -> untuk mengembalikan element HTML untuk dimanipulasi menggunakan JS DOM
//getElementByTagName()          -> mengembalikan HTML collection menggunakan tag
//getElementBy ClassName()       -> mengembalikan HTML collection menggunakan nama class
//querySelector()                -> mmengubah HTML tanpa menyentuh file HTMLnya
//querySelectorAll()             -> menghasilkan nodelist bukan html collection
//setAttribute()                 -> menambahkan attribute
//createElement()                -> menambahkan element baru
//addEventListener('mouseenter') -> event listener saat pointer mouse masuk kedalam objek
//addEventListener('mouseleave') -> event listener saat pointer mouse keluar objek


///////////////////////////getElementById()////////////////////////////////

// const judul = document.
// getElementById('judul')
// judul.style.color= 'green'
// judul.style.backgroundColor = 'red'
// judul.innerHTML = 'Tapi pakai bahasa indonesia'

// const judul = document.getElementById('judul')
// judul.innerHTML = '<img src= "https://play-lh.googleusercontent.com/N4xrvxasKOCSVU_ZTrSGLEqFEX_6n5MaNUbzD2Tl3giTPJUa9pMyjeasHIXAeGtv9A" width="100" > </img>'


///////////////////////getElementByTagName()//////////////////////////////

// const p = document.getElementsByTagName('p')
// p[0].style.backgroundColor = 'green' -> cuma buat 1 biji doang yang berwarna

//menggunakan forloop untuk membuat semua tag <p> menjadi berwarna
// for (let i = 0; i < p.length; i++) { 
//     if (i == 3) {
//         p[i].style.backgroundColor = "red";
//         p[i].innerHTML = 'Tidak berubah'
//     } else {
//         p[i].style.backgroundColor = "yellow";
//         p[i].innerHTML = 'Berubah'
//     }
// }

///////////////////////getElementByClassName()//////////////////////////////


// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'Berubah lagi'

// console.log(p1);

//////////////////////////querySelector()///////////////////////////////////

// const p4 = document.querySelector('#b p')
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'


////////////////////////querySelectorAll()/////////////////////////////////

// const allP = document.querySelectorAll('p')[2]
// allP.style.backgroundColor = 'black'
// allP.style.color = 'white'

// const li1 = document.querySelectorAll('li')[0]
// li1.style.backgroundColor = 'green'

////////////////////////element.setAttribute()/////////////////////////////////

// const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute ('class', 'juduls judul2')

//////////////////////////create.Element()////////////////////////////////////

// const judul = document.createElement('p')
// judul.innerHTML = 'ini element paragraf baru'
// document.body.appendChild(judul)

// const new_p = document.createElement('p')

// const new_text = document.createTextNode ('New Paragraph')

// new_p.appendChild(new_text)

// const SecA = document.getElementById('a')
// SecA.appendChild(new_p)


// const new_li = document.createElement('li')
// const li_new = document.createTextNode('Hitam shap')
// new_li.appendChild(li_new)

// const ul = document.querySelector('section#b ul')

// const li_2 = ul.querySelector('li:nth-child(4)')

// ul.insertBefore(new_li, li_2)

////menghapus element
// const p1 = document.getElementsByClassName('p1')[0]
//SecA.removeChild(p1)

const p3 = document.querySelector('.p3')
function change_color(){
    p3.style.backgroundColor = 'orange'
}

const p2 = document.querySelector('.p2')
function show_alert() {
    alert('Berhasil Klik paragraf 2')
}

const p1 = document.querySelector('.p1')
p1.onclick = show_alert;

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul')
    const li_new = document.createElement('li')
    const text = document.createTextNode('Item Baru')

    li_new.appendChild(text)
    ul.appendChild(li_new)

})

/////////event mouse enter

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'yellow'
    p3.innerHTML = 'Berubah'
})

/////////event mouse leave

p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white'
    p3.innerHTML = 'Balik'
})