var cenarioCriado = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,1],
	[1,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,5,1,1,1,1,1,1,5,1,1,1,1,1,1,5,1,5,1,1,1,5,1],
	[1,5,5,5,5,5,1,5,1,1,1,5,5,5,5,5,5,5,1,1,1,5,1,5,5,5,5,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,0,1,0,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,0,1,3,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,3,1,0,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,0,1,3,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[0,5,5,5,5,5,5,5,5,5,5,5,1,3,0,0,1,5,5,5,5,5,5,5,5,5,5,5,0],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,1,1,1,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,5,5,4,5,5,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,1,5,1,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,1,1,1,1,1,5,1,1,1,5,1,1,5,1,1,5,1,1,1,5,1,1,1,1,1,5,1],
	[1,5,5,5,5,5,1,5,1,1,1,5,5,5,5,5,5,5,1,1,1,5,1,5,5,5,5,5,1],
	[1,5,1,1,1,5,1,5,1,1,1,1,1,1,5,1,1,1,1,1,1,5,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,5,1],
	[1,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1] ];


	var cenarioCriado1 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,1],
	[1,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,5,1,0,1,1,1,1,5,1,1,1,1,0,1,5,1,5,1,1,1,5,1],
	[1,5,5,5,5,5,5,5,1,0,1,5,5,5,5,5,5,5,1,0,1,5,5,5,5,5,5,5,1],
	[1,1,1,1,1,1,1,5,1,0,0,5,1,0,1,2,1,5,0,0,1,5,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,1,5,1,1,1,5,1,0,1,3,1,5,1,1,1,5,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,5,1,0,0,5,1,3,1,0,1,5,0,0,1,5,1,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,5,1,0,1,5,0,0,1,3,0,5,1,0,1,5,1,1,1,1,1,1,1],
	[0,5,5,5,5,5,5,5,5,5,5,5,1,3,0,0,1,5,5,5,5,5,5,5,5,5,5,5,5],
	[1,1,1,1,1,1,1,5,1,0,1,5,1,1,0,1,1,5,1,1,1,5,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,1,5,0,1,0,5,5,5,5,5,5,5,1,1,1,5,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,5,1,0,1,5,1,1,5,1,1,5,1,1,1,5,1,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,5,0,0,0,5,1,1,5,1,1,5,0,0,0,5,1,1,1,1,1,1,1],
	[1,5,5,5,5,5,5,5,1,1,1,5,5,5,5,5,5,5,1,1,1,5,5,5,5,5,5,5,1],
	[1,5,1,1,1,5,1,5,1,1,1,1,1,1,5,1,1,1,1,1,1,5,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,5,1,1,1,5,1],
	[1,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,1,1,5,1],
	[1,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1] ];