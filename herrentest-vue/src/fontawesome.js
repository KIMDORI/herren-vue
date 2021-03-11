import Vue from "vue";

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';


import {faCaretRight, faCaretLeft, faShoppingCart, faAngleRight, faImage, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faCaretRight, faCaretLeft, faShoppingCart, faAngleRight, faImage, faPlusCircle);

Vue.component('fa',FontAwesomeIcon);