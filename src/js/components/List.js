import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

const mapStatetoProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <Item article={el} key={el.id} />
        ))}
    </ul>
)

const List = connect(mapStatetoProps)(ConnectedList)

export default List