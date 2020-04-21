import React from 'react'
import './App.css'
import AllBooks from './components/AllBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false,
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <AllBooks books={this.state.books}/>
        {console.log('BooksAPI contains: ' + this.books)}
      </div>
    )
  }
}

export default BooksApp
