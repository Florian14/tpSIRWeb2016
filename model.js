// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.forms = new Array();
    this.getForms = function() { return this.forms;}.bind(this);
};

function Form(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

function Line(couleur, epaisseur, x1, y1, x2, y2){
    Form.call(this, couleur, epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.getInitX = function() { return this.x1;}.bind(this);
    this.getInitY = function() { return this.y1;}.bind(this);
    this.getFinalX = function() { return this.x2;}.bind(this);
    this.getFinalY = function() { return this.y2;}.bind(this);
};

function Rectangle(couleur, epaisseur, x1, y1, largeur, hauteur){
    Form.call(this, couleur, epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.largeur = largeur;
    this.hauteur = hauteur;

    this.getInitX = function() { return this.x1;}.bind(this);
    this.getInitY = function() { return this.y1;}.bind(this);
    this.getFinalX = function() { return this.x1 + this.largeur;}.bind(this);
    this.getFinalY = function() { return this.y1 + this.hauteur;}.bind(this);
};