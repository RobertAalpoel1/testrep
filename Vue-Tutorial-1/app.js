const app = Vue.createApp({
    // data, functions
    data() {
        return{
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'OP1', auther: 'patrick rothfuss', img: 'assets/OP1.jpg', isFav: true},
                {title: 'OP2', auther: 'brandon sanderson', img: 'assets/OP2.jpg', isFav: false},
                {title: 'OP3', auther: 'brandon sanderson', img: 'assets/OP3.jpg', isFav: true}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, num) {
            console.log(e, e.type)
            if (num){
                console.log(num)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        favBook(book) {
            book.isFav = !book.isFav
        //    for(i = 0; i < this.books.length; i++){
        //         if (this.books[i].title === title){
        //             this.books[i].isFav = !this.books[i].isFav
        //         }
        //    }
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')