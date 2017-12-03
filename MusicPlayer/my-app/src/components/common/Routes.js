import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ListSongsPage from '../songs/ListSongsPage'
import AddSongPage from '../songs/AddSongPage'
import SongDetailsPage from '../songs/SongDetailsPage'

const Routes = () => (
    <div>
        <Switch>
            <Route path='/' exact component={ListSongsPage} />
            <Route path='/songs/add' component={AddSongPage} />
            <Route path='/songs/details/:id' component={SongDetailsPage} />
        </Switch>        
    </div>
)

export default Routes