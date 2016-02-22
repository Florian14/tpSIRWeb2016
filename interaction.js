
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    var xDep = 0;
    var yDep = 0;
    var xFin = 0;
    var yFin = 0;
    var selected = false;

	// Developper les 3 fonctions gérant les événements
    this.presser = function(evt){
        selected = true;
        var pos = getMousePosition(canvas, evt);
        this.xDep = this.xFin = pos.x;
        this.yDep = this.yFin = pos.y;
        interactor.onInteractionStart(this);
    }.bind(this);
    this.deplacer = function(evt){
        if(selected){
            var pos = getMousePosition(canvas, evt);
            this.xFin = pos.x;
            this.yFin = pos.y;
            interactor.onInteractionUpdate(this);
        }
    }.bind(this);
    this.relacher = function(evt){
        if(selected){
            interactor.onInteractionEnd(this);
            selected = false;
        }
    }.bind(this);

    this.getXDep = function(){ return this.xDep;}.bind(this);
    this.getYDep = function(){ return this.yDep;}.bind(this);
    this.getXFin = function(){ return this.xFin;}.bind(this);
    this.getYFin = function(){ return this.yFin;}.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.presser, false);
    canvas.addEventListener('mousemove', this.deplacer, false);
    canvas.addEventListener('mouseup', this.relacher, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
