function Chilonzor() {
    let chilonzor = ["Olmazor", "Chilonzor", "Mirzo Ulug'bek", "Novza", "Milliy bog'", "Xalqlar do'stligi", "Paxtakor", "Mustaqillik maydoni", "Amir Temur xiyoboni", "Hamid Olimjon", "Pushkin", "Buyuk Ipak yo'li"];
    document.querySelector(".title").textContent = "Chilonzor";
    
    let about = [
        "<h3 class=\"nameStation\">Olmazor bekati</h3>\
        <p class=\"malumot\">Olmazor metro bekati Toshkent metropoliteni bekatlaridan biridir. Olmazor bekati Choshtepa va Chilonzor bekatlari oraligʻida joylashgan. Bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining birinchi uchastkasi tarkibi sifatida ishga tushirilgan. Ichki devorlariga granit, marmardan foydalanilgan. Pannolardan birida Sobir Rahimov gorelyefi bor. Bekat yaqinida Toshkent Avtovokzal joylashgan.</p>\
        <p class=\"memor\">Platforma rassomlari: Xabibulin Ozad Garifovich <br>\
        Jmakin Valentin Ivanovich </p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Olmazor+metro+bekati/@41.2565413,69.1959752,15z/data=!4m6!3m5!1s0x38ae8bf5b0cd6a43:0xb6e3ed77cecf3287!8m2!3d41.2565413!4d69.1959752!16s%2Fg%2F11y1hs1qk_?entry=ttu\">olmazor</a></p>",
        "<h3 class=\"nameStation\">Chilonzor bekati</h3>\
        <p class=\"malumot\">Chilonzor metro bekati Toshkent metropolitenining eng gavjum bekatlaridan biridir. Chilonzor bekati Olmazor va Mirzo Ulug'bek bekatlari oraligʻida joylashgan. Bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining ikkinchi uchastkasi tarkibi sifatida ishga tushirilgan. Bekat yaqinida Nizomiy nomidagi Toshkent Pedagogika Universiteti joylashgan.</p>\
        <p class=\"memor\">Platforma me'morlari: Petuxova Iraida Georgiyevna <br>\
        Strelkov Aleksandr Fyodorovich</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Chilonzor/@41.274201,69.204918,15z/data=!4m6!3m5!1s0x38ae8a22aef832e1:0x3d31c578e1a8e50a!8m2!3d41.274201!4d69.204918!16s%2Fm%2F0jwy02c?entry=ttu\">chilonzor</a></p>",
        "<h3 class=\"nameStation\">Mirzo Ulug'bek bekati</h3>\
        <p class=\"malumot\">Mirzo Ulug'bek metro bekati Toshkent metropoliteni bekatlaridan biridir. Mirzo Ulug'bek bekati Chilonzor va Novza bekatlari oraligʻida bo'lib, bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining uchinchi uchastkasi tarkibi sifatida ishga tushirilgan. Bekat atrofida \"Bunyodkor\" stadioni hamda G'afur G'ulom nomidagi istirohat bog'i joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Mirzo+Ulug'bek/@41.282139,69.212341,15z/data=!4m6!3m5!1s0x38ae8a39afee8311:0xd4d7c921c43ef229!8m2!3d41.282139!4d69.212341!16s%2Fm%2F0jwr2s5?entry=ttu\">mirzo ulugbek</a></p>",
        "<h3 class=\"nameStation\">Novza bekati</h3>\
        <p class=\"malumot\">Novza bekati Toshkent metropoliteni bekatlaridan biridir. Novza bekati Mirzo Ulug'bek va Milliy bog' bekatlari oraligʻida bo'lib, bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining 4-uchastkasi tarkibi sifatida ishga tushirilgan.Bekat nomi 2015-yil 16-iyundan boshlab Toshkent shahar hokimligi tomonidan \"Hamza\" nomi o'rniga \"Novza\" deb o'zgartirilgan. Bekat yaqinida Novza jom'e masjidi qad rostlagan.</p>\
        <p class=\"memor\">Platforma me'morlari: A. Loshkaryov, A. Xurshudov, G. Chernov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Novza+metro/@41.291117,69.2230672,15z/data=!4m2!3m1!1s0x0:0xf017142235cbbb8?sa=X&ved=1t:2428&ictx=111\">novza</a></p>",
        "<h3 class=\"nameStation\">Milliy bog' bekati</h3>\
        <p class=\"malumot\">Milliy bog' bekati Toshkent metropoliteni bekatlaridan biridir. Milliy bog' bekati Novza va Xalqlar do'stligi bekatlari oraligʻida bo'lib, bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining 5-uchastkasi tarkibi sifatida ishga tushirilgan. Avvalgi nomlari: «Комсомольская» (1977-1992), «Yoshlik» (1992-2005) Bekat yaqinida O'zbekiston Milliy bog'i joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Milliy+Bog'/@41.303309,69.23568,15z/data=!4m6!3m5!1s0x38ae8ba966c0cdbf:0xe69be7522d8208da!8m2!3d41.303309!4d69.23568!16s%2Fm%2F0jwrdl6?entry=ttu\">milliy bog</a></p>",
        "<h3 class=\"nameStation\">Xalqlar do'stligi bekati</h3>\
        <p class=\"malumot\">Xalqlar do'stligi bekati Toshkent metropoliteni bekatlaridan biridir. Xalqlar do'stligi bekati Milliy bog' va Paxtakor bekatlari oraligʻida bo'lib, bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining 6-uchastkasi tarkibi sifatida ishga tushirilgan. Bekat yaqinida Xalqlar do'stligi san'at saroyi va Tashkent City Congress Hall joylashgan.</p>\
        <p class=\"memor\">Platforma me'morlari: U. Rahimov, V. Murodov, G. Galeeva</p>\
        <p> class=\"loc\"Lokatsiya: <a href=\"https://www.google.com/maps/place/Xalqlar+Do'stligi/@41.312046,69.243129,15z/data=!4m2!3m1!1s0x0:0xb2d2bdd029eeec98?sa=X&ved=1t:2428&ictx=111\">xalqlar dostligi</a></p>",
        "<h3 class=\"nameStation\">Paxtakor bekati</h3>\
        <p class=\"malumot\">Shu yerdan O'zbekiston yo'lining Alisher Navoiy bekatiga o'tiladi. Toshkent metropolitenining eng gavjum bekatlaridan biridir. Paxtakor bekati Xalqlar do'stligi va Mustaqillik maydoni bekatlari oraligʻida bo'lib, bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining 7-uchastkasi tarkibi sifatida ishga tushirilgan. Bekat yaqinida O'zbekiston Milliy teleradiokompaniyasining binosi joylashgan.</p>\
        <p class=\"memor\">Rassomlar: V.A. Jarskiy, D.A. Burmakin</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D0%9F%D0%B0%D1%85%D1%82%D0%B0%D0%BA%D0%BE%D1%80/@41.3176482,69.2526256,16z/data=!4m6!3m5!1s0x38ae8b13c362cf23:0xf891b8402f0f05d9!8m2!3d41.317761!4d69.255222!16s%2Fm%2F0jwx6f8?entry=ttu\">paxtakor</a></p>",
        "<h3 class=\"nameStation\">Mustaqillik maydoni bekati</h3>\
        <p class=\"malumot\"> Toshkent metropolitenining bekatlaridan biridir. Mustaqillik maydoni bekati Paxtakor va Amir Temur xiyoboni bekatlari oraligʻida joylashgan. Bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining 8-uchastkasi tarkibi sifatida ishga tushirilgan. Bekat yaqinida Mustaqillik maydoni va Yoshlar Ijod saroyi qad rostlagan.</p>\
        <p class=\"memor\">Platforma me'morlari: Leon Tigranovich Adamov, Sobir Rahimovich Odilov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Mustaqillik+maydoni/@41.315012,69.27109,15z/data=!4m6!3m5!1s0x38ae8b3b50823165:0xa5cbadc900d5ecec!8m2!3d41.315012!4d69.27109!16s%2Fm%2F0jwtjls?entry=ttu\">mustaqillik maydoni</a></p>",
        "<h3 class=\"nameStation\">Amir Temur xiyoboni bekati</h3>\
        <p class=\"malumot\">Shu yerdan Yunusobod yo'lining Yunus Rajabiy bekatiga o'tiladi. Toshkent metropolitenining gavjum bekatlaridan sanaladi. Amir Temur xiyoboni bekati Mustaqillik maydoni va Hamid Olimjon bekatlari oraligʻida joylashgan. Bekat <mark>1977-yilning 6-noyabr</mark>ida Chilonzor yo`lining 9-uchastkasi tarkibi sifatida ishga tushirilgan. Bekat yaqinida Amir Temur xiyoboni, Temuriylar tarixi davlat muzeyi, O'zbekiston mehmonxonasi, Toshkent davlat yuridik universiteti joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D0%90%D0%BC%D0%B8%D1%80+%D0%A2%D0%B5%D0%BC%D1%83%D1%80+%D2%B2%D0%B8%D1%91%D0%B1%D0%BE%D0%BD%D0%B8/@41.312765,69.283501,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b2c64aa3d0f:0xba59bc80197d4da8!8m2!3d41.312765!4d69.283501!16s%2Fm%2F0jwtkyq?entry=ttu\">amir temur xiyoboni</a></p>",
        "<h3 class=\"nameStation\">Hamid Olimjon bekati</h3>\
        <p class=\"malumot\">Toshkent metropolitenining bekatlaridan sanaladi. Hamid Olimjon bekati Amir Temur xiyoboni va Pushkin bekatlari oraligʻida joylashgan. Bekat <mark>1980-yilning 18-avgust</mark>ida Chilonzor yo`lining 11-uchastkasi tarkibi sifatida ishga tushirilgan. Bekatda bir nechta panno bo'lib, bittasida Hamid Olimjon gorelyefi bor. Bekat yaqinida Xalq bankining Mirzo Ulug'bek filiali va Sergey Yesenin muzeyi joylashgan.</p>\
        <p class=\"memor\">Platforma me'morlari: Ya. Mansurov, V. Rusanov, A. Tabibov, X. Ubaydullayev</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Hamid+Olimjon/@41.3182632,69.2957455,17z/data=!4m6!3m5!1s0x38aef4d19a1409b9:0x2a532a4038fed1d9!8m2!3d41.318102!4d69.295588!16s%2Fm%2F0jwtjn0?entry=ttu\">hamid olimjon</a></p>",
        "<h3 class=\"nameStation\">Pushkin bekati</h3>\
        <p class=\"malumot\">Toshkent metropolitenining bekatlaridan sanaladi. Pushkin bekati Hamid Olimjon va Buyuk Ipak yo'li bekatlari oraligʻida joylashgan. Bekat <mark>1980-yilning 18-avgust</mark>ida Chilonzor yo`lining 12-uchastkasi tarkibi sifatida ishga tushirilgan. Bekatdan uncha uzoq bo'lmagan masofada Toshkent Oliy Umumqo'shin Qo'mondonlik bilim yurti va Hindistonning O'zbekistondagi elchixonasi joylashgan.</p>\
        <p class=\"memor\">Platforma me'morlar va rassomlari: Lipene Irena Yuozo, Leon Tigranovich Adamov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD/@41.3186854,69.3060849,16z/data=!4m6!3m5!1s0x38aef4dd50a47a87:0xfc50d1bfd9b0cce1!8m2!3d41.321989!4d69.311106!16s%2Fm%2F0jwwf79?entry=ttu\">Pushkin</a></p>",
        "<h3 class=\"nameStation\">Buyuk Ipak yo'li bekati</h3>\
        <p class=\"malumot\">Toshkent metropolitenining so'nggi bekati sanaladi. Bekatdan avval Pushkin bekati joylashgan. Bekat <mark>1980-yilning 18-avgust</mark>ida Chilonzor yo`lining 12-uchastkasi tarkibi sifatida ishga tushirilgan. Platforma devorlari Maksim Gorkiyning \"Dankoning alangali yuragi\" asarini aks ettirgan barelyef bilan bezatilgan. Poli marmar va granitdan tayyorlangan. 1997-yil 1-maygacha rus adibi Maksim Gorkiy nomi bilan atalgan. Shu va Pushkin bekatlari orasida Jahon iqtisodiyoti va diplomatiya universiteti joylashgan</p>\
        <p class=\"memor\">Platforma me'morlar: Sobir Rahimovich Odilov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/1543140965/?ll=69.328762%2C41.326105&tab=overview&z=16\">buyuk ipak yuli</a></p>",
    ]

    

    topBar(chilonzor)
    bottomBar(about)
    // bottomBar(about)
}
function Uzbekiston() {
    let uzbekiston = ["Do'stlik", "Mashinasozlar","Toshkent","Oybek","Kosmonavtlar","O'zbekiston","Alisher Navoiy","G'afur G'ulom","Chorsu","Tinchlik","Beruniy"];
    document.querySelector(".title").textContent = "O'zbekiston";
    topBar(uzbekiston)
}
function Yunusobod() {
    let yunusobod = ["Ming o'rik", "Yunus Rajabiy","Abdulla Qodiriy","Minor","Bodomzor","Shahriston","Yunusobod","Turkiston"];
    document.querySelector(".title").textContent = "Yunusobod";
    topBar(yunusobod)
}
function Sergeli() {
    let sergeli = ["Choshtepa","O'zgarish","Sergeli","Yangihayot","Chinor"];
    document.querySelector(".title").textContent = "Sergeli";
    topBar(sergeli)
}
function Yerusti() {
    let yerusti = ["Texnopark","Yashnabod","Tuzel","Olmos","Rohat","Yangiobod","Qo'yliq","Matonat","Qiyot","Tolariq","Xonobod","Quruvchilar","Turon","Qipchoq"];
    document.querySelector(".title").textContent = "Yer usti";
    topBar(yerusti)
}

function bottomBar(line) {
    let stations = document.querySelectorAll("#topBar p")
    let topbar = document.querySelector("#topBar");
    stations.forEach((el, index) => {
        el.addEventListener("click", () => {
            topbar.innerHTML = " ";
            topbar.innerHTML = line[index];
        })
    })
}
function topBar(line) {
    let topbar = document.querySelector("#topBar");
    let topBar = document.querySelector(".topBar");
    topBar.style.transform = "translateY(0%)"
    for (let i = 0; i < line.length; i++){
        topbar.innerHTML += `\
        <p id="bekat">${line[i]}</p>`
    }
    return topbar;
}

function blanktopBar() {
    let topbar = document.querySelector("#topBar");
    let topBar = document.querySelector(".topBar");
    topBar.style.transform = "translateY(-100%)"
    topbar.innerHTML = " ";
    return topbar;
}
function blankbottomBar() {
    let topbar = document.querySelector("#bottomBar");
    let topBar = document.querySelector(".bottomBar");
    topBar.style.transform = "translateY(100%)"
    topbar.innerHTML = " ";
    return topbar;
}
function buttonsEvent() {
    let buttons = document.querySelectorAll("nav #btn")
    let title = document.querySelector(".title")
    let lines = ["Chilonzor", "O'zbekiston", "Yunusobod", "Sergeli", "Yer usti"];
    let functionsLine = [Chilonzor, Uzbekiston, Yunusobod,Sergeli, Yerusti]
    buttons.forEach((element, index) => {
        element.addEventListener("click", functionsLine[index])
    });
}
buttonsEvent()