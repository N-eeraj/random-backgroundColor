body = document.body;
card = document.getElementsByTagName('div')[0];
rgb = document.getElementById('rgb');
hex = document.getElementById('hex');
btn = document.getElementsByTagName('button')[0];

function fnHex(rgbVal)
{
	hexVal = rgbVal.toString(16).toUpperCase();
	if (hexVal.length == 1)
		hexVal = 0 + hexVal
	return hexVal;
}

function fnSecondary()
{
	clrMix = red + green + blue;
	if(clrMix < 400)
		return 'white';
	return 'black';
}

function fnChange()
{
	red = Math.round(Math.random()*255);
	green = Math.round(Math.random()*255);
	blue = Math.round(Math.random()*255);

	clrSecondary = fnSecondary();

	rgb_color = 'RGB(' + red + ',' + green + ',' + blue + ')';
	hex_color = '#' + fnHex(red) + fnHex(green) + fnHex(blue);

	body.style.backgroundColor = rgb_color;
	rgb.style.color = rgb_color;
	hex.style.color = rgb_color;
	btn.style.backgroundColor = rgb_color;

	card.style.backgroundColor = clrSecondary;
	btn.style.color = clrSecondary;

	rgb.innerText = rgb_color;
	hex.innerText = hex_color;
}
