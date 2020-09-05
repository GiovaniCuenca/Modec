import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainMap } from '../screens'

const Routes = () => {
    return (
        <Switch>
            {/* Main Map Page */}
            <Route exact path="/" component={MainMap} />

            {/* Selected City Page */}

        </Switch>
    )
}

export { Routes }