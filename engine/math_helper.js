

function is_in_radius(center, point, radius){

	let x = point.x - center.x;
	let y = point.y - center.y;

	return x * x + y * y < radius * radius;

}