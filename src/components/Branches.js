import React, { Component } from 'react';
import OYBranch from './OY-Branch';
import PTBranch from './PT-Branch';

import "../style/Branches.css"
class Branches extends Component {
    render() {
        return (
            <div id="branches" >
                <PTBranch />
                <OYBranch />
            </div>
        );
    }
}

export default Branches;