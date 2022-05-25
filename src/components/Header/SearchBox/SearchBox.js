import React from 'react'
import classes from './SearchBox.module.scss'
import {changeSearchBoxValue, searchBoxActive} from "../../../redux/actions/actions";
import {connect} from "react-redux";

const SearchBox = props => {
    
    console.log(props.searchBoxStatus)
    console.log(props.searchBoxValue)
    
    const cls = [
        "form-control",
        classes.SearchBox
    ]

    return (
        <div className="col-xl-2 col-md-6 col-sm-5">
            <input
                className={cls.join(" ")}
                type="text"
                onFocus={props.onSearchBox}
                onBlur={props.onSearchBox}
                placeholder="Поиск по названию"
                onChange={props.onHandleChange}
            />
        </div>
    )
}

function mapStateToProps(state){
    return {
        searchBoxStatus: state.isSearchBox,
        searchBoxValue: state.searchBoxValue,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchBox: () => dispatch(searchBoxActive()),
        onHandleChange: event => dispatch(changeSearchBoxValue(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)