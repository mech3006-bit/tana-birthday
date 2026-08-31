/* =====================================
   TANA'S BIRTHDAY MONTH
   SEPTEMBER 1 - SEPTEMBER 19, 2026
===================================== */


/* =========================
   IMPORTANT DATES
========================= */
/* =========================
   TEST MODE
========================= */

// true = testing mode
// false = real September dates
const TEST_MODE = false;

// Testing ke liye yahan day number change karo:
// 1 = September 1
// 2 = September 2
// ...
// 19 = September 19

const TEST_DAY = 1;

const START_DATE =
    new Date("2026-09-01T00:00:00+05:30");

const END_DATE =
    new Date("2026-09-19T23:59:59+05:30");


/* =========================
   GET INDIA TIME
========================= */

function getIndiaTime() {

    return new Date(

        new Date().toLocaleString(
            "en-US",
            {
                timeZone:
                    "Asia/Kolkata"
            }
        )

    );

}


/* =========================
   FIND CURRENT DAY
========================= */

function getBirthdayDay() {

    // =========================
    // TEST MODE
    // =========================

    if (TEST_MODE) {

        return TEST_DAY;

    }


    // =========================
    // REAL MODE
    // =========================

    const now =
        getIndiaTime();


    const year =
        now.getFullYear();

    const month =
        now.getMonth();

    const date =
        now.getDate();


    // September = month 8

    if (
        year === 2026 &&
        month === 8 &&
        date >= 1 &&
        date <= 19
    ) {

        return date;

    }


    return 0;

}


/* =========================
   DAILY CONTENT
========================= */

const dailyContent = {

    1: {

        title:
            "It Begins 😏",

        message:

        `
        TANA... you thought your birthday
        was on September 19?
        <br><br>

        <strong>Wrong. 😌</strong>

        <br><br>

        Your birthday month starts TODAY.

        <br><br>

        And unfortunately for you...

        <br>

        <strong>
        I'M INVOLVED. 😂❤️
        </strong>
        `

    },


    2: {

        title:
            "How Well Do You Know Ankit? 😏",

        message:

        `
        Let's see whether you've actually
        been paying attention.
        <br><br>

        No cheating. 😂
        `

    },


    3: {

        title:
            "The Compliment Trap 💌",

        message:

        `
        Pick a card.

        <br><br>

        But choose carefully...

        <br>

        You might get a compliment.

        <br>

        Or I might roast you. 😂
        `

    },


    4: {

        title:
            "Pal Pal Dil Ke Pass 🎵",

        message:

        `
        Today's surprise has
        a little soundtrack. ❤️
        `

    },


    5: {

        title:
            "The Legendary Incident 😂",

        message:

        `
        WARNING ⚠️

        <br><br>

        One Tana.
        <br>
        One Ankit.
        <br>
        One lap.

        <br><br>

        And absolutely ZERO balance. 😭😂
        `

    },


    6: {

        title:
            "Mystery Boxes 🎁",

        message:

        `
        Pick one.

        <br><br>

        No cheating.
        <br>
        No changing your answer.

        <br><br>

        😏
        `

    },


    7: {

        title:
            "Flirt Level 😏",

        message:

        `
        Today we're going to
        scientifically measure
        your flirting skills.
        `

    },


    8: {

        title:
            "Emoji Puzzle 🧩",

        message:

        `
        Decode today's secret message.
        `

    },


    9: {

        title:
            "Secret Message 🔐",

        message:

        `
        Something is hidden here.

        <br><br>

        Find the secret code
        to unlock it.
        `

    },


    10: {

        title:
            "Roast Day 🔥",

        message:

        `
        Today Ankit has officially
        been given permission
        to roast Tana.

        <br><br>

        Good luck. 😂
        `

    },


    11: {

        title:
            "That Day ❤️",

        message:

        `
        Some dates are just dates.

        <br><br>

        And then there are dates
        that change everything.
        `

    },


    12: {

        title:
            "Spin The Wheel 🎰",

        message:

        `
        Let's see what fate
        has planned for you today.
        `

    },


    13: {

        title:
            "Find Ankit 🕵️",

        message:

        `
        Follow the clues.

        <br><br>

        I'm hiding somewhere
        on this page. 😏
        `

    },


    14: {

        title:
            "Choose Your Ankit 😌",

        message:

        `
        Choose carefully.

        <br><br>

        Actually...

        <br>

        You don't get to choose. 😂
        `

    },


    15: {

        title:
            "Memory Unlocked 📸",

        message:

        `
        One memory.

        <br><br>

        One little clue.

        <br><br>

        Let's see if you remember.
        `

    },


    16: {

        title:
            "Three Questions 😏",

        message:

        `
        Answer honestly.

        <br><br>

        I might be judging you. 😂
        `

    },


    17: {

        title:
            "Something Is Coming 🎁",

        message:

        `
        Tana...

        <br><br>

        I've been hiding something
        from you.

        <br><br>

        And it's getting closer. 👀
        `

    },


    18: {

        title:
            "Tomorrow ❤️",

        message:

        `
        No games tomorrow.

        <br><br>

        No puzzles.

        <br><br>

        Just one final surprise.

        <br><br>

        Don't be late. 😏
        `

    },


    19: {

        title:
            "HAPPY BIRTHDAY, TANA ❤️",

        message:

        `
        You survived 18 days
        of my nonsense.

        <br><br>

        Honestly...

        <br>

        I'm impressed. 😂

        <br><br>

        But today is about YOU. ❤️
        `

    }

};


/* =========================
   CREATE 19 DAY BOXES
========================= */

function createCalendar() {

    const container =
        document.getElementById(
            "daysContainer"
        );


    const currentDay =
        getBirthdayDay();


    container.innerHTML = "";


    for (
        let i = 1;
        i <= 19;
        i++
    ) {


        const box =
            document.createElement(
                "div"
            );


        box.classList.add(
            "day-box"
        );


        if (i > currentDay) {

            box.classList.add(
                "locked"
            );

        }
        else {

            box.classList.add(
                "unlocked"
            );

        }


        if (i === currentDay) {

            box.classList.add(
                "today"
            );

        }


        box.innerHTML = `

            <div class="day-number">

                ${i <= currentDay
                    ? "🔓"
                    : "🔒"}

                ${String(i).padStart(2,"0")}

            </div>

            <div class="day-date">

                SEPTEMBER ${i}

            </div>

        `;


        if (i <= currentDay) {

            box.onclick =
                function() {

                    showDay(i);

                };

        }


        container.appendChild(
            box
        );

    }

}


/* =========================
   SHOW TODAY
========================= */

function openToday() {

    const day =
        getBirthdayDay();


    if (day === 0) {

        alert(
            "Not yet 😏\n\n" +
            "Your first surprise unlocks " +
            "on September 1 at 12:00 AM IST."
        );

        return;

    }


    showDay(day);

}


/* =========================
   SHOW SPECIFIC DAY
========================= */

function showDay(day) {

    const data =
        dailyContent[day];


    if (!data) {

        return;

    }


    const section =
        document.getElementById(
            "surpriseSection"
        );


    document.getElementById(
        "currentDay"
    ).textContent =
        String(day).padStart(2,"0");


    document.getElementById(
        "surpriseTitle"
    ).innerHTML =
        data.title;


    document.getElementById(
        "surpriseMessage"
    ).innerHTML =
        data.message;


    createGame(
        day
    );


    section.classList.remove(
        "hidden"
    );


    section.scrollIntoView({
        behavior:
            "smooth"
    });

}


/* =========================
   GAMES
========================= */

function createGame(day) {

    const game =
        document.getElementById("gameArea");


    game.innerHTML = "";


    /* =========================
       DAY 1 GAME
    ========================= */

    if (day === 1) {

        game.innerHTML = `

            <h3>
                CATCH MY HEART ❤️
            </h3>

            <p style="margin-top:15px; opacity:.65;">
                Try clicking the heart...
                if you can. 😏
            </p>

            <div
                id="heartGame"
                style="
                    position:relative;
                    height:180px;
                    margin-top:25px;
                    border-radius:20px;
                    background:rgba(255,255,255,.03);
                    overflow:hidden;
                "
            >

                <button
                    id="movingHeart"
                    onclick="catchHeart()"
                    style="
                        position:absolute;
                        left:45%;
                        top:40%;
                        border:none;
                        background:none;
                        font-size:45px;
                        cursor:pointer;
                        transition:.25s;
                    "
                >
                    ❤️
                </button>

            </div>


            <p
                id="gameResult"
                style="
                    margin-top:20px;
                    line-height:1.8;
                "
            >
            </p>

        `;

    }


    /* =========================
       OTHER DAYS
    ========================= */

else if (day === 2) {

    startDay2Quiz();

}
else if (day === 3) {

    startDay3Game();

}
else if (day === 4) {
    startDay4Game();
}
else if (day === 5) {

    startDay5Game();

}

    
else {

    game.innerHTML = `

        <p style="opacity:.5">

            Today's game will unlock
            on its special day. 😉

        </p>

    `;

}

}


/* =========================
   DAY 1 GAME
========================= */

function day1Game() {

    document.getElementById(
        "gameResult"
    ).innerHTML = `

        <br>

        ❤️ GOT YOU.

        <br><br>

        Nice try.

        <br>

        You really thought I'd
        make this easy? 😏❤️

    `;

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const hearts = [
        "❤️",
        "💗",
        "♥",
        "♡"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random()
                * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 +
        Math.random() * 20)
        + "px";


    heart.style.animationDuration =
        (4 +
        Math.random() * 4)
        + "s";


    document
        .getElementById("hearts")
        .appendChild(
            heart
        );


    setTimeout(
        () => heart.remove(),
        8000
    );

}


/* =========================
   INITIALIZE
========================= */

createCalendar();


setInterval(
    createHeart,
    1200
);


setInterval(
    createCalendar,
    30000
);
/* =========================
   DAY 1 — CATCH MY HEART
========================= */

let heartAttempts = 0;


function catchHeart() {

    const heart =
        document.getElementById(
            "movingHeart"
        );


    const game =
        document.getElementById(
            "heartGame"
        );


    heartAttempts++;


    /* =========================
       FIRST 2 ATTEMPTS
    ========================= */

    if (heartAttempts < 3) {

        const maxX =
            game.clientWidth - 70;

        const maxY =
            game.clientHeight - 70;


        const randomX =
            Math.random() * maxX;

        const randomY =
            Math.random() * maxY;


        heart.style.left =
            randomX + "px";


        heart.style.top =
            randomY + "px";


        document.getElementById(
            "gameResult"
        ).innerHTML =

            heartAttempts === 1

            ?

            "HAHA 😂 You missed me!"

            :

            "Again? 😏 Try harder!";

    }


    /* =========================
       THIRD ATTEMPT
    ========================= */

    else {

        heart.style.left =
            "45%";

        heart.style.top =
            "40%";


        heart.style.pointerEvents =
            "none";


        document.getElementById(
            "gameResult"
        ).innerHTML = `

            <strong>
                Okay Tana... ❤️
            </strong>

            <br><br>

            You caught it. 😏

            <br><br>

            But here's the thing...

            <br>

            <strong>
                My heart was never really
                running away.
            </strong>

            <br><br>

            It was always yours. ❤️

        `;

    }

}
/* =====================================
   DAY 2 — HOW WELL DO YOU KNOW ANKIT?
===================================== */

let day2Question = 0;

let day2Score = 0;


const day2Questions = [

    {
        question:
        "What would Ankit most likely do?",

        options: [

            "Act mature 😇",

            "Stay quiet 🤐",

            "Annoy Tana 😂",

            "All of the above 💀"

        ],

        correct: 3

    },


    {
        question:
        "What is Ankit's favorite thing to do with Tana?",

        options: [

            "Ignore her 😭",

            "Annoy her 😂",

            "Make her smile ❤️",

            "Sleep 😴"

        ],

        correct: 2

    },


    {
        question:
        "What happens when Ankit says 'I have an idea'?",

        options: [

            "Something normal",

            "Something romantic ❤️",

            "Something stupid 😂",

            "Nobody knows 💀"

        ],

        correct: 2

    },


    {
        question:
        "Who is more likely to start an argument?",

        options: [

            "Ankit 😇",

            "Tana 😏",

            "Both 😂",

            "Nobody"

        ],

        correct: 2

    },


    {
        question:
        "Who is stuck with whom? 😏",

        options: [

            "Ankit is stuck with Tana",

            "Tana is stuck with Ankit",

            "Both are stuck 😂❤️",

            "Nobody is stuck"

        ],

        correct: 2

    }

];


/* =====================================
   START QUIZ
===================================== */

function startDay2Quiz() {

    day2Question = 0;

    day2Score = 0;

    showDay2Question();

}


/* =====================================
   SHOW QUESTION
===================================== */

function showDay2Question() {

    const game =
        document.getElementById(
            "gameArea"
        );


    const q =
        day2Questions[
            day2Question
        ];


    game.innerHTML = `

        <div style="
            font-size:10px;
            letter-spacing:3px;
            opacity:.5;
            margin-bottom:15px;
        ">

            QUESTION
            ${day2Question + 1}
            / ${day2Questions.length}

        </div>


        <h3 style="
            font-size:20px;
            line-height:1.5;
        ">

            ${q.question}

        </h3>


        <div
            id="quizOptions"
            style="
                display:flex;
                flex-direction:column;
                gap:12px;
                margin-top:25px;
            "
        >

        </div>


        <p
            id="quizMessage"
            style="
                margin-top:20px;
                min-height:25px;
                line-height:1.7;
            "
        >
        </p>

    `;


    const options =
        document.getElementById(
            "quizOptions"
        );


    q.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.innerHTML =
                option;


            button.style.cssText = `

                padding:14px;

                border-radius:15px;

                border:
                    1px solid
                    rgba(255,255,255,.12);

                background:
                    rgba(255,255,255,.05);

                color:white;

                cursor:pointer;

                font-family:
                    Montserrat,
                    sans-serif;

                transition:.25s;

            `;


            button.onmouseenter =
                () => {

                    button.style.background =
                        "rgba(255,255,255,.12)";

                };


            button.onmouseleave =
                () => {

                    button.style.background =
                        "rgba(255,255,255,.05)";

                };


            button.onclick =
                () => {

                    checkDay2Answer(
                        index
                    );

                };


            options.appendChild(
                button
            );

        }
    );

}


/* =====================================
   CHECK ANSWER
===================================== */

function checkDay2Answer(answer) {

    const q =
        day2Questions[
            day2Question
        ];


    const message =
        document.getElementById(
            "quizMessage"
        );


    if (
        answer === q.correct
    ) {

        day2Score++;


        message.innerHTML =

            "CORRECT! 😏❤️";


    }

    else {

        message.innerHTML =

            "HAHA 😂 WRONG!";

    }


    /*
       Disable buttons
    */

    const buttons =
        document.querySelectorAll(
            "#quizOptions button"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;

            button.style.opacity =
                ".5";

        }
    );


    /*
       Next question
    */

    setTimeout(

        () => {

            day2Question++;


            if (
                day2Question
                <
                day2Questions.length
            ) {

                showDay2Question();

            }

            else {

                showDay2Result();

            }

        },

        1200

    );

}


/* =====================================
   FINAL SCORE
===================================== */

function showDay2Result() {

    const game =
        document.getElementById(
            "gameArea"
        );


    let title;

    let message;


    if (
        day2Score === 5
    ) {

        title =
            "PERFECT SCORE ❤️";

        message =
            `
            Okayyy Tana... 😏

            <br><br>

            <strong>
            5/5
            </strong>

            <br><br>

            Someone has clearly been
            paying attention to Ankit. ❤️
            `;

    }


    else if (
        day2Score >= 3
    ) {

        title =
            "NOT BAD 😏";

        message =
            `
            ${day2Score}/5

            <br><br>

            Okay... I'll allow it. 😂

            <br><br>

            But you clearly need to
            study Ankit a little more. 😏
            `;

    }


    else {

        title =
            "TANA... 😭";

        message =
            `
            ${day2Score}/5

            <br><br>

            We need to talk. 😂

            <br><br>

            How do you know so little
            about me?!
            `;

    }


    game.innerHTML = `

        <div style="
            font-size:45px;
            margin-bottom:15px;
        ">

            ❤️

        </div>


        <h3 style="
            font-size:30px;
        ">

            ${title}

        </h3>


        <p style="
            margin-top:20px;
            line-height:2;
        ">

            ${message}

        </p>

    `;

}
/* =====================================
   DAY 3 — COMPLIMENT TRAP
===================================== */


let day3Chosen = false;


/* =====================================
   START DAY 3
===================================== */

function startDay3Game() {

    day3Chosen = false;


    const game =
        document.getElementById(
            "gameArea"
        );


    game.innerHTML = `

        <div style="
            font-size:10px;
            letter-spacing:3px;
            opacity:.5;
            margin-bottom:15px;
        ">

            CHOOSE ONE

        </div>


        <h3 style="
            font-size:24px;
            line-height:1.5;
        ">

            Pick a card, Tana. 😏

        </h3>


        <p style="
            margin-top:10px;
            opacity:.6;
            line-height:1.7;
        ">

            One contains a compliment.
            <br>

            One contains a confession.
            <br>

            And one...

            <br>

            <strong>
            might expose Ankit. 😂
            </strong>

        </p>


        <div id="complimentCards"
            style="
                display:grid;
                grid-template-columns:
                    repeat(3, 1fr);

                gap:12px;

                margin-top:30px;
            "
        >

            <button
                class="compliment-card"
                onclick="chooseDay3Card(1)"
            >

                ❤️

                <span>
                    CARD 01
                </span>

            </button>


            <button
                class="compliment-card"
                onclick="chooseDay3Card(2)"
            >

                💌

                <span>
                    CARD 02
                </span>

            </button>


            <button
                class="compliment-card"
                onclick="chooseDay3Card(3)"
            >

                😏

                <span>
                    CARD 03
                </span>

            </button>

        </div>


        <p
            id="day3Result"
            style="
                margin-top:30px;
                line-height:2;
                min-height:80px;
            "
        >
        </p>

    `;


    addDay3CardStyle();

}


/* =====================================
   CARD STYLE
===================================== */

function addDay3CardStyle() {

    const style =
        document.createElement(
            "style"
        );


    style.innerHTML = `

        .compliment-card {

            min-height:140px;

            border-radius:22px;

            border:
                1px solid
                rgba(255,255,255,.12);

            background:
                rgba(255,255,255,.05);

            color:white;

            cursor:pointer;

            display:flex;

            flex-direction:column;

            align-items:center;

            justify-content:center;

            gap:12px;

            font-size:38px;

            transition:
                transform .3s,
                background .3s;

        }


        .compliment-card span {

            font-size:9px;

            letter-spacing:2px;

            opacity:.5;

        }


        .compliment-card:hover {

            transform:
                translateY(-8px)
                rotate(-2deg);

            background:
                rgba(255,255,255,.1);

        }


        @media(max-width:600px) {

            .compliment-card {

                min-height:120px;

                font-size:30px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =====================================
   CARD CLICK
===================================== */

function chooseDay3Card(card) {

    if (day3Chosen) {

        return;

    }


    day3Chosen = true;


    const cards =
        document.querySelectorAll(
            ".compliment-card"
        );


    cards.forEach(
        cardButton => {

            cardButton.disabled =
                true;

            cardButton.style.cursor =
                "default";

            cardButton.style.opacity =
                ".35";

        }
    );


    const result =
        document.getElementById(
            "day3Result"
        );


    /* =========================
       CARD 1
    ========================= */

    if (card === 1) {

        result.innerHTML = `

            <strong>
                YOU PICKED CARD 01 ❤️
            </strong>

            <br><br>

            Here's your compliment:

            <br><br>

            <strong>
                There are a lot of things
                I love about you...
            </strong>

            <br><br>

            But honestly?

            <br>

            <strong>
                EVERYTHING.
            </strong>

            ❤️

        `;

    }


    /* =========================
       CARD 2
    ========================= */

    else if (card === 2) {

        result.innerHTML = `

            <strong>
                CARD 02 💌
            </strong>

            <br><br>

            Confession time...

            <br><br>

            I still remember
            <strong>
            21/01/2020.
            </strong>

            ❤️

            <br><br>

            I didn't know that one day
            would become the beginning
            of so many memories.

        `;

    }


    /* =========================
       CARD 3
    ========================= */

    else {

        result.innerHTML = `

            <strong>
                OH NO... 😏
            </strong>

            <br><br>

            You picked the dangerous card.

            <br><br>

            Remember that time I took you
            in my lap...

            <br><br>

            And then...

            <br>

            <strong>
            WE BOTH FELL. 😂😭
            </strong>

            <br><br>

            Yeah.

            <br>

            I still blame gravity.

        `;

    }


    /*
       Final line
    */

    setTimeout(
        () => {

            result.innerHTML += `

                <br><br>

                <span style="
                    opacity:.45;
                    font-size:11px;
                ">

                    You chose your fate,
                    Tana. 😏❤️

                </span>

            `;

        },

        500

    );

}
function startDay4Game() {

    const game =
        document.getElementById("gameArea");


    game.innerHTML = `

        <div style="
            text-align:center;
        ">

            <div style="
                font-size:50px;
                margin-bottom:15px;
            ">
                🎵❤️
            </div>


            <div style="
                font-size:10px;
                letter-spacing:4px;
                opacity:.5;
                margin-bottom:15px;
            ">

                OUR SONG

            </div>


            <h3 style="
                font-family:
                'Cormorant Garamond',
                serif;

                font-size:34px;
            ">

                Pal Pal Dil Ke Pass

            </h3>


            <p style="
                margin-top:15px;
                opacity:.6;
                line-height:1.8;
            ">

                Some songs are just songs...

                <br>

                and some songs suddenly
                remind you of one person. ❤️

            </p>


            <!-- SONG -->

            <audio
                id="tanaSong"
                src="pal-pal-dil-ke-pass.mp3"
                preload="auto">
            </audio>


            <button
                id="memoryButton"
                onclick="playDay4Song()"
                style="
                    margin-top:25px;
                    padding:14px 24px;
                    border-radius:30px;
                    border:1px solid
                    rgba(255,255,255,.15);
                    background:
                    rgba(255,255,255,.08);
                    color:white;
                    cursor:pointer;
                    font-family:inherit;
                "
            >

                🎵 PLAY OUR MEMORY

            </button>


            <div
                id="musicControls"
                style="
                    display:none;
                    margin-top:15px;
                "
            >

                <button
                    id="pauseButton"
                    onclick="toggleDay4Song()"
                    style="
                        padding:10px 20px;
                        border-radius:30px;
                        border:1px solid
                        rgba(255,255,255,.15);
                        background:
                        rgba(255,255,255,.08);
                        color:white;
                        cursor:pointer;
                    "
                >

                    ⏸ PAUSE

                </button>

            </div>


            <div
                id="day4Memory"
                style="
                    display:none;
                    margin-top:30px;
                    line-height:2;
                "
            >
            </div>

        </div>

    `;

}
function playDay4Song() {

    const song =
        document.getElementById(
            "tanaSong"
        );


    const button =
        document.getElementById(
            "memoryButton"
        );


    const controls =
        document.getElementById(
            "musicControls"
        );


    const memory =
        document.getElementById(
            "day4Memory"
        );


    song.volume = 0.8;


    song.play()
        .then(() => {

            console.log(
                "Song started ❤️"
            );

        })
        .catch(error => {

            console.log(
                "Song error:",
                error
            );

            alert(
                "Song file nahi mil rahi. Check karo MP3 ka naam exactly pal-pal-dil-ke-pass.mp3 hai."
            );

        });


    button.innerHTML =
        "🎵 PLAYING FOR YOU ❤️";


    button.disabled =
        true;


    button.style.opacity =
        "0.7";


    controls.style.display =
        "block";


    memory.style.display =
        "block";


    memory.innerHTML = `

        <div style="
            font-size:45px;
            margin-bottom:20px;
        ">
            ❤️
        </div>


        <p>
            Tana...
        </p>


        <br>


        <p>
            There's something about
            this song that always makes
            me think of you.
        </p>


        <br>


        <p>
            Maybe because some people
            don't just become a part
            of your memories...
        </p>


        <br>


        <strong>
            They become a part of
            your heart.
        </strong>


        <br><br>


        <p>
            And whenever this song plays,

            <br>

            I hope somewhere in your mind
            you think of me too. ❤️
        </p>


        <br>


        <div style="
            font-size:11px;
            opacity:.45;
            letter-spacing:2px;
        ">

            THIS ONE IS FOR YOU, TANA ❤️

        </div>

    `;


    createMusicHearts();

}
function toggleDay4Song() {

    const song =
        document.getElementById(
            "tanaSong"
        );


    const button =
        document.getElementById(
            "pauseButton"
        );


    if (song.paused) {

        song.play();

        button.innerHTML =
            "⏸ PAUSE";

    }

    else {

        song.pause();

        button.innerHTML =
            "▶ PLAY";

    }

}
function createMusicHearts() {

    let count = 0;


    const interval =
        setInterval(() => {

            const heart =
                document.createElement(
                    "div"
                );


            heart.innerHTML =
                Math.random() > 0.5
                ? "❤️"
                : "♪";


            heart.style.position =
                "fixed";


            heart.style.left =
                Math.random() * 90 + "%";


            heart.style.bottom =
                "20px";


            heart.style.fontSize =
                (15 +
                Math.random() * 20)
                + "px";


            heart.style.opacity =
                "0.7";


            heart.style.pointerEvents =
                "none";


            heart.style.zIndex =
                "999";


            heart.style.transition =
                "transform 3s linear, opacity 3s";


            document.body.appendChild(
                heart
            );


            setTimeout(() => {

                heart.style.transform =
                    "translateY(-400px)";

                heart.style.opacity =
                    "0";

            }, 100);


            setTimeout(() => {

                heart.remove();

            }, 3200);


            count++;


            if (count >= 15) {

                clearInterval(
                    interval
                );

            }

        }, 250);

}
/* =====================================
   DAY 5 — MEMORY GAME ❤️
===================================== */

function startDay5Game() {

    const game =
        document.getElementById("gameArea");


    let currentQuestion = 0;


    const questions = [

        {
            clue: `
                <strong>CLUE 1 🌳</strong>

                <br><br>

                It happened in a park.

                <br><br>

                <strong>CLUE 2 😂</strong>

                <br><br>

                Someone was picked up
                in someone's lap.

                <br><br>

                <strong>CLUE 3 💀</strong>

                <br><br>

                And then gravity decided
                to join us.
            `,

            question:
                "What happened? 😏",

            reveal: `
                YAAD HAI? 😂❤️

                <br><br>

                Park mein godi mein utha ke
                gira diye the! 😂

                <br><br>

                Such a cute moment. ❤️
            `
        },


        {
            clue: `
                <strong>CLUE 1 ❤️</strong>

                <br><br>

                Remember this date.

                <br><br>

                <strong>21/01/2020</strong>

                <br><br>

                <strong>CLUE 2 💭</strong>

                <br><br>

                It was the beginning of
                something very special.

                <br><br>

                <strong>CLUE 3 ❤️</strong>

                <br><br>

                A day that became an important
                part of our story.
            `,

            question:
                "What happened on this day? ❤️",

            reveal: `
                21/01/2020 ❤️

                <br><br>

                The day we first met.

                <br><br>

                Who knew that one day would
                become such an important part
                of our story? 🥹❤️
            `
        },


        {
            clue: `
                <strong>CLUE 1 😌</strong>

                <br><br>

                This answer is very simple.

                <br><br>

                <strong>CLUE 2 ❤️</strong>

                <br><br>

                It's not just one thing.

                <br><br>

                <strong>CLUE 3 🥹</strong>

                <br><br>

                It's basically everything
                that makes Tana... Tana.
            `,

            question:
                "What does Ankit love about Tana? ❤️",

            reveal: `
                The answer is...

                <br><br>

                <strong style="font-size:28px;">
                    EVERYTHING. ❤️
                </strong>

                <br><br>

                Basically...

                <br>

                YOU. ❤️
            `
        }

    ];


    function showQuestion() {

        const q =
            questions[currentQuestion];


        game.innerHTML = `

            <div style="
                text-align:center;
            ">


                <div style="
                    font-size:10px;
                    letter-spacing:3px;
                    opacity:.5;
                    margin-bottom:15px;
                ">

                    MEMORY
                    ${currentQuestion + 1}
                    / 3

                </div>


                <div style="
                    padding:20px;
                    border-radius:20px;
                    background:rgba(255,255,255,.04);
                    line-height:1.8;
                    text-align:left;
                    margin-bottom:25px;
                ">

                    ${q.clue}

                </div>


                <h3 style="
                    font-size:21px;
                    line-height:1.5;
                ">

                    ${q.question}

                </h3>


                <textarea
                    id="day5Answer"
                    placeholder="Type your answer here... ❤️"
                    style="
                        width:100%;
                        height:110px;
                        box-sizing:border-box;
                        margin-top:20px;
                        padding:15px;
                        border-radius:15px;
                        border:1px solid rgba(255,255,255,.15);
                        background:rgba(255,255,255,.05);
                        color:white;
                        font-family:inherit;
                        font-size:15px;
                        outline:none;
                        resize:none;
                    "
                ></textarea>


                <button
                    id="day5Next"
                    style="
                        margin-top:15px;
                        padding:13px 28px;
                        border-radius:30px;
                        border:1px solid rgba(255,255,255,.15);
                        background:rgba(255,255,255,.08);
                        color:white;
                        cursor:pointer;
                        font-family:inherit;
                    "
                >

                    NEXT ❤️

                </button>


                <div
                    id="day5Reveal"
                    style="
                        margin-top:20px;
                        line-height:1.8;
                    "
                >

                </div>


            </div>

        `;


        document
            .getElementById("day5Next")
            .addEventListener(
                "click",
                submitAnswer
            );

    }


    function submitAnswer() {

        const input =
            document.getElementById(
                "day5Answer"
            );


        const button =
            document.getElementById(
                "day5Next"
            );


        const reveal =
            document.getElementById(
                "day5Reveal"
            );


        const answer =
            input.value.trim();


        if (answer === "") {

            reveal.innerHTML = `

                <span style="opacity:.6;">

                    Tanaaa... answer toh do 😏❤️

                </span>

            `;

            return;

        }


        input.disabled = true;

        button.disabled = true;


        button.style.opacity = "0.5";


        reveal.innerHTML = `

            <div style="opacity:.6;">

                Your answer:

            </div>


            <div style="
                margin:8px 0 20px;
                font-style:italic;
            ">

                "${answer}"

            </div>


            ${qReveal()}

        `;


        setTimeout(
            function () {

                currentQuestion++;


                if (
                    currentQuestion <
                    questions.length
                ) {

                    showQuestion();

                }

                else {

                    showFinal();

                }

            },
            3500
        );

    }


    function qReveal() {

        return questions[
            currentQuestion
        ].reveal;

    }


    function showFinal() {

        game.innerHTML = `

            <div style="
                text-align:center;
                line-height:2;
            ">


                <div style="
                    font-size:55px;
                ">

                    ❤️

                </div>


                <div style="
                    font-size:10px;
                    letter-spacing:3px;
                    opacity:.5;
                ">

                    DAY 5 COMPLETE

                </div>


                <h3 style="
                    font-size:30px;
                    margin-top:20px;
                ">

                    You remembered. 🥹❤️

                </h3>


                <p style="
                    margin-top:20px;
                ">

                    Some memories are funny.

                    <br>

                    Some are emotional.

                    <br>

                    Some are simply...

                    <br><br>

                    <strong>
                        OURS. ❤️
                    </strong>

                    <br><br>

                    And I hope we keep making
                    thousands more.

                </p>


            </div>

        `;

    }


    showQuestion();

}
