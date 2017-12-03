import React from 'react'
import dispatcher from './../dispatcher'

const SongActions = { 

    types : {
        add_song: 'ADD_SONG',
        get_song: 'GET_SONG',
    },

    addSong : function(song) {
        dispatcher.dispatch({
            type: 'ADD_SONG',
            song
        })
    },
    
    getSong : function(id) {
        dispatcher.dispatch({
            type: this.types.get_song,
            id
        })
    },

}

export default SongActions