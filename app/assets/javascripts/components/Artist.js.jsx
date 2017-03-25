class Artist extends React.Component {
    constructor() {
        super()
        this.state = {
           artists: []
        }
    }
    componentDidMount() {
        $.getJSON('/api/v1/artists.json', (response) => { this.setState({ artists: response }) })
    }
    render() {
        const artists = this.state.artists.map((artist) => {
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