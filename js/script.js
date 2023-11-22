window.addEventListener('scroll', () => {
    const headerMain = document.querySelector('.header');
    
    if (window.pageYOffset > 2) {
        headerMain.classList.add('scrolled');
    } else {
        headerMain.classList.remove('scrolled');
    }
});




const swiperCardFlex = new Swiper('.card-flex', {
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2.1,
        },
        0: {
            slidesPerView: 1.1,
        }
    },
    navigation: {
        nextEl: '.card__explore'
    }
});

const swiperUserFlex = new Swiper('.users__card-flex', {
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2.1,
        },
        0: {
            slidesPerView: 1.1,
        }
    },
    navigation: {
        nextEl: '.user__explore'
    }
});

const swiperSellers = new Swiper('.top-sellers__swiper', {
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    },
    navigation: {
        nextEl: '.top-sellers__explore'
    }
});


let checkbox = document.getElementById('menu-toggle');
checkbox.onclick = () => {
    if (checkbox.checked) {
        document.body.style.overflow = 'hidden';
    } else{
        document.body.style.overflow = 'visible';
    }
}


function footerOpen(count) {
    const marketList = document.querySelector('.market-place'),
          collectList = document.querySelector('.collectibles'),
          suppList = document.querySelector('.support'),
          legList = document.querySelector('.legal'),
          followList = document.querySelector('.follow');
    switch(count) {
        case 1:
            if(marketList.classList[2]){
                marketList.classList.remove('open');
            } else {
                marketList.classList.add('open');
            }
            break;
        case 2:
            if(collectList.classList[2]){
                collectList.classList.remove('open');
            } else {
                collectList.classList.add('open');
            }
            break;
        case 3:
            if(suppList.classList[2]){
                suppList.classList.remove('open');
            } else {
                suppList.classList.add('open');
            }
            break;
        case 4:
            if(legList.classList[2]){
                legList.classList.remove('open');
            } else{
                legList.classList.add('open');
            }
            break;
        case 5:
            if(followList.classList[2]){
                followList.classList.remove('open');
            } else{
                followList.classList.add('open');
            }
            break;
        } 
}
  
  
setInterval(() => counters(), 1000);

function counters(){
    let hour, minutes, second;

    let countersArr = document.querySelectorAll('.seller-card__counter');

    for (let counter of countersArr) {        
        second = counter.children[2].firstElementChild.innerHTML
        minutes = counter.children[1].firstElementChild.innerHTML
        hour = counter.children[0].firstElementChild.innerHTML

        if (second - 1 >= 0) {
            counter.children[2].firstElementChild.innerHTML = second - 1
        } else if (minutes - 1 >= 0) {
            counter.children[2].firstElementChild.innerHTML = 60
            counter.children[1].firstElementChild.innerHTML = minutes - 1
        } else {
            counter.children[2].firstElementChild.innerHTML = 60
            counter.children[1].firstElementChild.innerHTML = 60
            counter.children[0].firstElementChild.innerHTML = hour - 1
        }
    }
}



function collectionBrandActive() {
    document.querySelector('.grid__brand').classList.add('active')
    document.querySelector('.grid__art').classList.remove('active')

    document.querySelector('.collection__brand').classList.add('active')
    document.querySelector('.collection__art').classList.remove('active')
}

function collectionArtActive() {
    document.querySelector('.grid__art').classList.add('active')
    document.querySelector('.grid__brand').classList.remove('active')

    document.querySelector('.collection__art').classList.add('active')
    document.querySelector('.collection__brand').classList.remove('active')
}



function ButtonActive(buttonNum) {
    let gridButton = document.querySelector('.collection__grid')

    for (let i = 0; i < 8; i++) {
        if (gridButton.children[i].firstElementChild.classList[2] = 'active') {
            gridButton.children[i].firstElementChild.classList.remove('active')
            document.querySelector('.collection__img').children[i].classList.remove('active')
        }
    }

    gridButton.children[buttonNum].firstElementChild.classList.add('active')
    document.querySelector('.collection__img').children[buttonNum].classList.add('active')

    document.querySelector('collection__img')
}