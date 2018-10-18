import React from 'react'
import {deleteArticle} from '../actions'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article))
    };
};

const ConnectedItem = ({article, deleteArticle}) => (
    <li className="list-group-item">
        {article.title}
        <button onClick={deleteArticle.bind(this, article)}>Delete Article</button>
    </li>
)

const List = connect(null, mapDispatchToProps)(ConnectedItem)

export default List