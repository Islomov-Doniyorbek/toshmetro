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

    let about = [
        "<h3 class=\"nameStation\">Do'stlik bekati</h3>\
        <p class=\"malumot\">Shu yerdan Yer usti halqa yo'lining Texnopark bekatiga o'tiladi. Do'stlik - Toshkent metropolitenining Oʻzbekiston yoʻlidagi eng janubiy bekatdir. Do'stlik bekati Mashinasozlar bekatidan keyin joylashgan. Bekat <mark>1987-yilning 7-noyabr</mark>ida ishga tushirilgan va 2012-yilning 5-oktabrgacha sovet sinovchi-uchuvchisi Valeriy Chkalov sharafiga Chkalov deb nomlangan. Ikkita yer osti vestibyuliga ega. Vestibyul va zinalari oq marmardan, poli qora granitdan ishlangan. Bekat atrofida Texnopark, Boku kinoteatri va GM Uzbekistan mexanika zavodi joylashgan.</p>\
        <p class=\"memor\">Platforma me'morlari: O. Aydinova, D. Dashkevich, B. Qurbonxoʻjayev</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Dustlik/@41.293769,69.322328,15z/data=!4m6!3m5!1s0x38aef56d16726835:0xe7342311e994f042!8m2!3d41.293769!4d69.322328!16s%2Fm%2F0j_3k56?entry=ttu\">dostlik</a></p>",
        "<h3 class=\"nameStation\">Mashinasozlar bekati</h3>\
        <p class=\"malumot\">Mashinasozlar - Toshkent metropolitenining Oʻzbekiston yoʻlidagi 2-bekat. Do'stlik va Toshkent bekati oralig'ida joylashgan. Bekat <mark>1987-yilning 7-noyabr</mark>ida ishga tushirilgan va 1992-yilgacha \"Сельмашская\" deb nomlangan. Vestibyuldan yer osti oʻtish joyining devorlari shaffof marmar bilan bezatilgan. Zalning ustunlari va shiftlari qizil-yashil rangdagi Sayon-Shusha marmarlari bilan bezatilgan. Shisha elektr lampalari quyma yoʻl bilan tayyorlangan boʻlib, ular zalning markaziy qismidagi shiftlarga oʻrnatilgan. Lampalar zinapoyalar va platformalarning yon devorlarida ham davom etgan hamda vestibyulda badiiy kompozitsiya bilan yakunlangan Bekat atrofida Temiryo'l shifoxonasi, Ashxobod bog'i, Toshkent don mahsulotlari zavodi joylashgan.</p>\
        <p class=\"memor\">Platforma rassomlari: V.Gan</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Mashinasozlar/@41.298955,69.305237,15z/data=!4m6!3m5!1s0x38aef53b9e3afc17:0xa853034d4c2c89a4!8m2!3d41.298955!4d69.305237!16s%2Fm%2F0j_5ny_?entry=ttu\">mashinasozlar</a></p>",
        "<h3 class=\"nameStation\">Toshkent bekati</h3>\
        <p class=\"malumot\">Toshkent - Oʻzbekiston yoʻlidagi 3-bekat. Mashinasozlar va Oybek bekati oralig'ida joylashgan. Bekat <mark>1984-yilning 8-dekabr</mark>ida ishga tushirilgan bo'lib, Toshkent temiryo'l vokzali sharafiga nom berilgan. Bekat atrofida Toshkent shimoliy vokzali joylashgan. </p>\
        <p class=\"memor\">Platforma rassomlari: Sultonmurodov va O.Habibulin</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82/@41.293163,69.287635,15z/data=!4m2!3m1!1s0x0:0xadbe6610c10e8588?sa=X&ved=1t:2428&ictx=111\">toshkent</a></p>",
        "<h3 class=\"nameStation\">Oybek bekati</h3>\
        <p class=\"malumot\">Shu yerdan Yunusobod yo'lining Ming o'rik bekatiga o'tiladi. Oybek - Oʻzbekiston yoʻlidagi 4-bekat. Toshkent va Kosmonavtlar bekati oralig'ida joylashgan. Bekat <mark>1984-yilning 8-dekabr</mark>ida ishga tushirilgan bo'lib, o'zbek adibi Oybek sharafiga nom berilgan. Bekat atrofida Toshkent Farmatsevtika instituti va Toshkent Sharqshunoslik instituti joylashgan. </p>\
        <p class=\"memor\">Platforma rassomlari: F. Muzaffarova</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Oybek/@41.2983828,69.2730715,15z/data=!4m6!3m5!1s0x38ae8adaff0e9a97:0x10b15ea1f02d5d0!8m2!3d41.2983828!4d69.2730715!16s%2Fm%2F0j_479h?entry=ttu\">oybek</a></p>",
        "<h3 class=\"nameStation\">Kosmonavtlar bekati</h3>\
        <p class=\"malumot\">Kosmonavtlar - Oʻzbekiston yoʻlidagi 5-bekat. Toshkent va Kosmonavtlar bekati oralig'ida joylashgan. Bekat <mark>1984-yilning 8-dekabr</mark>ida ishga tushirilgan. 1992-yilgacha \"Проспект Космонавтов\" deb nomlangan. Bekat atrofida Oʻzbekiston Respublikasi Ichki ishlar vazirligi, Islom Karimov memorial majmuasi joylashgan. </p>\
        <p class=\"memor\">Platforma rassomlari: Sergo Mixaylovich Sutyagin, Sergey Sokolov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Kosmonavtlar/@41.305193,69.26477,15z/data=!4m6!3m5!1s0x38ae8b2020878009:0x90f60f5cf233ff60!8m2!3d41.305193!4d69.26477!16s%2Fm%2F0jz_dr2?entry=ttu\">kosmonavtlar</a></p>",
        "<h3 class=\"nameStation\">O'zbekiston bekati</h3>\
        <p class=\"malumot\">O'zbekiston - Oʻzbekiston yoʻlidagi 6-bekat. Kosmonavtlar va Alisher Navoiy bekati oralig'ida joylashgan. Bekat <mark>1984-yilning 8-dekabr</mark>ida ishga tushirilgan. Bekat atrofida Oʻzbekiston davlat konservatoriyasi, Oʻzbekiston Respublikasi Prezidenti devoni Oʻzbekiston Respublikasi Iqtisodiyot vazirligi Toshkent davlat iqtisodiyot universiteti joylashgan. </p>\
        <p class=\"memor\">Platforma rassomlari: A. Tabibov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/O'zbekiston/@41.312187,69.253483,15z/data=!4m2!3m1!1s0x0:0x8a726bd3277791f2?sa=X&ved=1t:2428&ictx=111\">ozbekiston</a></p>",
        "<h3 class=\"nameStation\">Alisher Navoiy bekati</h3>\
        <p class=\"malumot\">shu yerdan Chilonzor yo'lining Paxtakor bekatiga o'tiladi. Alisher Navoiy bekati - Oʻzbekiston yoʻlidagi 7-bekat. O'zbekiston va G'afur G'ulom bekati oralig'ida joylashgan. Bekat <mark>1984-yilning 8-dekabr</mark>ida ishga tushirilgan. Bekat atrofida Navoiy teatri\
        Toshkent arxitektura va qurilish instituti\
        Oʻzbekiston yoshlar ittifoqi\
        Oʻzbekiston Respublikasi Sogʻliqni saqlash vazirligi\
        Toshkent islom universiteti\
        Davlat mulk qo'mitasi\
        Qurilish vazirligi\
        Davlat soliq qo'mitasi\
        Oʻzmevasabzavoturugʻ sanoat\
        O‘zbekiston matbuot va axborot agentligi\
        Toshkent kimyo-texnologiya instituti joylashgan. </p>\
        <p class=\"memor\">Platforma rassomlari: Ahmarov Chingiz Gabdurahmonovich</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Alisher+Navoi/@41.318852,69.254292,15z/data=!4m6!3m5!1s0x38ae8b12e8e1416b:0xcb67e6da1b81dea8!8m2!3d41.318852!4d69.254292!16s%2Fm%2F0jzthcv?entry=ttu\">alisher navoiy</a></p>",
        "<h3 class=\"nameStation\">G'afur G'ulom bekati</h3>\
        <p class=\"malumot\">G'afur G'ulom  bekati - Oʻzbekiston yoʻlidagi 8-bekat. Alisher Navoiy va Chorsu bekati oralig'ida joylashgan. O'zbek adibi G'afur G'ulom sharafiga nomlangan. Bekat <mark>1987-yilning 4-noyabr</mark>ida ishga tushirilgan. Bekat atrofida Abdulla Qodiriy istirohat bogʻi, Sirk joylashgan</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D2%92%D0%B0%D1%84%D1%83%D1%80+%D2%92%D1%83%D0%BB%D0%BE%D0%BC/@41.327824,69.246107,15z/data=!4m2!3m1!1s0x0:0x4f62d5ff05a9a3dd?sa=X&ved=1t:2428&ictx=111\">gafur gulom</a></p>",
        "<h3 class=\"nameStation\">Chorsu bekati</h3>\
        <p class=\"malumot\">Chorsu  bekati - Oʻzbekiston yoʻlidagi 9-bekat. G'afur G'ulom va Tinchlik bekati oralig'ida joylashgan. Qadimiy bozor Chorsu sharafiga nomlangan. Bekat <mark>1987-yilning 6-noyabr</mark>ida ishga tushirilgan. Bekat atrofida Chorsu bozori, Ko'kaldosh madrasasi joylashgan</p>\
        <p class=\"memor\">Platforma rassomlari: A.Xurshidov, S.Kozimov.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D0%A7%D0%BE%D1%80%D1%81%D1%83/@41.325964,69.236996,15z/data=!4m2!3m1!1s0x0:0xf1fa57a92d7d70e3?sa=X&ved=1t:2428&ictx=111\">chorsu</a></p>",
        "<h3 class=\"nameStation\">Tinchlik bekati</h3>\
        <p class=\"malumot\">Tinchlik - Oʻzbekiston yoʻlidagi 10-bekat. Chorsu va Beruniy bekati oralig'ida joylashgan. Bekat <mark>1991-yilning 30-aprel</mark>ida ishga tushirilgan. Bekat atrofida G'uncha kinoteatri va Registon to'yxonasi joylashgan</p>\
        <p class=\"memor\">Platforma rassomlari: Ya. Mansurov, S. Kozimov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Tinchlik/@41.33239,69.218991,15z/data=!4m2!3m1!1s0x0:0xd7e4152cf179f0bf?sa=X&ved=1t:2428&ictx=111\">tinchlik</a></p>",
        "<h3 class=\"nameStation\">Beruniy bekati</h3>\
        <p class=\"malumot\">Beruniy - Oʻzbekiston yoʻlidagi 11-oxirgi bekat. Tinchlik bekatidan so'ng joylashgan. Bekat <mark>1991-yilning 30-aprel</mark>ida ishga tushirilgan. Abu Rayhon Beruniy sharafiga nomlangan. Bekatdan Mirzo Ulugʻbek nomidagi Oʻzbekiston Milliy universiteti, Islom Karimov nomidagi Toshkent davlat texnika universiteti, Toshkent tibbiyot akademiyasi, Italiyaning Toshkentdagi Turing politexnika universiteti, Oʻzbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi, Oʻzbekiston Respublikasi Innovatsiyalar vazirligi, Talabalar shaharchasi, Shifokorlar shaharchasi, Respublika ixtisoslashtirilgan Onkologiya ilmiy-amaliy tibbiyot markazi, Respublika sud tibbiyot byurosi, Respublika ixtisoslashtirilgan Urologiya ilmiy-amaliy tibbiyot markazi, Toshkent tibbiyot akademiyasi 1 va 2 klinikasi, Respublika Patologik anatomiya ilmiy-amaliy tibbiyot markazi, Beruniy koʻchasi, Ibn Sino mavzesi, Farobiy koʻchasi, Qoraqamish mavzesi, Respublika ixtisoslashtirilgan Pediatriya ilmiy-amaliy tibbiyot markazi, Respublika ixtisoslashtirilgan koʻz mikroxirurgik tibbiyot markazi, Toshkent shahar 1-sonli sil kasalliklari shifoxonasi, Moskva energetika universiteti, Milliy tadqiqot instituti Toshkent shahri filiali, Respublika oʻrta-maxsus va dorishunos hodimlar I malakasini oshirish va ularni ixtisoslashtirish markazi, Kichik xalqa yoʻli koʻchasi, AKFA xususiy klinikasi, Axmatxoʻja ota bogʻi, Xuvaydo mahalla fuqarolar yigʻini, Gʻalaba bogʻi, Beltepa mavzesi va yana boshqa muhim maskanlarga borish uchun qulay hisoblanadi.</p>\
        <p class=\"memor\">Platforma rassomlari: F. Muzaffarova, A. Tabibov</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Beruniy/@41.344694,69.206178,15z/data=!4m6!3m5!1s0x38ae8c10cd58b901:0x42835c8e24a158e5!8m2!3d41.344694!4d69.206178!16s%2Fm%2F0jwz14p?entry=ttu\">beruniy</a></p>",
    ]



    topBar(uzbekiston)
    bottomBar(about)
}
function Yunusobod() {
    let yunusobod = ["Ming o'rik", "Yunus Rajabiy","Abdulla Qodiriy","Minor","Bodomzor","Shahriston","Yunusobod","Turkiston"];
    document.querySelector(".title").textContent = "Yunusobod";


    let about = [
        "<h3 class=\"nameStation\">Ming o'rik bekati</h3>\
        <p class=\"malumot\">Shu yerdan O'zbekiston yo'lining Oybek bekatiga o'tiladi. Yunusobod yo'lining birinchi bekati. Bekat <mark>2001-yilning 26-oktabr</mark>ida ishga tushirilgan. 2 vestibyul va 1 platformadan iborat. Kumushrang marmar bilan bezatilgan. Bekat yaqinida Toshkent Davlat Sharqshunoslik instituti joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Ming+O'rik/@41.29942,69.274052,15z/data=!4m6!3m5!1s0x38ae8ada6a4b6c31:0x7794b1efd79f4631!8m2!3d41.29942!4d69.274052!16s%2Fm%2F0j_4vks?entry=ttu\">mingorik</a></p>",
        "<h3 class=\"nameStation\">Yunus Rajabiy bekati</h3>\
        <p class=\"malumot\">Shu yerdan Chilonzor yo'lining Amir Temur xiyoboni bekatiga o'tiladi. Yunusobod yo'lining ikkinchi bekati. Taniqli bastakor Yunus Rajabiy sharafiga nomlangan. Ushbu Toshkent metropolitenining eng chuqur bekati bo'lib, chuqurligi 24 metrni tashkil qiladi. Bekat <mark>2001-yilning 26-oktabr</mark>ida ishga tushirilgan. 2 vestibyul, 1 platformadan iborat. Suv toshqinini oldini olish uchun 19 ta drenaj quvurlari o'tkazilgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Yunus+Rajabiy/@41.313824,69.283462,15z/data=!4m6!3m5!1s0x38ae8b2c41a6e2b7:0x3d86e66b2e541532!8m2!3d41.313824!4d69.283462!16s%2Fm%2F0j_2vqz?entry=ttu\">yunusrajabiy</a></p>",
        "<h3 class=\"nameStation\">Abdulla Qodiriy bekati</h3>\
        <p class=\"malumot\">Yunusobod yo'lining uchinchi bekati. XX asr O'zbek adibi Abdulla Qodiriy sharafiga nomlangan. Bekat <mark>2001-yilning 26-oktabr</mark>ida ishga tushirilgan. Bekat 2ta yerosti vestibyulidan iborat. Platformasi 4 qirrali marmar ustunlardan iborat. Bekatdan Oloy bozoriga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%D0%90%D0%B1%D0%B4%D1%83%D0%BB%D0%BB%D0%B0+%D2%9A%D0%BE%D0%B4%D0%B8%D1%80%D0%B8%D0%B9/@41.32017,69.281839,15z/data=!4m6!3m5!1s0x38ae8b31800bc0e5:0x19bce56374482eb!8m2!3d41.32017!4d69.281839!16s%2Fm%2F0jzr68r?entry=ttu\">abdullaqodiriy</a></p>",
        "<h3 class=\"nameStation\">Minor bekati</h3>\
        <p class=\"malumot\"> Yunusobod yo'lining to'rtinchi bekati. Bekat <mark>2001-yilning 26-oktabr</mark>ida ishga tushirilgan. Bekat atrofida Kommunal xizmatlar vazirligi, Toshkent metropoliteni idorasi, Toshkent moliya instituti, Vatanparvar markaziy idorasi joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Minor+bekati/@41.327477,69.284134,15z/data=!4m2!3m1!1s0x0:0x7edf3d5081c792f3?sa=X&ved=1t:2428&ictx=111\">minor</a></p>",
        "<h3 class=\"nameStation\">Bodomzor bekati</h3>\
        <p class=\"malumot\"> Yunusobod yo'lining beshinchi bekati. Bekat <mark>2001-yilning 26-oktabr</mark>ida ishga tushirilgan. Bekat yaqinida Oʻzbekiston milliy banki, Oʻzbekiston Respublikasi Favqulodda vaziyatlar vazirligi, Uztelecom, Toshkent Axborot Texnologiyalari Universiteti, Oʻzekspomarkaz joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/search?sca_esv=d43f5111e59e559f&sxsrf=ACQVn0-BsuvxyYCJ0u2x0AYAo18S_v0hBw:1713372574871&q=bodomzor+bekati&npsic=0&rflfq=1&rldoc=1&rllag=41329539,69290549,1301&tbm=lcl&sa=X&ved=2ahUKEwj_osWd2smFAxX6KhAIHYulB8kQtgN6BAgXEAE&biw=1366&bih=657&dpr=1\">bodomzor</a></p>",
        "<h3 class=\"nameStation\">Shahriston bekati</h3>\
        <p class=\"malumot\"> Yunusobod yo'lining oltinchi bekati. Bekatning nomi 2015-yilgacha \"Habib Abdullayev\" nomi bilan atalgan. Bekat nomi Toshkent shahar hokimligi tomonidan 2015-yil 16-iyunda „Shahriston“ deb oʻzgartirildi. Bekat <mark>2001-yilning 26-oktabr</mark>ida ishga tushirilgan. Bekat yaqinida Toshkent teleminorasi, Qatagʻon qurbonlari xotirasi muzeyi, Shahidlar xotirasi yodgorlik majmui joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/search?sca_esv=d43f5111e59e559f&sxsrf=ACQVn08AjzcoZ5aPVxKnstvVh4KYMPDLTA:1713372927191&q=shahriston+bekati+loc&npsic=0&rflfq=1&rldoc=1&rllag=41353646,69288305,64&tbm=lcl&sa=X&ved=2ahUKEwiupMXF28mFAxWmJBAIHaUfAtAQtgN6BAgVEAE&biw=1366&bih=657&dpr=1\">shahriston</a></p>",
        "<h3 class=\"nameStation\">Yunusobod bekati</h3>\
        <p class=\"malumot\"> Yunusobod yo'lining yettinchi bekati. Bekat <mark>2020-yilning 29-avgust</mark>ida ishga tushirilgan. Bekat ustunli, ikki oraliqli, sayoz, Toshkent metrosining egri platformali yagona bekati, ikkita yer osti vestibyulli. Bekat dizayni platforma markazida bir qator relyef ustunlari bilan noyob qiyalik uslubida qurilgan. Kirish qismida Toshkentning zamonaviy va qadimiy qiyofasini aks ettiruvchi oyna koʻrinishidagi rasmlar oʻrnatilgan. Platformaning devorlarida oltita ekran kompozitsiyasi mavjud. Bekat yaqinida Yunusobod dehqon bozori ,MegaPlanet savdo majmuasi joylashgan. <br>&nbsp; Bekat haqida fakt <br> - 2019-yil 18-dekabrda bekat qurilishida yon devorning qulab tushishi oqibatida avariya holati kelib chiqqan. Hodisa joyiga huquq-tartibot organlari xodimlari, qutqaruchilar, shifokorlar yetib kelishgan, qidiruv-qutqaruv ishlari boshlangan. Hodisaga, birinchidan kuchli yomgʻir natijasida beton devorning orasiga suv toʻplanib, yaxshi mustahkamlanmagan devor ogʻirlik oqibatida qulab tushgani, ikkinchidan avtomobil qatnovi toʻxtatilmagani oqibatida yerdagi tebranish devorni qotirishga halal bergani aytildi. 19-dekabr kuni qutqaruv yakunlandi. Qurbonlar soni 6ta ekani aytildi.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Yunusobod/@41.366782,69.292293,15z/data=!4m2!3m1!1s0x0:0x4083426f1436fe42?sa=X&ved=1t:2428&ictx=111\">yunusobod</a></p>",
        "<h3 class=\"nameStation\">Turkiston bekati</h3>\
        <p class=\"malumot\"> Yunusobod yo'lining 8-oxirgi bekati. Bekat <mark>2020-yilning 29-avgust</mark>ida ishga tushirilgan. Bekat yaqinida Yunusobod dehqon bozori ,MegaPlanet savdo majmuasi joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Turkiston+bekati/@41.3587047,69.2995873,15z/data=!4m2!3m1!1s0x0:0xf07ebc34bccb0da?sa=X&ved=1t:2428&ictx=111\">turkiston</a></p>",
    ]
    topBar(yunusobod)
    bottomBar(about)
}
function Sergeli() {
    let sergeli = ["Choshtepa","O'zgarish","Sergeli","Yangihayot","Chinor"];
    document.querySelector(".title").textContent = "Sergeli";

    let about = [
        "<h3 class=\"nameStation\">Choshtepa bekati</h3>\
        <p class=\"malumot\">Sergeli yo'lining 1-bekati. Chilonzor yo'lining Olmazor bekati bilan bevosita ulangan. Bekat <mark>2020-yilning 26-dekabr</mark>ida ishga tushirilgan. Bekat Yer ustida joylashgan. Bekatdan Choshtepa jome masjidi, Wellmax Invest LLC, Sardor Avto Invest, 11-poliklinikaga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/1-Bekat/@41.1912434,69.1885713,15z/data=!4m6!3m5!1s0x38ae61f42669cb9b:0x519ff4c5975042d4!8m2!3d41.238101!4d69.196244!16s%2Fg%2F11dzt0d8zz?entry=ttu\">choshtepa</a></p>",
        "<h3 class=\"nameStation\">O'zgarish bekati</h3>\
        <p class=\"malumot\">Sergeli yo'lining 2-bekati. Sergeli va Choshtepa bekatlari oralig'ida, Yer ustida joylashgan. Bekat <mark>2020-yilning 26-dekabr</mark>ida ishga tushirilgan. Bekat Toshkent halqa yoʻli koʻchasidan o'tgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/search?q=o%27zgarish+metro+bekati&sca_esv=63c115a30e488880&sxsrf=ACQVn0_2HljMN-QlcK9iJG2DnvhHvm8p8Q%3A1713435928361&ei=GPUgZqvaFd7OwPAPr4mfgAs&udm=&oq=obekati&gs_lp=Egxnd3Mtd2l6LXNlcnAiB29iZWthdGkqAggCMgYQABgHGB4yBhAAGAcYHjIIEAAYBxgKGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IqRxQiwVYiwVwAngAkAEAmAGKAaABigGqAQMwLjG4AQHIAQD4AQGYAgGgApgBmAMAiAYBkgcDMC4xoAeCBQ&sclient=gws-wiz-serp\">ozgarish</a></p>",
        "<h3 class=\"nameStation\">Sergeli bekati</h3>\
        <p class=\"malumot\">Sergeli yo'lining 3-bekati. O'zgarish va Yangihayot bekatlari oralig'ida, Yer ustida joylashgan. Bekat <mark>2020-yilning 26-dekabr</mark>ida ishga tushirilgan. Bekatdan Alaviya va Mirzo Tursunzoda koʻchalariga chiqish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/search?sca_esv=63c115a30e488880&sxsrf=ACQVn0-NzRqODdfoRBJSv4prcfmPd0n1xg:1713436631522&q=sergeli+bekati&npsic=0&rflfq=1&rldoc=1&rllag=41211183,69240349,1805&tbm=lcl&sa=X&ved=2ahUKEwicgZHuyMuFAxXlGBAIHexBCVAQtgN6BAgWEAE&biw=1366&bih=657&dpr=1\">sergeli</a></p>",
        "<h3 class=\"nameStation\">Yangihayot bekati</h3>\
        <p class=\"malumot\">Sergeli yo'lining 4-bekati. Sergeli va Chinor bekatlari oralig'ida, Yer ustida joylashgan. Bekat <mark>2020-yilning 26-dekabr</mark>ida ishga tushirilgan. Bekatdan Shokirariq koʻchasi va Mirzo Tursunzoda koʻchasi chiqish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/4-Bekat/@41.213437,69.214078,15z/data=!4m2!3m1!1s0x0:0xd1821cf604f62813?sa=X&ved=1t:2428&ictx=111\">yangihayot</a></p>",
        "<h3 class=\"nameStation\">Yangihayot bekati</h3>\
        <p class=\"malumot\">Sergeli yo'lining 5-oxirgi bekati. Yer ustida joylashgan. Bekat <mark>2020-yilning 30-avgust</mark>ida ishga tushirilgan. Bekatdan Mirzo Tursunzoda koʻchasi chiqish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/search?sca_esv=63c115a30e488880&sxsrf=ACQVn08Z9hnhjnZkPmUdtYD7Ftt1OBNeSQ:1713436968304&q=chinor+bekati+location&npsic=0&rflfq=1&rldoc=1&rllag=41301407,69243992,4355&tbm=lcl&sa=X&ved=2ahUKEwiKxNyOysuFAxWaFxAIHa6IAv8QtgN6BAgWEAE&biw=1366&bih=657&dpr=1\">Chinor</a></p>",
    ]
    topBar(sergeli)
    bottomBar(about)
}
function Yerusti() {
    let yerusti = ["Texnopark","Yashnabod","Tuzel","Olmos","Rohat","Yangiobod","Qo'yliq","Matonat","Qiyot","Tolariq","Xonobod","Quruvchilar","Turon","Qipchoq"];
    document.querySelector(".title").textContent = "Yer usti";

    let about = [
        "<h3 class=\"nameStation\">Texnopark bekati</h3>\
        <p class=\"malumot\">Shu yerdan O'zbekiston yo'lining Do'stlik bekatiga o'tiladi. Yer usti yo'lining 1-bekati. Bekat <mark>2020-yilning 30-avgust</mark>ida ishga tushirilgan. Bekat 2023-yilning 25-noyabrgacha Do'stlik-2 bekati deb nomlangan. Bekatdan Texnopark, Doʻstlik bogʻi chiqish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Do'stlik-2/@41.294657,69.323377,15z/data=!4m2!3m1!1s0x0:0x10773a3cd5c4658e?sa=X&ved=1t:2428&ictx=111\">texnopark</a></p>",
        "<h3 class=\"nameStation\">Yashnobod bekati</h3>\
        <p class=\"malumot\">Halqa yo'lining 2-bekati. 1-oktabr 2017-yilda qurilish boshlangan bo'lib,  2020-yil 3-fevralda tugallangan. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan Ohangaron yoʻli,Aviasozlar-4 dahasi, Tuzel-1 dahasi, Toshkent aviasozlar kolleji</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/3814671300/?ll=69.349739%2C41.297678&tab=overview&z=16\">yashnobod</a></p>",
        "<h3 class=\"nameStation\">Tuzel bekati</h3>\
        <p class=\"malumot\">Halqa yo'lining 3-bekati. 1-oktabr 2017-yilda qurilish boshlangan bo'lib,  2020-yil 3-fevralda tugallangan. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Yashnobod tumanida Ohangaron yoʻli, Birlashgan, Cho’lpon, Beshariq ko’chalari kesishmasida joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/3814673680/?ll=69.356210%2C41.291997&tab=overview&z=16\">tuzel</a></p>",
        "<h3 class=\"nameStation\">Olmos bekati</h3>\
        <p class=\"malumot\">Halqa yo'lining 4-bekati. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. 2023-yil 9-avgust kuni qabul qilingan 349-sonli hukumat qarori bilan bekatga „Olmos“ nomi berilgan Bekat yaqinida	Ohangaron yoʻli koʻchasi, Iltifot koʻchasi, Koreya madaniyat markazi, Majburiy ijro byurosi joylashgan.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/3814676760/?ll=69.360287%2C41.281878&tab=overview&z=16\">olmos</a></p>",
        "<h3 class=\"nameStation\">Rohat bekati</h3>\
        <p class=\"malumot\">Halqa yo'lining 5-bekati. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan	Ohangaron yoʻli, Toshkent halqa avtomobil yoʻli, Artel (shirkat), „Rohat“ avtosaloni, sobiq „Baxt“ koʻliga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/3814683730/?ll=69.364814%2C41.265410&tab=overview&z=16\">rohat</a></p>",
        "<h3 class=\"nameStation\">Yangiobod bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 6-bekati. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan	Toshkent halqa avtomobil yoʻli, Tolariq ko’chasi, Yangiobod buyum bozori, Qo'yliq asfalt-beton zavodiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/4098118629/?ll=69.358646%2C41.256463&tab=overview&z=16\">yangiobod</a></p>",
        "<h3 class=\"nameStation\">Qo'yliq bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 7-bekati. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan	Toshkent halqa avtomobil yoʻli, Fargʻona yoʻli koʻchasi, Bektemir koʻchasi, Qo'yliq dehqon bozori, „Compas“ savdo majmuasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/4098124439/?ll=69.327306%2C41.237495&tab=overview&z=16\">qoyliq</a></p>",

        "<h3 class=\"nameStation\">Matonat bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 8-bekati.  Bekat <mark>2023-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan Toshkent halqa avtomobil yoʻli, Baraka koʻchasi, Bektemir koʻchasi, Qoʻyliq 4-dahasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/5092117536/?ll=69.308332%2C41.244474&tab=overview&z=16\">matonat</a></p>",
        "<h3 class=\"nameStation\">Qiyot bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 9-bekati. Bekat <mark>2023-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan Qoʻyliq 5-dahasi, 12-poliklinika, Ittifoq koʻchasi, Yangi Qoʻyliq koʻchasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/5092045426/?ll=69.299642%2C41.244476&tab=overview&z=16\">qiyot</a></p>",
        "<h3 class=\"nameStation\">Tolariq bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 10-bekati. Bekat <mark>2023-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan Qoʻyliq 6-dahasi, Toshkent halqa avtomobil yoʻli, Yangi Qoʻyliq koʻchasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/5092106826/?ll=69.285086%2C41.244518&tab=overview&z=16\">tolariq</a></p>",
        "<h3 class=\"nameStation\">Xonobod bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 11-bekati. Bekat <mark>2023-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan Nurli yoʻl koʻchasi, Nurli hayot koʻchasi, Xonobod koʻchasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/5092135316/?ll=69.273606%2C41.232305&tab=overview&z=16\">xonobod</a></p>",
        "<h3 class=\"nameStation\">Quruvchilar bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 12-bekati. Bekat <mark>2023-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Bekatdan Nurli yoʻl koʻchasi, Nurli hayot koʻchasi, Xonobod koʻchasi, Qurilish koʻchasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/%22Quruvchilar%22+metro+bekati/@41.2217926,69.2466767,15z/data=!4m6!3m5!1s0x38ae61fbac6ec353:0x263959231c6272e1!8m2!3d41.2214375!4d69.2599375!16s%2Fg%2F11vj1g0g9j?entry=ttu\">quruvchilar</a></p>",
        "<h3 class=\"nameStation\">Turon bekati</h3 >\
        <p class=\"malumot\">Halqa yo'lining 13-bekati. Bekat <mark>2023-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Biroq texnik sabablarga ko'ra, bekat faoliyati to'xtatilgan. 2024-yilning 11-martidan boshlab, yo'lovchilarga xizmat qilib kelmoqda. Bekatdan Yangi Sergeli ko'chasi, Qipchoq ko'chasi va Sofdil ko'chasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://yandex.uz/maps/10335/tashkent/stops/5282732256/?ll=69.231871%2C41.209822&tab=overview&z=16\">turon</a></p>",
        "<h3 class=\"nameStation\">Qipchoq bekati</h3 >\
        <p class=\"malumot\">Shu yerdan CHilonzor yo'lining Chinor bekatiga o'tiladi. Halqa yo'lining 14-bekati. Bekat <mark>2020-yilning 30-avgust</mark>ida foydalanishga topshirilgan. Biroq texnik sabablarga ko'ra, bekat faoliyati to'xtatilgan. 2024-yilning 11-martidan boshlab, yo'lovchilarga xizmat qilib kelmoqda. Bekatdan Qipchoq koʻchasi, Mirzo Tursunzoda koʻchasiga borish mumkin.</p>\
        <p class=\"loc\">Lokatsiya: <a href=\"https://www.google.com/maps/place/Qipchoq+bekati/@41.2054785,69.2215031,15z/data=!4m2!3m1!1s0x0:0xd71d7cffd9e53512?sa=X&ved=1t:2428&ictx=111\">qipchoq</a></p>",
    ]
    topBar(yerusti)
    bottomBar(about)
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