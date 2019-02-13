import React, { Component } from "react";
import './App.scss';
import ImageListContainer from './containers/imageListContainer';
import TagListContainer from "./containers/tagListContainer";
import SearchInputContainer from './containers/searchInputContainer';

class App extends Component {

    render () {
        return (
            <div className="cais-main">
                <SearchInputContainer />
                <TagListContainer />
                <ImageListContainer />
            </div>
        );
    }
}

export default App;
