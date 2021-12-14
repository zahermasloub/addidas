let navbar = document.querySelector(".navbar");
document.querySelector("#munu-btn").onclick = () => { 
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => { 
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
}
let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick = () => { 
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
}

///////////////       increase number state    /////////////////
let nums = document.querySelectorAll(".state .number");
let section = document.querySelector(".state");
let upTodown = document.querySelector(".moveUp");
let started = false;
window.onscroll = function () { 
    if (window.scrollY >= section.offsetTop  ) { 
        if (!started) { 
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    searchForm.classList.remove("active");
    if (this.scrollY >= 1000) { 
        upTodown.classList.add("show");
    }
    else 
    upTodown.classList.remove("show");
}

function startCount(el) { 
    let goal = el.dataset.goal;
    let count = setInterval(()=> { 
        el.textContent++;
        if (el.textContent == goal) { 
            clearInterval(count);
        }
    },10)
}

ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal(' .heading',{delay: 500 , origin: 'left'});
ScrollReveal().reveal(' .row',{delay: 600 , origin: 'bottom'});
ScrollReveal().reveal(' .box-container',{delay: 700 , origin: 'bottom'});
ScrollReveal().reveal(' .container',{delay: 800 , origin: 'left'});

