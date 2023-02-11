function formatDuration (seconds) {
	const secondsInMinute = 60;
	const minutesInHours = 60;
	const hoursInDays = 24;
	const daysInYear = 365;
	
	let mass = [];
	if(seconds==0) mass.unshift('now');

	let minutes = Math.floor(seconds/secondsInMinute);
	seconds = seconds - minutes * secondsInMinute;
	if(seconds>0) mass.unshift(seconds + ' second' + (seconds == 1 ? '' : 's'));
	//if(seconds==1) mass.unshift(`${seconds} second`);

	let hours = Math.floor(minutes/minutesInHours);
	minutes = minutes - hours * minutesInHours;
	if(minutes>0) mass.unshift(minutes + ' minute' + (minutes == 1 ? '' : 's'));

	let days = Math.floor(hours/hoursInDays);
	hours = hours - days * hoursInDays;
	if(hours>0) mass.unshift(hours + ' hour' + (hours == 1 ? '' : 's'));

	let years = Math.floor(days/daysInYear);
	days = days - years * daysInYear;
	if(days>0) mass.unshift(days + ' day' + (days == 1 ? '' : 's'));
	if(years>0) mass.unshift(years + ' year' + (years == 1 ? '' : 's'));

	mass = mass.join(', ');
	let lastComma = mass.lastIndexOf(',');
	if (lastComma>0) mass = mass.substring(0, lastComma) + ' and' + mass.substring(lastComma + 1);

	//return mass;
	console.log(mass);
}