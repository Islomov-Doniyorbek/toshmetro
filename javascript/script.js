function Chilonzor() {
    let chilonzor = ["Olmazor", "Chilonzor", "Mirzo Ulug'bek", "Novza", "Milliy bog'", "Xalqlar do'stligi", "Paxtakor", "Mustaqillik maydoni", "Amir Temur xiyoboni", "Hamid Olimjon", "Pushkin", "Buyuk Ipak yo'li"];
    document.querySelector(".title").textContent = "Chilonzor";
    topBar(chilonzor)
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
    let els = topbar.querySelectorAll("p")
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