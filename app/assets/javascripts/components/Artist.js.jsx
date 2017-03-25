class Artist extends React.Component {
    render() {
        let artists = this.props.artists.map((artist) => {
            return(
            <div key={ artist.id }>
                <h3>{ artist.name }</h3>
                <p>{ artist.biography }</p>
            </div>
        )});

        return(
            <div>
                { artists }
            </div>
        )
    }
 }