
 var store = {
        tshirts : [
        {title : "VueJS",
            description: "Con nuestra camiseta de React podras verte como un desarrollador de VueJS",
            img: "img/1.jpg"
        },
        {title : "Angular",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de Angular",
        img: "img/2.jpg"
        },
        {title : "React",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de React",
        img: "img/3.jpg"
        },
        {title : "Redux",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de Redux",
        img: "img/4.jpg"
        },
        {title : "Node.js",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de Node.js",
        img: "img/5.jpg"
        },
        {title : "SASS",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de SASS",
        img: "img/6.jpg"
        },
        {title : "HTML5",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de HTML5",
        img: "img/7.jpg"
        },
        {title : "Github",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de Github",
        img: "img/8.jpg"
        },
        {title : "Bulma CSS",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de Bulma CSS",
        img: "img/9.jpg"
        },
        {title : "TypeScript",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de TypeScript",
        img: "img/10.jpg"
        },
        {title : "Drupal",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de Drupal",
        img: "img/11.jpg"
        },
        {title : "JavaScript",
        description: "Con nuestra camiseta de React podras verte como un desarrollador de JavaScript",
        img: "img/12.jpg"
        }
         ],
    cardProducts : function(){

        const section = document.querySelectorAll("section")[1]
        const products = document.createElement("div")
        const div = document.createElement("div")

        products.classList.add("products", "m-4")
        div.classList.add("row", "g-2")

        for (let i = 0; i < this.tshirts.length; i++) {

            
            
            const div1 = document.createElement("div")
            const div2 = document.createElement("div")
            const imge = document.createElement("img")
            const div3 =  document.createElement("div")
            const h5 =  document.createElement("h5")
            const p = document.createElement("p")
            const div4 =  document.createElement("div")
            const a = document.createElement("a")
            const a1 = document.createElement("a")
    
            
           
           div1.classList.add("col")
           div2.classList.add("card")
           div3.classList.add("card-body")
           div4.classList.add("card-body")
           h5.classList.add("card-title")
           p.classList.add("card-text")
           imge.src =  " "
           imge.classList.add("card-img-top","img-thumbnail")
           a.href = " " 
           a1.href=" "
           a.classList.add("card-link")
            a1.classList.add("card-link")

            h5.textContent = this.tshirts[i]["title"]
            p.textContent =  this.tshirts[i]["description"]
            imge.src= this.tshirts[i]["img"]
            a.href = "#"
            a1.href = "#"
            a.textContent = "Card link"
            a1.textContent = "Another link"
            section.appendChild(products)
            products.appendChild(div)
            div.appendChild(div1)
            div1.appendChild(div2)
            div2.appendChild(imge)
            div2.appendChild(div3)
            div2.appendChild(div4)
            div3.appendChild(h5)
            div3.appendChild(p)
            div4.appendChild(a)
            div4.appendChild(a1)


        }   

     }
 }

store.cardProducts()