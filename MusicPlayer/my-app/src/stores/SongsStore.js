import React from 'react'
import dispatcher from './../dispatcher'
import {EventEmitter} from 'events'
import SongActions from './../actions/SongActions'

class SongsStore extends EventEmitter {

    add(song) {
        //        
        this.emit(this.eventTypes.song_added);
    }

    get(id) {
        
        this.emit(this.eventTypes.song_got);
    }

    handleActions(action) {                
        switch(action.type) {
            case SongActions.types.add_song : 
                this.add(action.song);
                break;
            case SongActions.types.get_song :
                this.get(action.id);
                break;
        }
    }
}

let songStore = new SongsStore();
songStore.eventTypes = {
    song_added : "SONG_ADDED",
    song_got : "SONG_GOT",
}
dispatcher.register(songStore.handleActions.bind(songStore));

export default songStore;