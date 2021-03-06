document.addEventListener("DOMContentLoaded", () => {
    const btnLinkAcc = document.querySelectorAll(".link-acc-box");
    const modal = document.querySelector(".modal");
    const modalOverlay = document.querySelector(".modal__overlay");
    const modalBody = document.querySelector(".modal__body");
    const modalBodyBox = document.querySelector(".modal__body-box");
    const menuBars = document.querySelector(".menu-bars");
    const menuBarsOverlay = document.querySelector(".menu-bars-overlay");
    const menuBarsBtnMenu = document.querySelector(".btn--menu");
    const menuBarsBtnClose = document.querySelector(".btn-close");
    const headerCartBox = document.querySelector(".header__cart-box");
    const headerCartProducts = document.querySelector(".header__cart-products");
    const btnBack = document.querySelector(".btn--back");
    
    let btnPrev = document.querySelectorAll(".btn--prev");
    let cartBox = document.querySelector(".header__cart-box");
    let number = Number(cartBox.getAttribute("data-count"));
    // console.log(cartBox.getAttribute("data-count"));
    // number.setAttribute("data-count", 1);
    const btnSearch = document.querySelector(".fas.fa-search");
    const btnArrowBack = document.querySelector(".fas.fa-arrow-left");
    const headerSearchBox = document.querySelector(".header__search-box");

    const btnPrevFront = btnPrev[0];
    const btnPrevBack = btnPrev[1];
    

    const modalAccFront = document.querySelector(".modal__acc--front");
    const modalAccBack = document.querySelector(".modal__acc--back");



    const btnLoginForm = document.querySelector(".btn--login-form");
    const btnRegisForm = document.querySelector(".btn--regis-form");

    btnLoginForm.addEventListener("click", () => {
        

        modalBodyBox.classList.toggle("modal__body-rotate");
        // modalBodyBox.classList.remove("modal__body-rotate--reverse");

    });
    btnRegisForm.addEventListener("click", () => {
       

        modalBodyBox.classList.toggle("modal__body-rotate");
        // modalBodyBox.classList.add("modal__body-rotate--reverse");
    });
    // console.log(aniCollapse);
    btnLinkAcc[0].addEventListener("click", () => {
        modalAccFront.classList.remove("modal__acc--rotate");
        modalAccBack.classList.add("modal__acc--rotate");

        modal.classList.add("show");
        modalBody.classList.add("ani-zoom");
        modalBody.classList.remove("ani-collapse"); 


    })
    btnLinkAcc[1].addEventListener("click", () => {
        modalAccFront.classList.add("modal__acc--rotate");
        modalAccBack.classList.remove("modal__acc--rotate");
        
        modal.classList.add("show");
        modalBody.classList.add("ani-zoom");
        modalBody.classList.remove("ani-collapse");

        
    })

    btnPrev.forEach( (item) => {
        item.addEventListener("click", () => {
            showAniCollapse();
          
        })
    })

    modalOverlay.addEventListener("click", () => {
        showAniCollapse();
    });
    
    let showAniCollapse = () => {
        modalBody.classList.add("ani-collapse");

        // let aniCollapse = document.querySelector(".ani-collapse");
        // modalAccFront.classList.remove("modal__acc--rotate");

        setTimeout( () => {
            modal.classList.remove("show");
            modalBody.classList.remove("ani-zoom");
            modalBodyBox.classList.remove("modal__body-rotate");
            modalAccBack.classList.remove("modal__acc--rotate");
            modalBody.classList.remove("ani-collapse");

        },200);
    }
    
    
      if(modal) {
          document.addEventListener("keydown", (e) => {
              if(e.keyCode === 27) {
               // console.log("true")
               showAniCollapse();
              }
          }) 

      }
      // Xử lý nút search trong revolution mobile
    btnSearch.addEventListener("click", () => {
        headerSearchBox.classList.toggle("sm-hide")
        
    })
    btnSearch.addEventListener("blur", (e) => {
        console.log(e)
    })
    btnArrowBack.addEventListener("click", (e) => {
        headerSearchBox.classList.toggle("sm-hide")
    })    

    menuBarsBtnMenu.addEventListener("click", (e) => {
        menuBars.classList.remove("menu-bars-hide");
        menuBars.classList.add("menu-bars-show");
        menuBarsOverlay.style.display = "block";

    })
    menuHide = () => {
        menuBars.classList.add("menu-bars-hide");
        menuBars.classList.remove("menu-bars-show");
        const menuBarsHide = document.querySelector(".menu-bars-hide");
        menuBarsOverlay.style.display = "none";

    }
    menuBarsOverlay.addEventListener("click", () => {
        menuHide();
    })
    menuBarsBtnClose.addEventListener("click", () => {
        menuHide();
    })
   

    
        headerCartBox.addEventListener("click", () => {
            if(window.innerWidth < 1023) {
                headerCartProducts.style.display = "block";
            }
            else {
                return;
            }
        })
        
        btnBack.addEventListener("click", (e) => {
            e.stopPropagation();
            headerCartProducts.style.display = "none";
        })

},false);