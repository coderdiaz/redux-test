import React from 'react'
import {deleteArticle, doneArticle} from '../actions'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        doneArticle: article => dispatch(doneArticle(article))
    };
};

const ConnectedItem = ({article, deleteArticle, doneArticle}) => (
    <li
        className="list-group-item"
        style={{textDecoration: doneArticle ? 'line-through' : 'none'}}>
        {article.title}
        <button
            className="ml-2"
            onClick={deleteArticle.bind(this, article)}>
            Delete Article
        </button>
        <input
            className="ml-2"
            type="checkbox" name="" id="check-box" 
            onClick={doneArticle.bind(this, article)} />
    </li>
)

const List = connect(null, mapDispatchToProps)(ConnectedItem)

export default List