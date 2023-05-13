import React, { Component } from 'react';

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    async fetchData() {
        const response = await fetch(this.props.url);
        const data = await response.json();
        this.setState({ data });
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
                {this.state.data ? (
                    <ul>
                        {this.state.data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export default DataFetcher;
