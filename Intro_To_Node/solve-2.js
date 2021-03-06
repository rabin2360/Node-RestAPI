//importing the rectangle-1 module
//shows how functionality can be defined in modules and can be exported/imported

var rect = require('./rectangle-2');

function solveRect(l, b)
{
	console.log("Solving for rectangle with l = "+l+" and b = "+b);

	rect(l, b, function(err, rectangle)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log("The area of the rectangle is "+rectangle.area());
			console.log("The perimeter of the rectangle is "+rectangle.perimeter());
				
		}
	});
};

solveRect(2,4);
solveRect(3,5);
solveRect(-1,3);