import React, { Component } from "react";
import Navbar from '../components/Navbar';
import API from '../utils/Api';
import Card from "../components/Cards";

class MyBooks extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.getBooks()
            .then(res =>  {
                this.setState({ results: res.data });
                console.log('results:', this.state.results)
            })
            .catch(err => {
                throw err
            })
    }

    handleDeleteBook = event => {
        event.preventDefault();

        const bookID = event.target.getAttribute('data-id')

        const newState = {...this.state}

        newState.results = this.state.results.filter(book => book._id !== bookID)
        // Filters out any books with the matching target id

        API.DeleteOne(bookID).then(
            (response) => {
                this.setState(newState)
                console.log(response);

            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <h3>My Books</h3>
                    <div className='container-fluid' id='main-content'>
                        {this.state.results.map((book) => {
                            return (
                                <Card
                                    key={book._id}
                                    title={book.title}
                                    id={book._id}
                                    link={book.link}
                                    author={book.authors}
                                    image={book.image}
                                    description={book.description}
                                    deleteOne={this.handleDeleteBook}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyBooks;