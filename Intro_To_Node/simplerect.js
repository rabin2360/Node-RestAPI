var rect = {

	perimeter: function (x, y)
	{
		return (2*(x+y));
	},

	area: function(x, y)
	{
		return (x*y);
	}
};

function solveRect(l,b)
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