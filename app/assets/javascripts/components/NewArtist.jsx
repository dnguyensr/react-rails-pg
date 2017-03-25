class NewArtist extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange(name, e) {
        let change = {}
        change[name] = e.target.value
        this.setState(change)
    }

    handleClick() {
        let name = this.state.name
        let biography = this.state.biography
        $.ajax({
            url: '/api/v1/artists',
            type: 'POST',
            data: { artist: {
                name: name,
                biography: biography
                }
            },
            success: (artist) => {
                this.props.handleSubmit(artist)
            }
        })
    }
    render() {
        return(
            <form >
                <label>
                    <input type="text" name="name" value={this.props.name} onChange={this.handleChange.bind(this, "name")} placeholder="Artist Name" />
                    <input type="text" name="biography" value={this.props.biography} onChange={this.handleChange.bind(this, "biography")} placeholder="Artist Biography" />
                </label>
                <button onClick={this.handleClick} >Add Artist</button>
            </form>
        )
    }
}