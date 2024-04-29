const items = document.querySelector("ul")
const sidebar = document.querySelector(".sidebar")
const render = document.querySelectorAll(".dark")
const links = [...items.children]
const dark = document.querySelector("#collapse")
const collapse2 = document.querySelector("#collapse2")
const main = document.querySelector(".main")
const dash = document.querySelectorAll(".dash")


// logic for sliding indicator

links.forEach((link) => {
    console.log(link)
    link.addEventListener("click", (e) => {
        console.log("this is link", link.children)
        console.log("this is current target", e.currentTarget.children)
        links.map((link) => {
            if (link.children[0].classList[1] === e.currentTarget.children[0].classList[1]) {
                link.classList.add("active")
                link.children[0].classList.add("icons")
            }
            else {
                link.classList.remove("active")
                link.children[0].classList.remove("icons")
            }
        })

    })
})





// logic for dark mode


dark.addEventListener("click", () => {

    render.forEach(el => {
        if (el.classList[1] === "feather-toggle-left") {
            el.classList.toggle("d-none")
        }
        else {
            el.classList.toggle("d-none")
        }
    })
    main.classList.toggle("bg-dark")
    dash.forEach((tag) => {
        tag.classList.toggle("text-white")
    })
    // dash.classList.toggle("text-white")
    render.forEach(el => el.classList.toggle("dark"))
})



// logic for changing content
document.querySelectorAll("nav > ul > li").forEach((li, index) => {
    li.addEventListener("click", () => {
        document.querySelectorAll("nav > ul > li").forEach((li) => {
            li.classList.remove("active")
        })
        li.classList.add("active")
        document.querySelectorAll(".content-f > h3").forEach((ele) => ele.classList.remove('active'))
        document.querySelectorAll(".content-f > h3")[index].classList.add('active')
    })
})