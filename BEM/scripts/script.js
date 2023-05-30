$(document).ready(function() {
    const slider = document.getElementById('slider')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')
    const imagesQuantity = Math.floor(slider.offsetWidth / 263)
    let position = 0
    // const mediaQuery900 = window.matchMedia('(max-width: 900px)') // define the querry

    // slider begin

    nextBtn.onclick = function() {
        position += 300
        slider.style.right = position + 'px' 
        if (position > (300 * (6 - imagesQuantity))) {
            position = 0
            slider.style.right = position + 'px' 
        }
    }

    prevBtn.onclick = function() {
        position -= 300
        slider.style.right = position + 'px' 
        if (position <= -100 && imagesQuantity > 1) {
            position = 300 * (6 - imagesQuantity)
            slider.style.right = position + 'px' 
        }
        if ((position <= -100 && imagesQuantity === 1)) {
            position = 300 * (6 - imagesQuantity)
            slider.style.right = position + 'px' 
        }
    }
    
    // slider end

    // category sorting begin

    const allLink = document.getElementById('allLink')
    const brandingLink = document.getElementById('brandingLink')
    const designLink = document.getElementById('designLink')
    const developmentLink = document.getElementById('developmentLink')
    const strategyLink = document.getElementById('strategyLink')
    let links = document.getElementsByClassName('works__link')

    allLink.onclick = function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active')
        }
        allLink.classList.add('active')
        $('.card').hide(500)
        $('.card').show(600)
    }

    brandingLink.onclick = function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active')
        }
        brandingLink.classList.add('active')
        $('.card').hide(500)
        $('.Branding').show(600)
    }

    designLink.onclick = function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active')
        }
        designLink.classList.add('active')
        $('.card').hide(500)
        $('.Design').show(600)
    }

    developmentLink.onclick = function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active')
        }
        developmentLink.classList.add('active')
        $('.card').hide(500)
        $('.Development').show(600)
    }

    strategyLink.onclick = function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active')
        }
        strategyLink.classList.add('active')
        $('.card').hide(500)
        $('.Strategy').show(600)
    }

    // category sorting end

    // swiper begin
    const swiper = document.getElementById('swiper')
    const point1 = document.getElementById('point1')
    const point2 = document.getElementById('point2')
    const point3 = document.getElementById('point3')

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        swiper.scrollLeft -= (delta*90); 
        e.preventDefault();

        if (swiper.scrollLeft < 900) {
            point1.setAttribute('src', 'img/swiper/point-red.png')
            point2.setAttribute('src', 'img/swiper/point.png')
        }

        if (swiper.scrollLeft > 900) {
            point1.setAttribute('src', 'img/swiper/point.png')
            point2.setAttribute('src', 'img/swiper/point-red.png')
            point3.setAttribute('src', 'img/swiper/point.png')
        }

        if (swiper.scrollLeft > 2400) {
            point2.setAttribute('src', 'img/swiper/point.png')
            point3.setAttribute('src', 'img/swiper/point-red.png')
        }
    
    }
    if (document.getElementById('swiper').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('swiper').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('swiper').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('swiper').attachEvent("onmousewheel", scrollHorizontally);
    }

    point1.onclick = function() {
        $('#swiper').animate({
			scrollLeft: '0px',
		}, 2000, function() {
			point1.setAttribute('src', 'img/swiper/point-red.png')
            point2.setAttribute('src', 'img/swiper/point.png')
            point3.setAttribute('src', 'img/swiper/point.png')
		});
    }

    point2.onclick = function() {
        $('#swiper').animate({
			scrollLeft: '1520px',
		}, 2000, function() {
			point1.setAttribute('src', 'img/swiper/point.png')
            point2.setAttribute('src', 'img/swiper/point-red.png')
            point3.setAttribute('src', 'img/swiper/point.png')
		});
    }

    point3.onclick = function() {
        $('#swiper').animate({
			scrollLeft: '3043px',
		}, 2000, function() {
			point1.setAttribute('src', 'img/swiper/point.png')
            point2.setAttribute('src', 'img/swiper/point.png')
            point3.setAttribute('src', 'img/swiper/point-red.png')
		});
    }

    // swiper end
    // yanchors 

    $("a.scroll").on("click", function(e){
        e.preventDefault()
        let anchor = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 800)
    });

    // yanchors end
    // menu in small screens 

    const menuIcon = document.getElementById('menuIcon')
    const menu = document.getElementById('xsMenu')
    
    menuIcon.onclick = function() {
        if (menuIcon.style.transform != 'rotate(90deg)') {
            menuIcon.style.transform = 'rotate(90deg)'
            menu.style.display = 'block'
        } else if (menuIcon.style.transform == 'rotate(90deg)') {
            menuIcon.style.transform = 'rotate(0)'
            menu.style.display = 'none'
        }
    }

    // menu in small screens end
})



