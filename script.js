// let sayiUret = Math.floor(Math.random() *10);
// let aralik = Number(prompt("Sayının hangi sayıya kadar oluşturulacağını giriniz: (Maksimum 30)"));
// let hak = Number(prompt("Kaç seferde tahmin edeceğinizi giriniz: (Maksimum 10)"));
// let tahmin,sayac =0;

// // sayiUret += Math.ceil(sayiUret*aralik);
// console.log(sayiUret);

// while(hak>0){
    
   
//     if (hak < sayiUret){ 
//     hak--;
//     sayac++;
//     tahmin = Number(prompt("Tahmininizi Giriniz: "));
//         if (hak>0 && sayiUret == tahmin){
//         // toplamSkor = 100-(100/hak)*(sayac-1);
//         // console.log(`Tebrikler ${sayac} defa bildiniz ve skorunuz: ${100-(100/hak)*(sayac-1)} `);
//         console.log(`${Number(100-(100/hak)*(sayac-1))}`);
//         console.log(hak);
//         console.log(sayac);
//         console.log(`Puan: ${100-(100/hak)*(sayac-1)}`);

//         break;
        
//     }else if(hak>0 && tahmin<sayiUret){
//         console.log("Tahmininiz Daha Yüksek Bir Sayı Olmalı")
//     }else if(hak>0 && tahmin>sayiUret){
//         console.log("Tahminininz daha düşük bir sayı olmalı.")
//     }
//     else{
//         console.log("Oyunu Kaybettiniz.");
//         hak = 0;
//     }
//     }
//     else{
//         console.log("Hakkınız girdiğiniz sayı değerinden büyük olamaz.");
       
//     }    
    
// }









// bu kodu aç
// let tekrarOyna = true;

// while (tekrarOyna) {
//     let aralik;
//     // Kullanıcıdan pozitif bir aralık değeri almak için döngü
//     while (true) {
//         aralik = prompt("Sayının hangi sayıya kadar oluşturulacağını giriniz: (Maksimum 50)");

//         // Girilen değerin bir sayı olup olmadığını kontrol etme
//         if (!isNaN(aralik) && parseInt(aralik) > 0 && parseInt(aralik) <= 50) {
//             aralik = parseInt(aralik); // Girilen string değeri sayıya dönüştürme
//             break;
//         }
//         console.log("Geçersiz bir aralık girdiniz. Lütfen 1 ile 50 arasında bir sayı girin.");
//     }
    
//     let sayiUret = Math.floor(Math.random() * aralik) + 1; // sayiUret, 1 ile aralik arasında olacak
//     let hak = Math.ceil(aralik * 0.50); // Tahmin hakkı oranını %50 olarak ayarlıyoruz

//     // Tahmin hakkını 10 ile sınırlama
//     if (hak > 10) {
//         hak = 10;
//     }

//     let sayac = 0;
//     let skor = 100; // Başlangıç skoru

//     console.log(`Oluşturulan sayı: ${sayiUret}`); // Sadece test için, gerçek oyunda bu satırı kaldırabilirsiniz
//     console.log(`Tahmin hakkınız: ${hak}`); // Kullanıcıya tahmin hakkını göster

//     let kazandi = false; // Oyunun kazanılıp kazanılmadığını kontrol etmek için bir değişken

//     while (hak > 0 && !kazandi) {
//         let tahmin = prompt("Tahmininizi Giriniz: ");

//         // Girilen değerin bir sayı olup olmadığını kontrol etme
//         if (isNaN(tahmin)) {
//             console.log("Geçersiz bir tahmin girdiniz. Lütfen bir sayı girin.");
//             continue; // Geçersiz tahmin girilirse, tekrar tahmin istemek için döngünün başına dön
//         }
        
//         tahmin = Number(tahmin);

//         // Negatif değer kontrolü (bu kontrol aslında gereksiz, çünkü tahmin rastgele oluşturuluyor)
//         if (tahmin < 0) {
//             console.log("Negatif bir sayı girdiniz. Lütfen pozitif bir sayı girin.");
//             continue; // Negatif sayı girilirse, tekrar tahmin istemek için döngünün başına dön
//         }

//         sayac++;

//         if (sayiUret === tahmin) {
//             skor -= (sayac - 1) * 10; // Her yanlış tahminde 10 puan kaybetme
//             if (skor < 0) {
//                 skor = 0; // Skorun negatif olmamasını sağla
//             }
//             console.log(`Tebrikler ${sayac} defa bildiniz ve skorunuz: ${skor}`);
//             kazandi = true; // Kazanıldı olarak işaretle
//         } else if (tahmin < sayiUret) {
//             console.log("Tahmininiz Daha Yüksek Bir Sayı Olmalı");
//         } else if (tahmin > sayiUret) {
//             console.log("Tahmininiz Daha Düşük Bir Sayı Olmalı");
//         }

//         hak--;

//         if (hak === 0 && !kazandi) { // Kazanılmadıysa ve tahmin hakkı sıfırsa
//             console.log("Oyunu Kaybettiniz.");
//         }
//     }

//     let tekrar = prompt("Tekrar oynamak ister misiniz? (evet/hayır)").toLowerCase();
//     // Kullanıcının "evet" veya "hayır" dışında bir değer girmesi durumunda tekrar sormak için döngüyü tekrarlat
//     while (tekrar !== "evet" && tekrar !== "hayır") {
//         console.log("Geçersiz bir değer girdiniz. Lütfen 'evet' veya 'hayır' girin.");
//         tekrar = prompt("Tekrar oynamak ister misiniz? (evet/hayır)").toLowerCase();
//     }

//     if (tekrar !== "evet") {
//         tekrarOyna = false;
//     }
// }


document.getElementById("basla-btn").addEventListener("click", function() {
    let aralik = parseInt(document.getElementById("aralik-input").value);
    let hak;
    if (isNaN(aralik) || aralik <= 0 || aralik > 50) {
        showError("Geçersiz Aralık", "Lütfen 1 ile 50 arasında bir sayı girin.");
        setTimeout(function() {
            hideError();
        }, 2000); // 2 saniye sonra hata mesajını gizle
        return;
    } else if (aralik > 20) {
        hak = 10;
    } else {
        hak = Math.ceil(aralik * 0.50); 
    }

    let sayiUret = Math.floor(Math.random() * aralik) + 1; 
    let sayac = 0;
    let skor = 100; 

    // console.log(`Oluşturulan sayı: ${sayiUret}`);
    // console.log(`Tahmin hakkınız: ${hak}`);

    let kazandi = false; 

    document.getElementById("game-container").style.display = "none";
    document.getElementById("tahmin-container").style.display = "block";

    let hakText = document.getElementById("hak-text");
    hakText.textContent = `Kalan Tahmin Hakkı: ${hak}`;

    let tahminBtn = document.getElementById("tahmin-btn");

    tahminBtn.addEventListener("click", function tahminFonksiyonu() {
        let tahmin = parseInt(document.getElementById("tahmin-input").value);

        if (isNaN(tahmin) || tahmin < 1 || tahmin > aralik) {
            showError("Geçersiz Tahmin", "Lütfen 1 ile aralık arasında bir sayı girin.");
            setTimeout(function() {
                hideError();
            }, 2000); // 2 saniye sonra hata mesajını gizle
            return;
        }

        sayac++;

        if (sayiUret === tahmin) {
            skor -= (sayac - 1) * 10;
            if (skor < 0) {
                skor = 0; 
            }
            let puan = 100 - (sayac - 1) * 10;
            // console.log(`Tebrikler ${sayac} kere deneyip bildiniz ve skorunuz: ${skor}`);
            // console.log(`Aldığınız Puan: ${puan}`);
            kazandi = true; 
            document.getElementById("tahmin-container").style.display = "none";
            document.getElementById("tebrikler-container").style.display = "block";
            document.getElementById("tebrikler-text").textContent = `Tebrikler ${sayac} defa bildiniz ve skorunuz: ${skor}`;
            document.getElementById("puan-text").textContent = `Aldığınız Puan: ${puan}`;
        } else if (tahmin < sayiUret) {
            showError("Yüksek Sayı Girildi", "Tahmininiz daha yüksek bir sayı olmalı.");
            setTimeout(function() {
                hideError();
            }, 7000); // 2 saniye sonra hata mesajını gizle
        } else if (tahmin > sayiUret) {
            showError("Düşük Sayı Girildi", "Tahmininiz daha düşük bir sayı olmalı.");
            setTimeout(function() {
                hideError();
            }, 7000); // 2 saniye sonra hata mesajını gizle
        }

        hak--;

        hakText.textContent = `Kalan Tahmin Hakkı: ${hak}`;

        if (hak === 0 && !kazandi) {
            showError("Oyun Bitti", `Üzgünüz, oyunu kazanamadınız.\nDoğru sayı ${sayiUret} idi.`);
            document.getElementById("tahmin-container").style.display = "none";
            document.getElementById("tekrar-dene-container").style.display = "block";
            document.getElementById("tekrar-dene-sayi").innerHTML = `<strong style="font-size:30px;">Oluşturulan Sayı ${sayiUret}'idi.<br><br>Tekrar denemek için butona basınız!</strong>`;
        }
    });

    document.getElementById("tekrar-dene-btn").addEventListener("click", function() {
        location.reload();
    });
});

function showError(baslik, mesaj) {
    let errorContainer = document.getElementById("error-container");
    let errorTitle = document.getElementById("error-title");
    let errorMessage = document.getElementById("error-message");

    errorTitle.textContent = baslik;
    errorMessage.textContent = mesaj;

    errorContainer.style.display = "block";
}

function hideError() {
    let errorContainer = document.getElementById("error-container");
    errorContainer.style.display = "none";
}
