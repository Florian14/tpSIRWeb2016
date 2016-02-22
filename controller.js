
var editingMode = { rect: 0, line: 1, circle: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    this.getCurrentValues = function(){
        this.currColour = $('#colour').val();
        this.currLineWidth = $('#spinnerWidth').val();
        if($('#butLine')[0].checked)
            this.currEditingMode = editingMode.line;
        else if($('#butRect')[0].checked)
            this.currEditingMode = editingMode.rect;
        else if($('#butCircle')[0].checked)
            this.currEditingMode = editingMode.circle;
    }.bind(this);


	this.DnD = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(){

        // update variables
        this.getCurrentValues();

        // create the shape
        if(this.currEditingMode == editingMode.line)
            this.currentShape = new Line(this.DnD.xDep, this.DnD.yDep, this.DnD.xDep, this.DnD.yDep, this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.rect)
            this.currentShape = new Rectangle(this.DnD.xDep, this.DnD.yDep, 0, 0, this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.circle)
            this.currentShape = new Circle(this.DnD.xDep, this.DnD.yDep, 0, this.currColour, this.currLineWidth);

        // Paint it
        this.currentShape.paint(ctx, canvas);
    }.bind(this);

	this.onInteractionUpdate = function(){
        // update the shape
        if(this.currEditingMode == editingMode.line)
            this.currentShape = new Line(this.DnD.xDep, this.DnD.yDep, this.DnD.xFin, this.DnD.yFin, this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.rect)
            this.currentShape = new Rectangle(this.DnD.xDep, this.DnD.yDep,  this.DnD.xFin - this.DnD.xDep, this.DnD.yFin - this.DnD.yDep, this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.circle) {
            var radius = Math.sqrt(Math.pow(this.DnD.xFin - this.DnD.xDep, 2) + Math.pow(this.DnD.yFin - this.DnD.yDep, 2));
            this.currentShape = new Circle(this.DnD.xDep, this.DnD.yDep, radius, this.currColour, this.currLineWidth);
        }
        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);

        // repaint the shape
        this.currentShape.paint(ctx, canvas);
	}.bind(this);

	this.onInteractionEnd = function(){
        if(this.currEditingMode == editingMode.line)
            this.currentShape = new Line(this.DnD.xDep, this.DnD.yDep, this.DnD.xFin, this.DnD.yFin, this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.rect)
            this.currentShape = new Rectangle(this.DnD.xDep, this.DnD.yDep, this.DnD.xFin - this.DnD.xDep, this.DnD.yFin - this.DnD.yDep, this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.circle) {
            var radius = Math.sqrt(Math.pow(this.DnD.xFin - this.DnD.xDep, 2) + Math.pow(this.DnD.yFin - this.DnD.yDep, 2));
            this.currentShape = new Circle(this.DnD.xDep, this.DnD.yDep, radius, this.currColour, this.currLineWidth);
        }
        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addShape(this.currentShape);
        drawing.paint(ctx, canvas);

        this.currentShape = 0;
        drawing.updateShapeList();
	}.bind(this);
}


