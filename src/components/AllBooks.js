import React from 'react'
import BookShelf from './BookShelf'


class AllBooks extends React.Component {
    render(){
        // const bookShelfTitles = ['Currently Reading', 'Want to Read', 'Reading']
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf />
                <BookShelf />
                <BookShelf />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
    }
}

export default AllBooks;