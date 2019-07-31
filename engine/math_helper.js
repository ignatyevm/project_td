
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

function is_in_square(square, point) {
	let intersection_1 = (square[1][0] - square[0][0]) * (point[1] - square[0][1]) - (square[1][1] - square[0][1]) * (point[0] - square[0][0]);
	let intersection_2 = (square[2][0] - square[1][0]) * (point[1] - square[1][1]) - (square[2][1] - square[1][1]) * (point[0] - square[1][0]);
	let intersection_3 = (square[3][0] - square[2][0]) * (point[1] - square[2][1]) - (square[3][1] - square[2][1]) * (point[0] - square[2][0]);
	let intersection_4 = (square[0][0] - square[3][0]) * (point[1] - square[3][1]) - (square[0][1] - square[3][1]) * (point[0] - square[3][0]);

	 return ((intersection_1 >= 0 && intersection_2 >= 0 && intersection_3 >= 0 && intersection_4 >= 0) || 
		(intersection_1 < 0 && intersection_2 < 0 && intersection_3 < 0 && intersection_4 < 0));
}

function get_rotation_angel(point1, point2){

	let ox = [point2.x - point1.x, 0];
	let vector = [point2.x - point1.x, point2.y - point1.y];

	let ox_length = Math.sqrt(ox[0] * ox[0] + ox[1] * ox[1]);;
	let vector_length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);

	let _cos = (ox[0] * vector[0] + ox[1] * vector[1]) / (ox_length * vector_length);
	let angle = Math.acos(_cos) * (180 / Math.PI);

	if (point1.x >= point2.x && point1.y >= point2.y){
		return angle - HALF_PI;
	}else if (point1.x < point2.x && point1.y >= point2.y){
		return - angle + HALF_PI;
	}else if (point1.x > point2.x && point1.y <= point2.y){
		return - angle - HALF_PI;
	}else{
		return angle + HALF_PI;
	}
}