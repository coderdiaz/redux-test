import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    DONE_ARTICLE
} from "../constants/action-types"

const initialState = {
    articles: [],
    completed: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload],
            };
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload.id ),
            }
        case DONE_ARTICLE:
            return {
                ...state,
                completed: !state.completed
            }

        default:
            return state;
    }
};

export default rootReducer;