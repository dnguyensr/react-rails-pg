class Artist extends React.Component {
    handleDelete(id) {
        this.props.handleDelete(id)
    }
    render() {
        let artists = this.props.artists.map((artist) => {
            return(
            <div key={ artist.id }>
                <h3>{ artist.name }</h3>
                <p>{ artist.biography }</p>
                <button onClick={ this.handleDelete.bind(this, artist.id) }>Remove Artist</button>
            </div>
        )});

        return(
            <div>
                { artists }
            </div>
        )
    }
 }