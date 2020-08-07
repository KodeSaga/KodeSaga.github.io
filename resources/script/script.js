/*
    1. Logic for Dynamic Grid Content
    2. Shuffle Logic
    3. Sort Logic
*/

const NUMBERLIST = [
    {
        content: 1,
        facade: '#6F98A8'
    },
    {
        content: 2,
        facade: '#2B8EAD'
    },
    {
        content: 3,
        facade: '#2F454E'
    },
    {
        content: 4,
        facade: '#2B8EAD'
    },
    {
        content: 5,
        facade: '#2F454E'
    },
    {
        content: 6,
        facade: '#BFBFBF'
    },
    {
        content: 7,
        facade: '#BFBFBF'
    },
    {
        content: 8,
        facade: '#6F98A8'
    },
    {
        content: 9,
        facade: '#2F454E'
    }
];

let DUPLIST = [...NUMBERLIST];

let sortedFlag = 1; /* 1 = Its sorted   0 = Not Sorted */
let shuffleFlag = 0; /* 1 = Its shuffled   0 = Its Sorted */

const numberContainer = document.getElementById("numberContainer");

const generateHtml  = () => {

    const getHtmlLines = DUPLIST.map((key) => {
        return `<div class="square" 
                style="background-color:${key.facade};
                       border-color:${key.facade};">
                ${key.content}</div>`
    })
    // console.log(getHtmlLines.join(" "));
    numberContainer.innerHTML = getHtmlLines.join(" ");
    // console.log(numberContainer);
};

const shuffleBuddy = () => {
    for(let pos = DUPLIST.length-1; pos > 0; pos--){
        const randPos = Math.floor(Math.random() * (pos + 1));
        [DUPLIST[pos], DUPLIST[randPos]] = [DUPLIST[randPos], DUPLIST[pos]];
    }
    generateHtml();
    document.querySelector('.sort').disabled = false; /* Re enable Sort Button */
    document.querySelector('.sort').style.backgroundColor = "#72c3dc";
    document.querySelector('.sort').style.borderBottom = "0.25rem solid #2B8EAD";
    document.querySelector('.sort').style.borderRight = "0.15rem solid #2B8EAD";
    sortedFlag = 0; // array is shuffled


    
};

const sortBuddy = () => {
    if(sortedFlag === 0){
        DUPLIST = [...NUMBERLIST];
        generateHtml();
        sortedFlag = 1; // array is sorted
    }
    document.querySelector('.sort').disabled = true; /* Disable Sort Button as its already sorted*/
    document.querySelector('.sort').style.backgroundColor = "#BFBFBF";
    document.querySelector('.sort').style.border="none";
};


