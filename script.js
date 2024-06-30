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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" type="image/x-icon" href="https://img.icons8.com/ultraviolet/40/000000/source-code.png">
    <link href="style.css" rel="stylesheet">`;
    document.head.insertAdjacentHTML('beforebegin', metaTags);
});


document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <div id="navbar">
            <div id="contact">
                <a href="https://www.linkedin.com/in/vaibhavaaditya" target="_blank" class="fa fa-linkedin"></a>
                <a href="https://github.com/vaibhavaaditya" target="_blank" class="fa fa-github"></a>
                <a href="mailto:vaibhavaaditya@gmail.com" target="_blank" class="fa fa-envelope"></a>  
            </div>
            <div class="nav-ul">
                <button><a href="./index.html">home</a></button>
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
