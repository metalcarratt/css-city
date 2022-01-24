import ViewView from '../building/view/ViewView.jsx';
import StyleView from '../building/style/StyleView.jsx';
import PartsView from '../building/parts/PartsView.jsx';
import InstructionsView from '../building/instructions/InstructionsView.jsx';
import AppStyles from './App.module.scss';

function StylesMission() {
    return (
        <div className={`${AppStyles.page} ${AppStyles['styles-missions']}`}>
            <ViewView />
            <InstructionsView />
            <StyleView />
            <PartsView />
        </div>
    );   
}

export default StylesMission;