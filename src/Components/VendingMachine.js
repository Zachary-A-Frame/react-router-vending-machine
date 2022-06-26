import React from "react"
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";

import Soda from "./Soda"
import Chips from "./Chips"
import Menu from "./Menu"
import Jerky from "./Jerky"

const VendingMachine = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Menu />} />
                <Route exact path="/soda" element={<Soda />} />
                <Route exact path="/chips" element={<Chips />} />
                <Route exact path="/jerky" element={<Jerky />} />
            </Switch>
        </Router>
    )
}

export default VendingMachine