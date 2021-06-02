function header_height_fn() {
    let root = document.documentElement;
    let header = document.getElementById('masthead-inner-id');
    // let header_height = header.clientBottom - header.clientTop;
    let header_height = header.clientHeight - 20;
    if (!isNaN(header_height)){
        root.style.setProperty('--headerHeight', header_height);
    }
}

function check_section() {
    let root = document.documentElement;
    let sections = document.getElementsByTagName('section');
    let sectionsOffset = Array.from(sections).map(n => n.offsetTop);
    sectionsOffset = sectionsOffset.sort((o1, o2) => o1 - o2).filter(o => o < window.scrollY);
    let section = sectionsOffset.length;
    highlightSection(section);
}

function highlightSection(section) {
    let root = document.documentElement;
    let navs = document.getElementsByClassName('nav');
    Array.from(navs).forEach(nav => {
        let navLinks = nav.getElementsByClassName('nav-link');
        Array.from(navLinks).forEach((navLink, linkId) => {
            navLink.classList.remove('active');
            if (section == linkId) {
                navLink.classList.add('active');
                // document.hash = navLink.href;
                // document.location.reload();
                // setTimeout(function () {
                //     window.scrollTo(0, Math.round(section/root.clientHeight));
                // }, 1000);
            }
        })
    });
}
setInterval(
    function () {
        // console.log('Interval Happened');
        header_height_fn();
        // align_section();
    },
    3000
)
function align_section() {
    let root = document.documentElement;
    let section = Math.round(window.scrollY/root.clientHeight);
    window.scrollTo(0, Math.round(section*root.clientHeight));   
}

function animateScroll() {
    let root = document.documentElement;
    let section = Math.round(window.scrollY/root.clientHeight);
    let maxOffsetY = 500;
    // let animates = document.getElementsByClassName('animate');
    // Array.from(animates).forEach(animate => {
        let animateUps = document.querySelectorAll('.animate.animate-slide-up');
        Array.from(animateUps).forEach((up, i) => {
            // let offsetY = Math.floor((up.offsetTop-window.scrollY)/root.clientHeight*maxOffsetY);
            let grandParent = getGrandParent(up, "SECTION");
            let diffSection = (grandParent.offsetTop - window.scrollY)/root.clientHeight;
            let offsetY = Math.floor(diffSection * maxOffsetY);
            if (Math.abs(diffSection) < 1) {
                up.style.visibility = 'visible';
                // up.style.transform = `translateY(${offsetY}px)`;
                // up.style.transitionDelay = '2s';
                up.classList.add('fadeInUp');
                // up.classList.add('animated.delay-1s');
                up.classList.add('animated');
            } else {
                up.style.visibility = 'hidden';
                up.classList.remove('fadeInUp');
                // up.classList.remove('animated.delay-1s');
                up.classList.remove('animated');
            }
        });
    // });
}

function getGrandParent(node, grandParentTag) {
    let found = false;
    let parent = node;
    while(!found) {
        if (parent.tagName == grandParentTag) {
            found = true;
        } else {
            parent = parent.parentElement;
        }
    }
    return parent;
}