function fnHex(x)
{
	y=x.toString(16)
	if(y.length==1){y=0+y}
	return y.toUpperCase()
}

function fnLight(x)
{
	y=x+155
	if(y>255){y=255}
	return y
}

function fnDark(x)
{
	y=x-155
	if(y<0){y=0}
	return y
}


function fnChange()
{
	r = Math.floor(Math.random()*256)
	g = Math.floor(Math.random()*256)
	b = Math.floor(Math.random()*256)
	
	document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
	document.getElementById('hex').innerHTML = '#'+fnHex(r)+fnHex(g)+fnHex(b);
	document.getElementById('rgb').innerHTML = 'RGB('+r+','+g+','+b+')';
	
	if(r+g+b<255)
	{
		document.getElementsByTagName('button')[0].style.backgroundColor = 'rgb('+ fnLight(r) +','+ fnLight(g) +','+ fnLight(b) +')';
		document.getElementsByTagName('button')[0].style.color = 'rgb('+ fnDark(r) +','+ fnDark(g) +','+ fnDark(b) +')';
		document.getElementById('hex').style.color = 'rgb('+ fnLight(r) +','+ fnLight(g) +','+ fnLight(b) +')';
		document.getElementById('rgb').style.color = 'rgb('+ fnLight(r) +','+ fnLight(g) +','+ fnLight(b) +')';
	}
	else
	{
		document.getElementsByTagName('button')[0].style.backgroundColor = 'rgb('+ fnDark(r) +','+ fnDark(g) +','+ fnDark(b) +')';
		document.getElementsByTagName('button')[0].style.color = 'rgb('+ fnLight(r) +','+ fnLight(g) +','+ fnLight(b) +')';
		document.getElementById('hex').style.color = 'rgb('+ fnDark(r) +','+ fnDark(g) +','+ fnDark(b) +')';
		document.getElementById('rgb').style.color = 'rgb('+ fnDark(r) +','+ fnDark(g) +','+ fnDark(b) +')';
	}
	
}