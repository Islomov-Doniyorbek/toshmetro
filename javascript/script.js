function aside() {
    let asidebar = document.querySelector("aside")
    let asidebarBtn = document.querySelector("#asidebar")
    let btnI = asidebarBtn.querySelector(".fa-navicon")
    let i = 0;
    asidebarBtn.onclick = () => {
        i++;
        asidebar.classList.toggle("aside");
        if (i % 2 != 0) {
            btnI.classList.remove("fa-navicon");
            btnI.classList.toggle("fa-close");            
        } else if(i%2==0){
            btnI.classList.remove("fa-close");
            btnI.classList.toggle("fa-navicon");  
        }
        // console.log(i);
    }
}
aside()

function href() {
    let urls = [
        "./index.html",
        "/chilonzor/ch.html",
        "/uzbekiston/uz.html",
        "/yunusobod/yun.html",
        "/sergeli/ser.html",
        "/yerusti/yer.html",
    ]

    let btns = document.querySelectorAll("#btn")
    btns.forEach((e,i) => {
        e.onclick = () => {
            location.href = urls[i]
        }
    })
}

// href()