import React from 'react'
import Input from './../common/Input'

const AddSongForm = (props) => (
    <div>
        <form>
            <Input 
                name='name'
                placeholder='Name'
                value={props.song.name}
                onChange={props.onChange}
            />
            <br />
            <Input 
                name='singer'
                placeholder='Singer'
                value={props.song.singer}
                onChange={props.onChange}
            />
            <br />
            <Input 
                name='length'
                placeholder='Length'
                value={props.song.length}
                onChange={props.onChange}
            />
            <br />
            <Input 
                name='genre'
                placeholder='Genre'
                value={props.song.genre}
                onChange={props.onChange}
            />
            <br/>
            <input type='submit' onClick={props.onClick} value='Add your song'/>
        </form>
    </div>
)

export default AddSongForm