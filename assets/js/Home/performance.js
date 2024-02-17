window.onload = function () {

    const body = document.body;
    const head = document.head;


    // setTimeout(() => {
        
    //     // Google font
    //     const ekiticons = document.createElement('link')
    //     ekiticons.rel = 'stylesheet'
    //     ekiticons.href = 'assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css';

    //     body.appendChild(ekiticons)

    // },1500)

    setTimeout(() => {
        
        // Font Awesome
        const font_awesome = document.createElement('link')
        font_awesome.rel = 'stylesheet'
        font_awesome.href = 'assets/vendors/fontawesome/css/all.min.css';

        head.appendChild(font_awesome)

    }, 2500)


    setTimeout(() => {

        // Google Tag Manager
        const g_tag_manager = document.createElement('script')
        g_tag_manager.src = 'https://www.googletagmanager.com/gtag/js?id=UA-18825843-1';
        body.appendChild(g_tag_manager)


        // Google font
        const google_font = document.createElement('link')
        google_font.rel = 'stylesheet'
        google_font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap';

        head.appendChild(google_font)

        // Counter Up Js
        const counterup = document.createElement('script')
        counterup.href = 'assets/vendors/counterup/jquery.counterup.min.js';

        body.appendChild(counterup)

        
        // Loop Counter Js
        const loop_counter = document.createElement('script')
        loop_counter.href = 'assets/vendors/countdown-date-loop-counter/loopcounter.js';

        body.appendChild(loop_counter)
        
        // JQuery UI Js
        const jquery_ui = document.createElement('script')
        jquery_ui.href = 'assets/vendors/jquery-ui/jquery-ui.min.js';
        body.appendChild(jquery_ui)


        // Way Point Js
        const way_point = document.createElement('script')
        way_point.href = 'assets/vendors/waypoint/waypoints.js';

        body.appendChild(way_point)


    }, 5000)

    setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-18825843-1');
    }, 5200)

    setTimeout(() => {

        // Main Style
        const main_style = document.createElement('link')
        main_style.rel = 'stylesheet';
        main_style.href = './assets/css/main_style.min.css';
        head.appendChild(main_style)


        document.querySelector('.navigation-container ul > li > a').style.fontSize = '16px !important';

    }, 7000)

}