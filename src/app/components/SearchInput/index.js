import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledSearchForm,
    StyledInputContainer,
    StyledSearchButton,
} from './SearchInput.sc';
import searchIcon from './search.svg';

const propTypes = {
    addTag: PropTypes.func,
    tags: PropTypes.array,
};

class SearchInput extends React.Component {
    constructor (props) {
        super(props);

        this.textInputSearch = React.createRef();
        this.formInputSearch = React.createRef();
        this.onSearchTag = this.onSearchTag.bind(this);
    }

    onSearchTag(e) {
        e.preventDefault();

        let list = this.props.tags;
        const newItem = this.textInputSearch.current;
        const form = this.formInputSearch.current;

        if (newItem.value !== '') {
            if (list.indexOf(newItem.value) < 0) {
                this.props.addTag(newItem.value);
            }

            form.reset();
        }
    }

    render () {
        return (
            <StyledSearchForm className="form" ref={this.formInputSearch}>
                <StyledInputContainer>
                    <input
                        type="text"
                        className="input"
                        placeholder="Search"
                        ref={this.textInputSearch}
                    />
                    <StyledSearchButton className="button is-info" onClick={this.onSearchTag}>
                        <img src={searchIcon} alt={'Search'}></img>
                    </StyledSearchButton>
                </StyledInputContainer>
            </StyledSearchForm>
        )
    }
}

SearchInput.propTypes = propTypes;
export default SearchInput;
