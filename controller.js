
var editingMode = { rect: 0, line: 1 };

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
    }.bind(this);


	this.DnD = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(){

        // update variables
        this.getCurrentValues();

        // create the shape
        if(this.currEditingMode == editingMode.line)
            this.currentShape = new Line(this.DnD.getXDep(), this.DnD.getYDep(), this.DnD.getXDep(), this.DnD.getYDep(), this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.rect)
            this.currentShape = new Rectangle(this.DnD.getXDep(), this.DnD.getYDep(), 0, 0, this.currColour, this.currLineWidth);

        // Paint it
        this.currentShape.paint(ctx, canvas);
    }.bind(this);

	this.onInteractionUpdate = function(){
        // update the shape
        if(this.currEditingMode == editingMode.line)
            this.currentShape = new Line(this.DnD.getXDep(), this.DnD.getYDep(), this.DnD.getXFin(), this.DnD.getYFin(), this.currColour, this.currLineWidth);
        else if(this.currEditingMode == editingMode.rect)
            this.currentShape = new Rectangle(this.DnD.getXDep(), this.DnD.getYDep(),  this.DnD.getXFin() - this.DnD.getXDep(), this.DnD.getYFin() - this.DnD.getYDep(), this.currColour, this.currLineWidth);

        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);

        // repaint the shape
        this.currentShape.paint(ctx, canvas);
	}.bind(this);

	this.onInteractionEnd = function(){
        console.log("end");
        if(this.currEditingMode == editingMode.line)
            this.currentShape = new Line(this.DnD.getXDep(), this.DnD.getYDep(), this.DnD.getXFin(), this.DnD.getYFin(), this.currColour, this.currLineWidth);
        else
            this.currentShape = new Rectangle(this.DnD.getXDep(), this.DnD.getYDep(), this.DnD.getXFin() - this.DnD.getXDep(), this.DnD.getYFin() - this.DnD.getYDep(), this.currColour, this.currLineWidth);

        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addShape(this.currentShape);
        drawing.paint(ctx, canvas);

        this.currentShape = 0;
        updateShapeList();
	}.bind(this);
}


