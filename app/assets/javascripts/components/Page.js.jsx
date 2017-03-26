class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
           artists: []
        }
    }
    handleDelete(id) {
        $.ajax({
        url: `/api/v1/artists/${id}`,
        type: 'DELETE',
        success:() => {
            this.removeArtistClient(id)
        }
        })
    }

    removeArtistClient(id) {
        var newArtists = this.state.artists.filter((artist) => {
            return artist.id != id
        })
        this.setState({ artists: newArtists })
    }

    componentDidMount() {
        $.getJSON('/api/v1/artists.json', (response) => { this.setState({ artists: response }) })
    }
    handleSubmit(artist) {
        var newArtists = this.state.artists.concat(artist);
        this.setState({ artists: newArtists })
    }
    render() {
        return(
            <div>
                <Nav />
                <NewArtist handleSubmit={ this.handleSubmit } />
                <Artist artists={ this.state.artists } handleDelete={ this.handleDelete } />
                <Footer />
            </div>
        )
    }
 }