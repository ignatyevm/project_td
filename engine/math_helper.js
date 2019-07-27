

function is_in_radius(center, point, radius){

	let x = point.x - center.x;
	let y = point.y - center.y;

	return x * x + y * y < radius * radius;

}

function get_distance(point1, point2){

	let x = point1.x - point2.x;
	let y = point1.y - point2.y;

	return Math.sqrt(x * x + y * y);

}