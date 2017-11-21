import React from 'react'
import dispatcher from './../dispatcher'

const SongActions = { 

    types : {
        add_song: 'ADD_SONG'
    },

    addSong : function(song) {
        console.log(song)
        
        dispatcher.dispatch({
            type: 'ADD_SONG',
            song
        })
    }
    

}

export default SongActions