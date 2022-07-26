window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          slider = require('./modules/slider'),
          calculator = require('./modules/calculator'),
          forms = require('./modules/forms'),
          modals = require('./modules/modals');
        
    tabs();
    timer();
    cards();
    slider();
    calculator();
    forms();
    modals();
    
});