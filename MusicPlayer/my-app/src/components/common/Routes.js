import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ListSongsPage from '../songs/ListSongsPage'
import AddSongPage from '../songs/AddSongPage'

const Routes = () => (
    <div>
        <Switch>
            <Route path='/' exact component={ListSongsPage} />
            <Route path='/songs/add' component={AddSongPage} />
        </Switch>        
    </div>
)

export default Routes