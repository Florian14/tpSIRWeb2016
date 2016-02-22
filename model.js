// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapes = [];

    this.addShape = function(shape) { this.shapes.push(shape);}.bind(this);
    this.removeShape = function(id) { this.shapes.splice(id,1); console.log(this.shapes);}.bind(this);
}

function Shape(color, dash){
    this.color = color;
    this.dash = dash;
}

function Line(x1, y1, x2, y2, color, dash){
    Shape.call(this, color, dash);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
Line.prototype = new Shape();

function Rectangle(x1, y1, width, height, color, dash){
    Shape.call(this, color, dash);
    this.x1 = x1;
    this.y1 = y1;
    this.width = width;
    this.height = height;
}
Rectangle.prototype = new Shape();