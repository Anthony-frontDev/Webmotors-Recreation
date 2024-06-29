
// FIRST TIME MESSAGE CONTAINER

function FirstTimeMsg() {
    return document.querySelector(".first-time-login_container");
}

if(!sessionStorage.getItem("firstTimeAccess")) {
    sessionStorage.setItem("firstTimeAccess", true);
    FirstTimeMsg().style.display = "block";
} else {
    closeFirstTimeMsg();
}

function closeFirstTimeMsg() {
    FirstTimeMsg().style.display = "none";
}

// SEARCH BAR - CATEGORIES & STATES

document.querySelector("[searchBar]").addEventListener("submit", (e) => {
    e.preventDefault();
});

document.querySelector("[searchBar] #categorias").addEventListener("click", e => {
    const catChildren = Array.from(document.querySelector("[searchBar] #categorias").children);
    const [hCarros, hMotos, a1, a2] = catChildren;

    const logosContainer = document.querySelector(".logos-container");
    logosContainer.innerHTML = "";

    if(e.target == hCarros ||
       e.target == hMotos) {

           hCarros.classList.remove("active");
           hMotos.classList.remove("active");
       }


    if(e.target == hCarros) {
        hCarros.classList.add("active");
    }
    else if(e.target == hMotos) {hMotos.classList.add("active")}

    if(hCarros.classList.contains("active")) {
        // SET PARTNERS SECTION

        for(let i = 0; i < 4; i++) {
            const link = document.createElement("a");
            const div = document.createElement("div");
            const img = document.createElement("img");

            link.href = "#";
            link.classList.add("logo");
            logosContainer.appendChild(link);
            link.appendChild(div);

            switch(i) {
                case 0:
                    img.src = "./Assets/Logos/Carros/bmw.png";
                    img.alt = "BMW Logo";
                    div.appendChild(img);
                    document.querySelector(".logos-container .logo:nth-child(1)").href = "#BMW";
                break;
                case 1:
                    img.src = "./Assets/Logos/Carros/hyundai.png";
                    img.alt = "Hyundai Logo";
                    div.appendChild(img);
                    document.querySelector(".logos-container .logo:nth-child(2)").href = "#HYUNDAI";
                break;
                case 2:
                    img.src = "./Assets/Logos/Carros/nissan.png";
                    img.alt = "Nissan Logo";
                    div.appendChild(img);
                    document.querySelector(".logos-container .logo:nth-child(3)").href = "#NISSAN";
                break;
                case 3:
                    img.src = "./Assets/Logos/Carros/toyota.png";
                    img.alt = "Toyota Logo";
                    div.appendChild(img);
                    document.querySelector(".logos-container .logo:nth-child(4)").href = "#TOYOTA";
                break;
            }
        }
    }

    if(hMotos.classList.contains("active")) {
        // SET PARTNERS SECTION

        const link = document.createElement("a");
        const div = document.createElement("div");
        const img = document.createElement("img");

        link.href = "#TRIUMPH";
        link.classList.add("logo");
        logosContainer.appendChild(link);
        link.appendChild(div);

        img.src = "./Assets/Logos/triumph.png";
        img.alt = "Triumph Logo";
        div.appendChild(img);
    }
});

document.querySelector("[searchBar] #categorias h1:first-of-type").click();

document.querySelector("[searchBar] #estado").addEventListener("click", e => {
    const estChildren = Array.from(document.querySelector("[searchBar] #estado").children);

    if(e.target.tagName === "BUTTON") {
        estChildren.forEach(btn => {
            btn.classList.remove("active");
        });

        e.target.classList.add("active");
    }
});

