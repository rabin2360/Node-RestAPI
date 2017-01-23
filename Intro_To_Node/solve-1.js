//importing the rectangle-1 module
//shows how functionality can be defined in modules and can be exported/imported

var rect = require('./rectangle-1');

function solveRect(l, b)
{
	console.log("Solving for rectangle with l = "+l+" and b = "+b);

	if(l < 0 || b < 0)
	{
		console.log("Inappropriate rectangle dimensions. Please check length and breadth");	
	}
	else
	{
		console.log("The area is: "+ rect.area(l,b));
		console.log("The perimeter is: "+rect.perimeter(l,b));
	}
}

solveRect(2,4);
solveRect(3,5);
solveRect(-1,3);