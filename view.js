
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Shape.prototype.paint = function(ctx) {
    console.log("Shape.paint");
    ctx.fillStyle = this.getCouleur();
    ctx.fill();
    ctx.lineWidth = this.getEpaisseur();
}

Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    console.log("Rectangle.paint");
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    console.log("Line.paint");
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    console.log("Drawing.paint");
    console.log(this.getShapes());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getShapes().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
