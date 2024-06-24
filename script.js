

document.addEventListener('DOMContentLoaded', () => {
    // const scroll = new LocomotiveScroll(({
    //     el:document.querySelector('.main'),
    //     smooth: true,
    // }));

    // adding MAGNED class to all footer items
    const footerItems = document.querySelectorAll('.footer-items ul li')
    footerItems.forEach(item => {
        item.classList.add('magnet')
    })

    swiperAll();
    moreArrow();
    sheryJS();
    gsapAll();
    // hoverImg();
    FAQ();
    numberCounter();
    document.querySelector('.slide-menu').addEventListener('click', navSlide)
    document.querySelector('.more-arrow').addEventListener('click',moreArrow)
})

function moreArrow() {
  window.scrollTo({
    top:0,behavior:'smooth',
  })
}


function swiperAll() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 2000,
    })

    const swiperElement = document.querySelector('.swiper')
    swiperElement.addEventListener('mouseenter', () => {
        swiper.autoplay.stop()
    })
    swiperElement.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    })



}

function navSlide() {
    console.log('hello')
    const navslide = document.querySelector('.nav-slide')
    const option = document.querySelector('.slide-menu')
    const show = document.querySelector('.show')
    const hide = document.querySelector('.hide')
    const slideRight = document.querySelector('.slide-right')
    const slideLeft = document.querySelector('.slide-left')
    var target = option.getAttribute('data-target')
    console.log('target is', target)
    // // option.addEventListener('click', () => {
    if (target === 'show') {
        option.setAttribute('data-target', 'close')
        show.style.opacity = '0'
        hide.style.opacity = '1'
        slideLeft.style.transform = 'translateX(0%)'
        slideRight.style.transform = 'translateX(0%)'
        navslide.style.transform = 'translateX(0%)'
        // navSlide.style.transition = 'all 0.5s ease-in'
        slideLeft.style.transition = 'all 0.5s ease-in 0.5s'
        slideRight.style.transition = 'all 0.5s ease-in'
        slideLeft.style.opacity = '1'
        slideRight.style.opacity = '1'
        document.body.style.overflow = 'hidden'

    } else if (target === 'close') {
        option.setAttribute('data-target', 'show')
        show.style.opacity = '1'
        hide.style.opacity = '0'
        slideLeft.style.transform = 'translateX(200%)'
        slideRight.style.transform = 'translateX(100%)'
        navslide.style.transform = 'translateX(100%)'
        // navSlide.style.transition = 'all 0.5s ease-in'
        // navSlide.style.transition = 'all 0.5s ease 0.9s'
        slideLeft.style.transition = 'all 0.5s ease-in'
        slideRight.style.transition = 'all 0.5s ease-in 0.5s'
        slideLeft.style.opacity = '0'
        slideRight.style.opacity = '0'
        document.body.style.overflow = 'auto'
        // navslide.style.display = 'none'
    }
    // })


}


//   
//    
function sheryJS() {

    Shery.mouseFollower()

    Shery.textAnimate('.slide-con-text h2', {
        style: 2,
        y: 10,
        delay: 0.1,
        duration: 1,
        ease: 'cubic-bezier(0.23,1,0.320,1)',
        multiplier: 0.1,
    })

    Shery.makeMagnet(".magnet" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });



    Shery.hoverWithMediaCircle(".slide-con h1" /* Element to target.*/, {
        images: ["home-bg-2.jpg", "home-bg-3.jpg", "home-bg-1.jpg"] /*OR*/,
        //videos: ["video1.mp4", "video2.mp4"],
    });


}

function gsapAll() {
    // Set up all the scroll animations with ScrollTrigger instead
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()
    tl.from('.nav img', {
        y: 20,
        duration: 1,
        delay: 0.1,
        opacity: 0,
    })
    tl.from('.nav-item', {
        y: 20,
        duration: 1,
        delay: 0.1,
        opacity: 0,
        stagger: 0.3,
    })

    gsap.from('.slide-con', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.7,
    })

    gsap.from('.more-arrow', {
        y: 30,
        opacity: 0,
        duration: 2,
        delay: 1.7,
    })

    gsap.timeline({
        duration: 1,
        delay: 0.5,
        ease: 'expo.out',
        scrollTrigger: {
            trigger: 'body',
            // markers:true,
            start: 'top -10%',
            end: 'bottom 100%',
            scrub: 3,
        }
    })
        .to('.slide-menu', {
            opacity: '1',
        })
        .to('.nav-follow', {
            // y:5,
            position: 'fixed',
            // left: '10%',
            top: '1px',
            opacity:1,
        })
        .to('.more-arrow',{
            opacity:1,
            delay:1,
            duration:1,
        })

    // gsap.to('.factory-details', {
    //     scale:1.5,
    //     scrollTrigger: {
    //         trigger: '.factory-aos',
    //         // scroller: 'body',
    //         markers: true,
    //         start: 'top top',
    //         end: 'top center',
    //         scrub: true,
    //     }
    // })

    // Home scroll
    gsap.timeline({
        duration: 0.2,
        ease: 'expo.out',
        scrollTrigger: {
            trigger: '.home',
            // markers: true,
            start: 'top -5%',
            end: 'top -30%',
            scrub: 3,
        }
    })
        .to('.scroll-bg', {
            opacity: 1,
            dutaion: 0.2,
            ease: 'expo.out',
            scrub: 3,
            // dealy: 0.4,
        })

    // gsap.to('.scroll-bg', {
    //     opacity: 1,
    //     duration: 0.2,
    //     ease:'expo.out',
    //     scrollTrigger: {
    //         trigger: '.scroll-bg',
    //         scroller: 'body',
    //         markers: true,
    //         start: 'top -1%',
    //         scrub: 3,
    //     }
    // })



    // const productContainer = document.querySelectorAll('.product-container')
    // const swiperContent = document.querySelectorAll('.swiper-content')

    // productContainer.addEventListener('mouseenter',() => {
    //     gspa.to('.product-container img',{
    //         scale:1.3,
    //         duration:1,
    //     })
    // })
    // swiperContent.addEventListener('mouseenter',() => {
    //     gspa.to('.product-container img',{
    //         scale:1.3,
    //     })
    // })



    gsap.from('.faq-q', {

        scrollTrigger: {
            trigger: '.faq-q',
            scroller: 'body',
            start: 'top 50%',
            stagger: 0.4,
            y: 30,
            delay: 3,
            opacity: 0,
        }
    })

    gsap.from('.footer-copyrights', {
        opacity: 0,
        duration: 1,
        ease: 'power2',
        scrollTrigger: {
            trigger: '.footer-copyrights',
            scroller: 'body',
        }
    })


}

// function hoverImg() {
//     const productItems = document.querySelectorAll('.product-item')

//     productItems.forEach((productItem) => {
//         var img = productItem.getAttribute('data-img')

//         var imgLeave = productItem.getAttribute('data-img-leave')

//         console.log('product img', imgLeave)
//         productItem.addEventListener('mouseenter', () => {
//             productItem.innerHTML = `<img src=${img} >`
//         })
//         productItem.addEventListener('mouseleave', () => {
//             productItem.innerHTML = `<img src=${imgLeave} >`
//         })
//     })
// }

// function hoverImg() {
//     const productItems = document.querySelectorAll('.product-item');

//     productItems.forEach((productItem) => {
//         const img = productItem.dataset.img;
//         const imgLeave = productItem.dataset.imgLeave;
//         const imgElement = document.createElement('img');
//         imgElement.src = img;

//         productItem.addEventListener('mouseenter', () => {
//             imgElement.src = img;
//             productItem.style.transition = '0.5s ease'
//         });

//         productItem.addEventListener('mouseleave', () => {
//             imgElement.src = imgLeave;
//             productItem.style.transition = 'all 0.6s ease'
//         });

//         productItem.innerHTML = '';
//         productItem.appendChild(imgElement);
//     });
// }


function FAQ() {
    var questions = document.querySelectorAll('.faq-q')
    questions.forEach(function (question) {
        question.addEventListener('click', function () {

            var answer = this.nextElementSibling
            if (answer.style.display === 'block') {
                answer.style.display = 'none'
                question.style.color = '#ADADAD'
            } else {
                answer.style.display = 'block'
                question.style.color = '#eb6561b0'
            }
        })
    })
}

function numberCounter() {
    const counters = document.querySelectorAll('.counter')
    const duration = 2000
    const animateCounter = (counter) => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target')
            const count = +counter.innerText.replace('+', '')
            const increment = target / (duration / 20)

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + '+'
                setTimeout(updateCounter, 20)
            } else {
                counter.innerText = target + '+'
            }
        }
        updateCounter()
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target)
                observer.unobserve(entry.target)
            } else {
                animateCounter(null)
                observer.unobserve(null)
            }
        })
    }, {
        threshold: 0.1,
    })

    counters.forEach(counter => {
        observer.observe(counter)
    })

}

