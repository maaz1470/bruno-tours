window.onload = function () {

    const body = document.body;


    setTimeout(() => {
        
        // Google font
        const ekiticons = document.createElement('link')
        ekiticons.rel = 'stylesheet'
        ekiticons.href = 'assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css';

        body.appendChild(ekiticons)

    },2000)


    setTimeout(() => {

        // Google Tag Manager
        const g_tag_manager = document.createElement('script')
        g_tag_manager.src = 'https://www.googletagmanager.com/gtag/js?id=UA-18825843-1';
        body.appendChild(g_tag_manager)


        // Google font
        const google_font = document.createElement('link')
        google_font.rel = 'stylesheet'
        google_font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap';

        body.appendChild(google_font)


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
        body.appendChild(main_style)

    }, 7000)

}