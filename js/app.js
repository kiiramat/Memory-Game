const cardArray = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const resultDisplay = document.querySelector(".result")
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard(gridDisplay) {
    for ( let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/cover.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }
}

const gridDisplay = document.querySelector(".grid")
createBoard(gridDisplay)

function checkMatch() {
    const cards = document.querySelectorAll(".grid img")    
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1] 

    if (cardsChosen[0] === cardsChosen[1]) {      
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/cover.png")
        cards[optionTwoId].setAttribute("src", "images/cover.png")
    }

    resultDisplay.innerHTML = cardsWon.length

    cardsChosen = []
    cardsChosenId = []

    if (cardsWon.length == cardArray.length/2) {
        gridDisplay.classList.add("hidden");
        resultDisplay.innerHTML = "Congratulations! You found them all!"
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosenId[0] == cardsChosenId[1]) {
        cardsChosen.pop()
        cardsChosenId.pop()
    } else if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}