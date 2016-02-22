// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapes = [];

    this.addShape = function(shape) { this.shapes.push(shape);}.bind(this);
    this.getShapes = function() { return this.shapes;}.bind(this);
}

function Shape(color, dash){
    this.color = color;
    this.dash = dash;
	
	this.getColor = function() { return this.color;}.bind(this);
	this.getDash = function() { return this.dash;}.bind(this);
}

function Line(x1, y1, x2, y2, color, dash){
    Shape.call(this, color, dash);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.getInitX = function() { return this.x1;}.bind(this);
    this.getInitY = function() { return this.y1;}.bind(this);
    this.getFinalX = function() { return this.x2;}.bind(this);
    this.getFinalY = function() { return this.y2;}.bind(this);
}
Line.prototype = new Shape();

function Rectangle(x1, y1, width, height, color, dash){
    Shape.call(this, color, dash);
    this.x1 = x1;
    this.y1 = y1;
    this.width = width;
    this.height = height;

    this.getInitX = function() { return this.x1;}.bind(this);
    this.getInitY = function() { return this.y1;}.bind(this);
    this.getWidth = function() { return this.width;}.bind(this);
    this.getHeight = function() { return this.height;}.bind(this);
}
Rectangle.prototype = new Shape();