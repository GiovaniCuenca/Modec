import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainMap, SelectedCity } from '../screens'

const Routes = () => {
    return (
        <Switch>
            {/* Main Map Page */}
            <Route exact path="/" component={MainMap} />

            {/* Selected City Page */}
            <Route exact path="/city/:city" component={SelectedCity} />

        </Switch>
    )
}

export { Routes }