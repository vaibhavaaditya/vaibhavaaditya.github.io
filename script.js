document.addEventListener('DOMContentLoaded', () => {
    const metaTags = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>Vaibhava Aditya</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">
    <link rel="icon" href="/favicon.svg" />
    <link href="style.css" rel="stylesheet">`;
    document.head.insertAdjacentHTML('beforebegin', metaTags);
});


document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <div id="navbar">
            <div class="nav-ul">
                <button id="home_btn">
                    <a href="./index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M8,1L1,6v9h5v-4c0-1.105,0.895-2,2-2s2,0.895,2,2v4h5V6L8,1z"></path>
                        </svg>
                    </a>
                </button>
                <button><a href="./about.html">about</a></button>
                <button><a href="./work.html">work</a></button>
                <button><a href="./writings.html">writings</a></button>
            </div>
        </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = navbarHTML;

    document.body.insertBefore(tempDiv.firstElementChild, document.body.firstChild);
});
