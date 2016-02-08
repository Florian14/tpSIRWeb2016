
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
        this.xDep = pos.x;
        this.yDep = pos.y;
        console.log("presser : " + this.xDep + ", " +this.yDep);
    }.bind(this);
    this.deplacer = function(evt){
        if(selected){
            var pos = getMousePosition(canvas, evt);
            this.xFin = pos.x;
            this.yFin = pos.y;
            console.log("deplacer : " + this.xFin + ", " +this.yFin);
        }
    }.bind(this);
    this.relacher = function(evt){
        if(selected){
            console.log("relacher : " + this.xFin + ", " +this.yFin);
            selected = false;
        }
    }.bind(this);

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
