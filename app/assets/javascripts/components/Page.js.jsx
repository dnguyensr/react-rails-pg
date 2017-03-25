class Page extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>
                <Nav />
                <NewArtist />
                <Artist />
                <Footer />
            </div>
        )
    }
 }