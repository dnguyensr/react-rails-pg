class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.updateArtists = this.updateArtists.bind(this)
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

    handleSubmit(artist) {
        var newArtists = this.state.artists.concat(artist);
        this.setState({ artists: newArtists })
    }

    handleUpdate(artist){
        $.ajax({
            url: `/api/v1/artists/${artist.id}`,
            type: 'PUT',
            data: { artist: artist},
            success: () => {
                this.updateArtists(artist)
            }
        })
    }

    updateArtists(artist) {
        let artists = this.state.artists.filter((a) => {
            return a.id != artist.id
        })
        artists.push(artist)
        this.setState({ artists: artists })
    }

    componentDidMount() {
        $.getJSON('/api/v1/artists.json', (response) => { this.setState({ artists: response }) })
    }
    
    render() {
        return(
            <div>
                <Nav />
                <NewArtist handleSubmit={ this.handleSubmit } />
                <AllArtist artists={ this.state.artists } handleDelete={ this.handleDelete } onUpdate={ this.handleUpdate } />
                <Footer />
            </div>
        )
    }
 }