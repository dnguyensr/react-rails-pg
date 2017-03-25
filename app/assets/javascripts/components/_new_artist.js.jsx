class NewArtist extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const artist = {
            name: this.state.name,
            biography: this.state.biography
        }
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
            success: (response) => {
                console.log('it worked!', response)
                // handleClearForm(e)
            }
        })
    }
    handleChange(name, e) {
        let change = {}
        change[name] = e.target.value
        this.setState(change)
    }
    // handleClearForm(e){
    //     e.preventDefault()
    //     this.setState({
    //         name: '',
    //         biography: ''
    //     })
    // }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="name" value={this.props.name} onChange={this.handleChange.bind(this, "name")} placeholder="Artist Name" />
                    <input type="text" name="biography" value={this.props.biography} onChange={this.handleChange.bind(this, "biography")} placeholder="Artist Biography" />
                </label>
                <input type="submit" value="Add Artist" />
            </form>
        )
    }
}

NewArtist.propTypes = {
    name: React.PropTypes.element,
    biography: React.PropTypes.element
}