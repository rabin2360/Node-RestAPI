module.exports = function(x,y, callback)
{
	try
	{
		if(x<0 || y<0)
		{
			throw new Error("Rectangle dimensions are not correct. Re-check it!");
		}
		else
		{
			callback(null, {
				perimeter: function()
				{
					return (2*(x+y));
				},

				area: function()
				{
					return(x*y);
				}
			});
		}
	}
	catch(error)
	{
		//node uses the first parameter as the error that was generated
		callback(error, null);
	}
}