import 'react-native-get-random-values'
import { nanoid } from 'nanoid';
import React, {useState} from 'react';

function App() {
	const [value, setValue] = useState('text');
	
	return <div>
		<input value={value} />
	</div>;
	// const [name, setName] = useState('ALex');
	// const [age, setAge] = useState(23);
	// let [inBlock, setInBlock] = useState(false);

	// function clickHandler1(){
	// 	setName('Daniil')
	// }
	// function clickHandler2(){
	// 	setAge('27')
	// }


	// return <div>
	// 	<span>{name}-{age}</span><br/>
	// 	<button onClick={clickHandler1}>Name</button><br/>
	// 	<button onClick={clickHandler2}>Age</button><br/>
	// 	<span>{inBlock ? "заблокирован" : "разблокирован" }</span><br/>
	// 	<span>{!inBlock ? <button onClick={()=> setInBlock(true)}>Заблокировать</button> : <button onClick={()=> setInBlock(false)}>Разблокировать</button>}</span>
	// 	<button onClick={()=>setAge(age +1)}>+1</button>
	// 	<button onClick={()=>setAge(age -1)}>-1</button>
	// </div>;
	// <button onClick={()=> setInBlock(true)}>Заблокировать</button>
	// 	<button onClick={()=> setInBlock(false)}>Разблокировать</button>
	// <span>{setInBlock && <button onClick={clickHandler3}>Заблокировать</button>}</span>
	// <span>{!setInBlock && <button onClick={clickHandler4}>Разблокировать</button>} </span>
	// const prods = [
	// 	{id: id(), name: 'product1', cost: 100},
	// 	{id: id(), name: 'product2', cost: 200},
	// 	{id: id(), name: 'product3', cost: 300},
	// ];
	// function id(){
	// 	 prods.id = nanoid();
	// }
	// const res = prods.map(function(prod){
	// 	return <ul key ={prods.id}>
	// 		<li>{prod.name}</li>
	// 		<li>{prod.cost}</li>
	// 	</ul>
	// });
	// return <ul>
	// 	<li>{res}</li>
	// </ul> 
	// const users = [
	// 	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	// 	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	// 	{id: 3, name: 'user3', surn: 'surn3', age: 32},
	// ];
	// const res = users.map(function(item) {
	// 	return <tr key={item.id}>
	// 	<td>{item.name}</td>
	// 	<td>{item.surn}</td>
	// 	<td>{item.age}</td>
	// 	</tr>;
	// });
	// return <table>
	// 		<thead>
	// 			<tr>
	// 				<td>Name</td>
	// 				<td>Surname</td>
	// 				<td>Age</td>
	// 			</tr>
	// 		</thead>
	// 		<tbody>
	// 			{res}	
	// 		</tbody>
	// </table>;
	// const arr = ['a', 'b', 'c', 'd', 'e'];

	// const res = arr.map(function(item,index) {
	// 	return <li key ={index}>{item}</li>;
	// });
	// return(
	// 	<ul>
	// 		{res}
	// 	</ul>
	// )
	// let arr =[];

	// for (let i=1; i<6;i++){
	// 	arr.push(<li>{i}</li>)
	// }

	// return(
	// 	<ul>
	// 		{arr}
	// 	</ul>
	// );
	// const arr = [
	// 	<li>1</li>,
	// 	<li>2</li>,
	// 	<li>3</li>,
	// 	<li>4</li>,
	// 	<li>5</li>,
	// ];
	// return(
	// 	<ul>
	// 		{arr}
	// 	</ul>
	// );
	// function func(arg,event, res) {
	// 	console.log(arg,event, res );
	// }
	
	// return <div>
	// 	<button onClick={event => func('eee',event,12)}>act</button>
	// </div>;
	// function func(event) {
	// 	console.log(event.target); // объект с событием
	// }
	
	// return <div>
	// 	<button onClick={func}>act</button>
	// </div>;
// 	function show(num){
// 		alert(num);
// 	}
// 	return <div>
// 	<button onClick = {()=>show(1)}>act1</button>
// 	<button onClick = {()=>show(2)}>act2</button>
// 	<button onClick = {()=>show(3)}>act3</button>
// </div>;
	// function show1() {
	// 	alert(1);
	// }
	
	// function show2() {
	// 	alert(2);
	// }
	
	// return <div>
	// 	<button onClick={show1}>act1</button>
	// 	<button onClick={show2}>act2</button>
	// </div>;
		// function showMess() {
		// 	alert('hello');
		// }
		
		// return <div>
		// 	<button onClick={showMess}>show</button>
		// </div>;
	// function getDigitsSum(num){
	// 	let string = num.toString();
	// 	let arr = string.split("");
	// 	let sum = arr.reduce((previousValue, currentValue) => +previousValue + +currentValue);
	// 	return sum;
	// }
	// return <p>
	// {getDigitsSum(12345)}
	// </p>
	// const isAuth = false;
	
	// return <div>
	// 	{!isAuth && <p>пожалуйста, авторизуйтесь</p>}
	// </div>;
	// const isAuth = true;
	
	// return <div>
	// 	{isAuth && <p>вы авторизованы</p>}
	// </div>;
	// const age = 17;
	
	// return <div>
	// 	{age>18 ? <p>yes</p>:<p>no</p>}
	// </div>;
// 	let text;
// 	const isAdmin = true;
// 	if(isAdmin){
// 		text=<div>
// 			<p>asdasf</p>
// 			<p>sdasd</p>
// 		</div>;
// 	}
// return text;
	// let text;
	// const isAdult = true;
	// if(isAdult){
	// 	text = <p>yes</p>;
	// }else{
	// 	text =<p>no</p>;
	// }
	// return text;
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