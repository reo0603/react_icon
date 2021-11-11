import * as utils from './common/utils.js';
import { getOptions } from "./options.js";
import { ACTIVE } from './common/selectors.js';
import { updateState } from './stateUpdates.js';
import { getState } from './state.js';
import { FP } from './common/constants.js';

let startingSection = null;
FP.getActiveSection = getActiveSection;

export function getStartingSection(){
    return startingSection;
}


/**
* Styling vertical sections
*/
export function styleSection(section){
    var sectionElem = section.item;
    var index = section.index();

    //if no active section is defined, the 1st one will be the default one
    if(!index && !getState().activeSection) {
        utils.addClass(sectionElem, ACTIVE);
        updateState();
    }
    startingSection = getState().activeSection.item;

    if(getOptions().paddingTop){
        utils.css(sectionElem, {'padding-top': getOptions().paddingTop});
    }

    if(getOptions().paddingBottom){
        utils.css(sectionElem, {'padding-bottom': getOptions().paddingBottom});
    }

    if (typeof getOptions().sectionsColor[index] !==  'undefined') {
        utils.css(sectionElem, {'background-color': getOptions().sectionsColor[index]});
    }

    if (typeof getOptions().anchors[index] !== 'undefined') {
        sectionElem.setAttribute('data-anchor', section.anchor);
    }
}

/**
* Gets the active section.
*/
export function getActiveSection(){
    return getState().activeSection;
}