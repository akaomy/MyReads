import React from 'react'
import './App.css'
import AllBooks from './components/AllBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books },
        this.setState({ loading: false }))
    })
    .catch(error => console.log(error))
  }
  render() {
    const { loading, books } = this.state
    if (loading) {
      return (
      <div>
        <p>Loading, please wait</p>
      </div>)
    };
    return (
      <div className="app">
        <AllBooks books={books}/>
        {console.log('BooksAPI contains: ' + books)}
      </div>
    )
  }
}

export default BooksApp
