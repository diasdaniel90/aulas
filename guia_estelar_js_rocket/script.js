/* 
    Buscando e contanto dados em Arrays

    Baseado no array de livros por categoria abaixo, faça os seguintes desafios 

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores 
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma que irá receber o nome do autor e 
    devolver os livros desse autor
*/

const bookByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {   
                title:"Pai rico, pai pobre",
                author: "Robert T. Kiyosaki Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligencia Emocional",
        books:[
            {
                title: "Você é Insubstitúível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 habitós das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ],
    },
];

const totalCategory = bookByCategory.length

console.log(totalCategory);

for (let category of bookByCategory){
    console.log('Total de livros da categoria ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of bookByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ",authors.length)
}
countAuthors();


function booksOfAuthor(author){
    let books = [];

    for(let category of bookByCategory){
        for(let book of category.books){
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}


booksOfAuthor('Augusto Cury');
