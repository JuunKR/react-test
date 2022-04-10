import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = "강남 고기 맛집";
    
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  let [따봉, 따봉변경] = useState([]);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  var 어레이 = [2,3,4];

  var 뉴어레이 = 어레이.map(function(a){
    return a * 2
  })

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray)
  }

  function 모달변경(){
    if(modal===false){
      modal변경(true)
    }else{
      modal변경(false)
    }
  }
  
  function 모달변경2(){
    modal변경(!modal)
  }
  
  function 반복된UI(){
    var 어레이 = [];

    for (var i = 0; i < 3; i++){
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }

  function 글추가(){
    글제목변경(글제목.push(입력값))
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>

      { 
        글제목.map(function(글, i){
          return (
            <div className="list" key={i}>
            <h3 onClick={ ()=>{ 누른제목변경(i) } }>
              { 글 }
              <span onClick={ ()=>{ 
                var new따봉 = [...따봉]
                new따봉.push(0)
                new따봉[i] = new따봉[i] + 1
                따봉변경(new따봉)} }>👍</span>
              { 따봉[i] }
            </h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>)
        })
      }

      {/* <button onClick={ ()=>{ 누른제목변경(0) } }> 버튼1 </button>
      <button onClick={ ()=>{ 누른제목변경(1) } }> 버튼2 </button>
      <button onClick={ ()=>{ 누른제목변경(2) } }> 버튼3 </button> */}

      {/* { 입력값 }
      <input onChange={ (e)=> {입력값변경(e.target.value)}}></input> */}

      <div>
        {/* {입력값}
        <div>{글제목}</div> */}
        <input onChange={ (e)=>{입력값변경(e.target.value)} }></input>
        <button onClick={ ()=>{
          var arrayCopy = [...글제목] 
          arrayCopy.push(입력값);
          글제목변경( arrayCopy );
        } }>저장</button>
      </div>
      
      <button onClick={ 모달변경2 }> 열고닫기 </button>

      <Profile></Profile>

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal>
        : null
      }


    </div>
  );
}
function Modal(props){
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = { name : "Kim", age : 30 }
  }

  changeName = () =>{
    this.setState( { name : "Kim"})
  }

  render(){
    return(
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name }</p>
        <button onClick={()=>{ this.setState( { name : "Park"} ) }}> park버튼 </button>
        <button onClick={ this.changeName }> kim버튼 </button>

      </div>
    )
  }
}

export default App;
