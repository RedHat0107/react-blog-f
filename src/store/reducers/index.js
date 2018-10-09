import info from './info'
import articles from './articles';
import article from './article';
import say from './say';
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
//router 是用来把路径同步仓库中的
export default combineReducers({
    info,
    articles,
    article,
    say,
    router:routerReducer
});
