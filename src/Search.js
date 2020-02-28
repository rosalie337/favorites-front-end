import React, { Component } from 'react'
import List from './List';
import request from 'superagent';

export default class Search extends Component {
    state = { 
        characters: [],
        input: '',
    }

    handleSearch = async (e) => {

        //e.prevent
        const data = await request.get(`http://localhost:3000/api/swapi?search=${this.state.input}`)

        console.log(data.body)
        this.setState({
            characters: data.body.results,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit{this.handleSearch}> 
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={this.handleSearch}>Search!</button>
                <List characters={this.state.characters} />
                </form>
                {
                    this.state.loading
                    ?"LOADING"
                    : <List characters
                }
            </div>
        )
    }
}