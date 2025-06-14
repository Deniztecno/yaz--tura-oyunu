// Tura ve yazı sayılarını oluştur ve başlangıçta sıfırla
let tura = 0;
let yazi = 0;

// HTML'de bulunan coin, flip butonu ve reset butonunu seç
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// Flip butonuna tıklandığında
flipBtn.addEventListener("click", () => {
    // Rastgele 0 veya 1 sayısını seçer
    let i = Math.floor(Math.random() * 2);
    // Coin animasyonunu geçici olarak kapat
    coin.style.animation = "none";
    if (i) {
        // Eğer i 1 ise (tura), 100 milisaniye sonra coine flip-tura animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
    } else {
        // Eğer i 0 ise (yazi), 100 milisaniye sonra spin-yazi animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
    }

    // İstatistikleri güncelle ve butonu devre dışı bırak 
    setTimeout(updateStats, 3000);
    disableButton();
});

// İstatistikleri güncelleme fonksiyonu
function updateStats() {
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

// Butonu geçici olarak devre dışı bırakma fonksiyonu
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}

// Resetleme işlemi
resetBtn.addEventListener("click", () => {
    // Coin animasyonu kapatılacak ve yazılar sıfırlanacak
    coin.style.animation = "none";
    tura = 0;
    yazi = 0;
    updateStats();
});
