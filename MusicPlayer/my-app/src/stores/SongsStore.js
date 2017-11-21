import React from 'react'
import dispatcher from './../dispatcher'
import {EventEmitter} from 'events'
import SongActions from './../actions/SongActions'

class SongsStore extends EventEmitter {

    add(song) {
        console.log('adding')
        
        this.emit(this.eventTypes.song_added);
    }

    handleActions(action) {                
        switch(action.type) {
            case SongActions.types.add_song : 
                this.add(action.song)
                break;
        }
    }
}

let songStore = new SongsStore();
songStore.eventTypes = {
    song_added : "SONG_ADDED"
}
dispatcher.register(songStore.handleActions.bind(songStore));

export default songStore;