class AllArtist extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        // this.onUpdate = this.onUpdate.bind(this)
    }

    handleDelete(id) {
        this.props.handleDelete(id)
    }

    onUpdate(artist) {
        this.props.onUpdate(artist)
    }
    
    render() {
        let artists = this.props.artists.map((artist) => {
            return(
            <div key={ artist.id }>
                <Artist artist={artist} handleDelete={ this.handleDelete.bind(this, artist.id)} handleUpdate={ this.onUpdate } />
            </div>
        )});

        return(
            <div>
                { artists }
            </div>
        )
    }
 }