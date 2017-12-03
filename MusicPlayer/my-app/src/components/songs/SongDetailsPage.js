import React, {Component} from 'react'
import SongActions from './../../actions/SongActions'
import SongStore from './../../stores/SongsStore'

class SongDetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            song: { 
                
                name:'',
                singer:'',
                length:0,
                genre:'',
            }
        }

        this.handleSongGet = this.handleSongGet.bind(this);

        SongStore.on(
            SongStore.eventTypes.song_got,
            this.handleSongGet
        )
    }

    handleSongGet() {
        console.log("i got the song")
    }

    componentDidMount() {
        const id = this.props.match.params;
        SongActions.getSong(id);
    }

    render() {
        console.log(this.props.match.params)

        return(
            <div>
                <h1>Song Details page</h1>
            </div>
        )
    }
}

export default SongDetailsPage;