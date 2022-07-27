import React,{useCallback,useEffect,useState} from "react";

function Btn(props){
    return (
        <div>
            <button  onClick={()=>{filterList(10)}} >click</button>
        </div>
    )
}

function List({appoint}){
    return ( 
        <figure>
            <img src={appoint.thumbnailUrl} alt={appoint.title}/>
            <figcaption>
            {appoint.title}
            </figcaption>
        </figure>
        )
    
}

function App(){
//  state 설정하기
let [list,setList] = useState([])
    // state 만들기
const filterList = function(num){
    list.filter(
        item => {
            return ( item.albumId === num )
        }
    )
} 
const fetchData = useCallback(
    () =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data =>setList(data) )
    }
)
// effect
useEffect(()=> {fetchData()},[fetchData])
    return (
    <>
    <div>
        <Btn
            list={list}
            setList={setList}/>
    </div>
    <div>
        {filterList.map(
            appoint => <List 
            key = {appoint.id}
            appoint = {appoint}/>
        )}
    </div>
   </>
    )
}

export default App
