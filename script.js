
// function loginUser() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     if (username === 'passhu' && password === 'passhu') {
//         localStorage.setItem("isLoggedIn", "true");
//         document.getElementById('loginPage').style.display = 'none';
//         document.getElementById('mainPage').classList.remove('hidden');
//         window.scrollTo(0, 0);
//         document.getElementById('birthdaySong').play();


//         window.onload = function(){
//             let isLoggedIn = localStorage.getItem("isLoggedIn");
          
//             if(isLoggedIn === "true"){
//               document.getElementById('loginPage').style.display='none';
//               document.getElementById('mainPage').classList.remove('hidden');
//             }
//           }


//     } else {
//         alert('Wrong username or password ❌');
//     }

// }

// function openLetterImage(path) {
//     document.getElementById('letterImage').src = path;
//     document.getElementById('letterModal').style.display = 'flex';
// }

// function closeLetterImage() {
//     document.getElementById('letterModal').style.display = 'none';
// }


function loginUser() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'passhu' && password === 'passhu') {
        localStorage.setItem("isLoggedIn", "true");

        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').classList.remove('hidden');

        window.scrollTo(0, 0);
        document.getElementById('birthdaySong').play();
    } else {
        alert('Wrong username or password ❌');
    }
}

/* PAGE LOAD CHECK */
window.onload = function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').classList.remove('hidden');
    }

    let song = document.getElementById("birthdaySong");

    song.play().catch(() => {
        document.body.addEventListener("click", function () {
            song.play();
        }, { once: true });
    });
}

function openLetterImage(path) {
    document.getElementById('letterImage').src = path;
    document.getElementById('letterModal').style.display = 'flex';
}

function closeLetterImage() {
    document.getElementById('letterModal').style.display = 'none';
}


// window.onload = function () {
    
// }
