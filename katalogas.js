let catalog = {
    "Grožinė literatūra" : [
        {
            ISBN: 9789955137610,
            years: 2018,
            title:"Gyvulių ūkis",
            pages: 136,
            price: 5.9612345
        },
        {
            ISBN: 9789955135005,
            years: 2015,
            title:"1984-ieji",
            pages: 256,
            price: 4.5712345678
        },
        {
            ISBN: 9789955236993,
            years: 2013,
            title:"Dievų miškas",
            pages: 446,
            price: 3.99123
        },
        {
            ISBN: 9789955236627,
            years: 2013,
            title:"Balta drobulė",
            pages: 198,
            price: 7.89
        }
    ],

    "Populiarioji psichologija" : [
        {
            ISBN: 9786098254037,
            years: 2019,
            title:"Atominiai įpročiai",
            pages: 320,
            price: 15.99
        },
        {
            ISBN: 9786098194043,
            years: 2018,
            title:"Neribota atmintis",
            pages: 144,
            price: 19.56
        },
        {
            ISBN: 9786094373930,
            years: 2020,
            title:"Aploti ne tą medį",
            pages: 424,
            price: 11.15
        },
        {
            ISBN: 9786098112832,
            years: 2020,
            title:"Aukščiau laimės",
            pages: 244,
            price: 17.44
        }
    ],

    "Kelionės" : [
        {
            ISBN: 9786094870217,
            years: 2020,
            title:"Vilniaus atminties punktyrai",
            pages: 376,
            price: 19.99
        },
        {
            ISBN: 9786094421457,
            years: 2020,
            title:"Kelionių razinos",
            pages: 304,
            price: 22.89
        },
        {
            ISBN: 9786094036064,
            years: 2013,
            title:"Azija be sienų",
            pages: 320,
            price: 13.99
        },
        {
            ISBN: 9786094421440,
            years: 2020,
            title:"Kelionių takais",
            pages: 192,
            price: 23.76
        }
    ]
}

const newBook = "(nauja knyga)"

for (const category in catalog) {
    console.log(`${category} (${catalog[category].length} knygų):`)
    for (const book of catalog[category]) {
        for (const key in book) {
            if (key === "years" && book[key] === 2020) {
                console.log(`${key}: ${book[key]} ${newBook}`)
            } else {
                console.log(`${key}: ${book[key]}`)
            }
        }
        console.log("\n")
    }
}


//Atvaizduoti visas kategorijas su knygomis 

const all_books = document.querySelector(".all_books")
const results = document.querySelector(".results")

all_books.addEventListener("click", resultsTable)


function resultsTable() {
    results.innerHTML = ""
    let h2 = document.createElement("h2")
    h2.textContent = "Visos knygos"
    results.appendChild(h2)
    
    let table = document.createElement("table")
    results.appendChild(table)
    

    for (const category in catalog) {
        let row = document.createElement("tr")
        table.appendChild(row)
        row.className = "category_name"
        let cat = document.createElement("th")
        cat.setAttribute("colspan", "5")
        cat.textContent = `${category} (${catalog[category].length} knygos):`
        row.appendChild(cat)

        let keys = Object.keys(catalog[category][0])
        row = document.createElement("tr")
        table.appendChild(row)
        for (const k of keys) {
            let pav = document.createElement("th")
            pav.textContent = k.toUpperCase()
            row.appendChild(pav)
        }

        for (const book of catalog[category]) {
            let row = document.createElement("tr")
            row.className = "hov"
            table.appendChild(row)
        
            for (const key in book) {
                let col = document.createElement("td")
                if (key === "years" && book[key] === 2020) {
                    col.textContent = `${book[key]} ${newBook}`
                } else {
                    col.textContent = book[key]
                }
                row.appendChild(col)
            }
        }
    }
}


//Knygos paieška pagal pavadinimą


const searchBtn = document.querySelector(".search")

searchBtn.onclick = searchBook

function searchBook() {
    results.innerHTML = ""
    const title = document.querySelector("input")

    let h2 = document.createElement("h2")
    h2.textContent = "Paieškos rezultatai"
    results.appendChild(h2)
    
    let table = document.createElement("table")
    results.appendChild(table)

    for (const category in catalog) {
        for (const book of catalog[category]) {
            if (title.value === book.title) {
                let row = document.createElement("tr")
                row.className = "category_name"
                table.appendChild(row)
                let cat = document.createElement("th")
                cat.setAttribute("colspan", "5")
                cat.textContent = category
                row.appendChild(cat)

                let keys = Object.keys(book)
                row = document.createElement("tr")
                table.appendChild(row)
                keys.forEach((element) => {
                    let pav = document.createElement("th")
                    pav.textContent = element.toUpperCase()
                    row.appendChild(pav)
                })

                row = document.createElement("tr")
                row.className = "hov"
                table.appendChild(row)

                for (const key in book) {
                    let col = document.createElement("td")
                    col.textContent = book[key]
                    row.appendChild(col)
                }
                return
            }
        }
    }
}







// 1.1 Išvesti knygas, kurios išleistos 2018 m.

for (const category in catalog) {
    for (const book of catalog[category]) {
        if (book.years === 2018) {
            for (const key in book) {
                console.log(`${key}: ${book[key]}`)
            }
            console.log("\n")
        }
    }
}


// 1.2 Išvesti knygų kategorijas su pigiausiomis knygomis. (Kategorijos pavadinimas: Pigiausios knygos pavadinimas)

for (const category in catalog) {
    let cheap = catalog[category][0].price
    let cheapest = catalog[category][0].title
    for (const book of catalog[category]) {
        if (book.price < cheap) {
            cheap = book.price
            cheapest = book.title
        }
    }
    console.log(`${category} : ${cheapest}`)
}

// 1.3 Apvalinkite knygų katalogo kainas iki dviejų skaičių po kablelio
for (const category in catalog) {
    for (const book of catalog[category]) {
        book.price = book.price.toFixed(2)
        console.log(book.price)
    }
}


// 1.3 Sukurti knygos paiešką pagal pavadinimą. Paieškos užklausa priskiriama konstantai. Išvedama visa informacija apie surastą knygą.
const search = "Kelionių razinos"

for (const category in catalog) {
    for (const book of catalog[category]) {
        if (search === book.title) {
            console.log(category)
            for (const key in book) {
                console.log(`${key} : ${book[key]}`)
            }
            break
        }
    }
}



