import React, {Component} from 'react'
import AddSongForm from './AddSongForm'
import FormHelper from './../common/FormHelper'
import SongActions from './../../actions/SongActions'
import SongStore from './../../stores/SongsStore'
import toastr from 'toastr'

class AddSongPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            song: {
                name:'Summer paradise',
                singer:'Simple Plan',
                length:'3:39',
                genre:'Awesome'
            }
        }

        this.handleSongAdded = this.handleSongAdded.bind(this);

        SongStore.on(
            SongStore.eventTypes.song_added,
            this.handleSongAdded
        )
    }

    handleSongAdded() {
        toastr.success('Song added successfully')
        console.log(this)
    }

    handleInputChange(ev) {
        FormHelper.handleInputChange.bind(this)(ev, 'song');
    }

    handleFormClick(ev) {
        ev.preventDefault();
        SongActions.addSong(this.state.song);
        //TODO: fields validations
    }

    render() {
        return (
            <div>
                <h1>Add your song</h1>

                <AddSongForm 
                    song={this.state.song}
                    onChange={this.handleInputChange.bind(this)}
                    onClick={this.handleFormClick.bind(this)}
                 />
            </div>
        )
    }

}

export default AddSongPage