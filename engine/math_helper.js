function is_in_radius(center, point, radius) {

	let x = point.x - center.x;
	let y = point.y - center.y;

	return x * x + y * y < radius * radius;

}

function get_distance(point1, point2) {

	let x = point1.x - point2.x;
	let y = point1.y - point2.y;

	return Math.sqrt(x * x + y * y);

}

function intersection_square(square, point) {
	intersection_1 = (square[1][0] - square[0][0]) * (point[1] - square[0][1]) - (square[1][1] - square[0][1]) * (point[0] - square[0][0]);
	intersection_2 = (square[2][0] - square[1][0]) * (point[1] - square[1][1]) - (square[2][1] - square[1][1]) * (point[0] - square[1][0]);
	intersection_3 = (square[3][0] - square[2][0]) * (point[1] - square[2][1]) - (square[3][1] - square[2][1]) * (point[0] - square[2][0]);
	intersection_4 = (square[0][0] - square[3][0]) * (point[1] - square[3][1]) - (square[0][1] - square[3][1]) * (point[0] - square[3][0]);

	if (intersection_1 > 0 && intersection_2 > 0 && intersection_3 > 0 && intersection_4 > 0) return true;

	return false;
}