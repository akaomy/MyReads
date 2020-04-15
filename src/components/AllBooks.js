import React from 'react'
import BookShelf from './BookShelf'

class AllBooks extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
    
  }
  onButtonClick() {
    this.setState({ showSearchPage: true })
  }

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
                {/* once we click on add button
                  onClick method will trigger method that will rewrite state to new one
                  if set is true do this way
                  if set is false do this way
                */}
              <div className="open-search">
                <button onClick={() => this.onButtonClick()}>Add a book</button>
              </div>
              
              {this.state.showSearchPage ? 
                <div className="search-books">
                <div className="search-books-bar">
                  <button className="close-search" onClick={() => this.setState({ showSearchPage: true })}>Close</button>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div> : console.log('books')
              }
            </div>
        )
    }
}

export default AllBooks;