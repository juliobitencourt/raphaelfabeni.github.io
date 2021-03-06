var changeColor = {
    config: {
        btn: document.getElementById('color'),
        theBody: document.getElementById('hold'),
        colors: ['default', 'gray', 'brown', 'blue', 'purple']
    },

    init: function() {
        this.config.btn.addEventListener('click', this.classToBody);
    },

    classToBody: function() {
        var current = changeColor.config.theBody.className;
        var newClass = changeColor.randNum( changeColor.config.colors, current );

        changeColor.config.theBody.className = '';
        changeColor.config.theBody.classList.add( newClass );
    },

    getRandom: function(element) {
        return element[Math.floor(Math.random() * element.length)];
    },

    getClass: function(element) {
        return element.className;
    },

    randNum: function(arr, excludeColor){
        var randColor = Math.floor( Math.random() * arr.length );
        if( arr[randColor] == excludeColor ) {
            return this.randNum( arr, excludeColor );
        } else {
            return arr[randColor];
        }
    }
};

changeColor.init();

function getLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if( links[i].host !== location.host ) {
            links[i].target = '_blank';
        }
    }
}

getLinks();