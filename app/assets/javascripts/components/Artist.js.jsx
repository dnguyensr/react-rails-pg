class Artist extends React.Component {
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onChange = {
            name: this.handleChange.bind(this, "name"),
            biography: this.handleChange.bind(this, "biography")
        }
        this.state = {
            editable: false
        }
    }

    handleChange(name, event) {
        this.setState({ [name]: event.target.value })
        // let change = {}
        // change[name] = e.target.value
        // this.setState(change)
    }

    handleEdit() {
        if(this.state.editable){
            let id = this.props.artist.id
            let name = this.state.name
            let biography = this.state.biography
            let artist = {id: id, name: name, biography: biography}
            console.log('in handleEdit', this.state.editable, name, biography)
            this.props.handleUpdate(artist)
        }
        this.setState({ editable: !this.state.editable})
    }
    
    render() {
        // let name = this.state.editable ? <input type="text" name="name" defaultValue={ this.props.artist.name } onChange={ this.handleChange.bind(this, "name")} /> : <h3>{ this.props.artist.name }</h3>
        // let biography = this.state.editable ? <input type="text" name="biography" defaultValue={ this.props.artist.biography } onChange={ this.handleChange.bind(this, "biography") } /> : <p>{ this.props.artist.biography }</p>
        // let name = this.state.editable ? <input type="text" name="name" defaultValue={ this.props.artist.name } onChange={this.handleChange.bind(this, "name")} /> : <h3>{ this.props.artist.name }</h3>
        // let biography = this.state.editable ? <input type="text" name="biography" defaultValue={ this.props.artist.biography } onChange={this.handleChange.bind(this, "biography")} /> : <p>{ this.props.artist.biography }</p>
        let name = this.state.editable ? <input type="text" name="name" defaultValue={ this.props.artist.name } onChange={ this.onChange.name } /> : <h3>{ this.props.artist.name }</h3>
        let biography = this.state.editable ? <input type="text" name="biography" defaultValue={ this.props.artist.biography } onChange={this.onChange.biography } /> : <p>{ this.props.artist.biography }</p>
        return(
            <div>
                { name }
                { biography }
                <button onClick={ this.props.handleDelete }>Remove Artist</button>
                <button onClick={ this.handleEdit }>{ this.state.editable ? 'Save' : 'Edit Artist' }</button>
            </div>
        )
    }
}