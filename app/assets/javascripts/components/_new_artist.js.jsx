class NewArtist extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', biography: ''}
    }

    handleSubmit(e) {
        e.preventDefault()
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
            }
        })
    }
    handleChange(name, e) {
        let change = {}
        change[name] = e.target.value
        this.setState(change)
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this, "name")} placeholder="Artist Name" />
                    <input type="text" name="biography" value={this.state.biography} onChange={this.handleChange.bind(this, "biography")} placeholder="Artist Biography" />
                </label>
                <input type="submit" value="Add Artist" />
            </form>
        )
    }
}