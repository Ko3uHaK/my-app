import React from 'react';

function App() {
	let text;
	const isAdult = true;
	if(isAdult){
		text = <p>yes</p>;
	}else{
		text =<p>no</p>;
	}
	return text;
	// const str1 = 'label';
	// const str2 = 'block';
	// const str3 = 'elem';
	
	// return <div>
	// 	<label id={str1} htmlFor={str2} className={str3}>text</label> <br/>
	// 	<input id={str2}/>
	// </div>;
	// const class1 = 'block1';
	// const class2 = 'block2';
	
	// return <div>
	// 	<p className={class1}>text</p>
	// 	<p className={class2}>text</p>
	// </div>;
	// const attr = 'block';
	
	// return <div className={attr}>
	// 	text
	// </div>;
	// const items = <><li>text1</li><li>text2</li><li>text3</li></>;
	
	// return <ul>
	// 	{items}
	// </ul>
	// const li1 = <li>text1</li>;
	// const li2 = <li>text2</li>;
	// const li3 = <li>text3</li>;
	// return (
	// 	<ul>
	// 		{li1}{li2}{li3}
	// 	</ul>
	// );
	// const obj = {name: 'john', surname: 'smit'};
	// return(
	// 	<p>
	// name:    <span>{obj.name}</span> <br/>
	// surname: <span>{obj.surname}</span>
	// 	</p>
	// )
	// const arr = [1, 2, 3, 4, 5];
	// return(
	// 	<ul>
	// 		<li>{arr[0]}</li>
	// 		<li>{arr[1]}</li>
	// 		<li>{arr[2]}</li>
	// 		<li>{arr[3]}</li>
	// 		<li>{arr[4]}</li>
	// 	</ul>
	// );
	// const name = 'user';
	// const age  = '30';
	
	// return <div>
	// 	name: {name}<br/>
	// 	age:  {age}
	// </div>;
	// const str1 = 'text1';
	// const str2 = 'text1';
	// return (
	// 	<div>
	// 	<p>{str1}</p>
	// 	<p>{str2}</p>
	// </div>
	// );
	// (
	// 	<>
	// 		<input/>
	// 		<br/>
	// 		<input/>
	// 		<br/>
	// 		<input/>
	// 	</>
	// )
	// (
	// 	<input />
	// )
	// (
	// 	<>
	// <ul>
	// 	<li>text1</li>
	// 	<li>text2</li>
	// 	<li>text3</li>
	// </ul>
	// <ul>
	// 	<li>text1</li>
	// 	<li>text2</li>
	// 	<li>text3</li>
	// </ul>;
	// 	</>
	// );
	// (
	// 	<ul>
	// 	<li>text1</li>
	// 	<li>text2</li>
	// 	<li>text3</li>
	// </ul>
	// );
}

export default App;