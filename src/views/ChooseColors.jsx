import { useState } from 'react';
import Modal from 'views/modal/Modal.jsx';
import paletteStyles from './palette.module.scss';
import colorListStyles from './colorlist.module.scss';
import colorStyles from './color.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changePalette } from '../building/store.js';

const colors = [
    // whites
    "White", "Snow", "HoneyDew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "SeaShell", "Beige", "OldLace", "FloralWhite", "Ivory", "AniqueWhite",
    "Linen", "LavenderBlush", "MistyRose",

    // browns
    "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenrod", "Peru", "Chocolate",
    "SaddleBrown", "Sienna", "Brown", "Maroon",

    // reds
    "IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "Red", "FireBrick", "DarkRed",

    // pinks
    "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed",

    // oranges
    "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange",

    // yellows
    "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki",

    // greens
    "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen",
    "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal",

    // blues
    "Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue",
    "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "MediumSlateBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy",
    "MidnightBlue",

    // purples
    "Lavendar", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "RebeccaPurple", "BlueViolet", "DarkViolet", "DarkOrchid",
    "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "MediumSlateBlue",

    // blacks
    "Gainsboro", "LightGray", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"
]

let keyId = 0;
const nextId = () => keyId++;

function ColorItem(props) {
    return (
        <span onClick={props.onClick} className={props.inColorList ? colorListStyles.colorItem : ''}>
            <span className={colorStyles.color} style={{backgroundColor: props.color}} />
            <label className={colorStyles.colorLabel}>{props.color}</label>
        </span>
    );
}

function ColorDrop(props) {
    const className = `${paletteStyles.colorDrop} ${props.selected ? paletteStyles.colorDropSelected : ''}`;
    return (
        <span className={className} onClick={(e) => props.select(props.number)} >
            <label className={paletteStyles.colorDropLabel}>{props.label}</label>
            <ColorItem id={nextId} color={props.color} />
        </span>
    )
}

function ChooseColors(props) {
    const palette = useSelector((state) => state.building.palette);
    const dispatch = useDispatch();

    const [selectedColorDrop, setSelectedColorDrop] = useState(1);

    function selectColorDrop(colorDrop) {
        setSelectedColorDrop(colorDrop);
    }

    function selectColor(color) {
        dispatch(changePalette({index: selectedColorDrop, color}));
    }

    return (
        <Modal>
            <div className={paletteStyles.palette}>
                <h2>Palette</h2>
                <ColorDrop label="One:" color={palette[0]} number={0} selected={selectedColorDrop === 0} select={selectColorDrop}/>
                <ColorDrop label="Two:" color={palette[1]} number={1} selected={selectedColorDrop === 1} select={selectColorDrop}/>
                <ColorDrop label="Three:" color={palette[2]} number={2} selected={selectedColorDrop === 2} select={selectColorDrop}/>
                <ColorDrop label="Four:" color={palette[3]} number={3} selected={selectedColorDrop === 3} select={selectColorDrop}/>
            </div>
           <h2>Colour List</h2>
            <div className={colorListStyles.colorList}>
                {
                    colors.map(color => <ColorItem key={nextId()} color={color} onClick={() => selectColor(color)} inColorList={true} /> )
                }
            </div>
            <button onClick={props.onDone}>Done</button>
        </Modal>
    );
}

export default ChooseColors;