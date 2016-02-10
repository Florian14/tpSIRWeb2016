// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapes = new Array();

    this.addShape = function(shape) { this.shapes.push(shape);}.bind(this);
    this.getShapes = function() { return this.shapes;}.bind(this);
};

function Shape(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
	
	this.getCouleur = function() { return this.couleur;}.bind(this);
	this.getEpaisseur = function() { return this.epaisseur;}.bind(this);
};

function Line(x1, y1, x2, y2, epaisseur, couleur){
    Shape.call(this, couleur, epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.getInitX = function() { return this.x1;}.bind(this);
    this.getInitY = function() { return this.y1;}.bind(this);
    this.getFinalX = function() { return this.x2;}.bind(this);
    this.getFinalY = function() { return this.y2;}.bind(this);
};
Line.prototype = new Shape();

function Rectangle(x1, y1, largeur, hauteur, epaisseur, couleur){
    Shape.call(this, couleur, epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.largeur = largeur;
    this.hauteur = hauteur;

    this.getInitX = function() { return this.x1;}.bind(this);
    this.getInitY = function() { return this.y1;}.bind(this);
    this.getLargeur = function() { return this.largeur;}.bind(this);
    this.getHauteur = function() { return this.hauteur;}.bind(this);
    this.getFinalX = function() { return this.x1 + this.largeur;}.bind(this);
    this.getFinalY = function() { return this.y1 + this.hauteur;}.bind(this);
};
Rectangle.prototype = new Shape();