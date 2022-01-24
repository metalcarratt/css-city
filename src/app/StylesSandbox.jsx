import ViewView from '../building/view/ViewView.jsx';
import StyleView from '../building/style/StyleView.jsx';
import PartsView from '../building/parts/PartsView.jsx';
import AppStyles from './App.module.scss';
import App from './App.js';

function StylesMission() {
    return (
        <div className={`${AppStyles.page} ${AppStyles['styles-sandbox']}`}>
                <ViewView />
                <PartsView className={AppStyles['two-rows']}/>
                <StyleView />
        </div>
    );   
}

export default StylesMission;