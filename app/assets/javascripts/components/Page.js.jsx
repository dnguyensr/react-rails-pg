class Page extends React.Component {
    constructor(props) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
           artists: []
        }
    }
    componentDidMount() {
        $.getJSON('/api/v1/artists.json', (response) => { this.setState({ artists: response }) })
    }
    handleSubmit(artist) {
        var newState = this.state.artists.concat(artist);
        this.setState({ artists: newState})
    }
    render() {
        return(
            <div>
                <Nav />
                <NewArtist handleSubmit={ this.handleSubmit }/>
                <Artist artists={ this.state.artists }/>
                <Footer />
            </div>
        )
    }
 }