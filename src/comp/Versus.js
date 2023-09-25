import { useContext, useEffect, useState } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import { MyContext } from '../Context';

function Versus() {
  const location = useLocation();
  const {data} = useContext(MyContext);
  const category = location.state.category;
  const inputData = location.state.inputData;
  const [random, setRandom] = useState([]);
  const [display, setDisplay] = useState([]);
  const [winner, setWinner] = useState([]);
  const [length, setLength] = useState(); 
  const navigate = useNavigate();
  let categoryData;

  console.log(inputData);
  useEffect(()=>{
    if(inputData) {
      categoryData = inputData;
    } else {
      categoryData = data[category];
    }
    const randomData = categoryData.sort(() => 0.5 - Math.random());
    const selectedData = randomData.slice(0, 16);
    setRandom(selectedData);
    setDisplay([selectedData[0], selectedData[1]])
    setLength(selectedData.length)

  },[])

  const clickHandler = (item)=>{
    if( random.length <= 2 ){
      if( winner.length === 0 ) {
        setDisplay([item]);

      } else {
        let updatedData = [...winner, item];
        setRandom(updatedData);
        setDisplay([updatedData[0],updatedData[1]]);
        setWinner([]);
        setLength(updatedData.length)

      }
      
    } else if( random.length > 2 ){
      setWinner([...winner, item]);
      setDisplay([random[2],random[3]]);
      setRandom(random.slice(2));
    }
    
  }



  return (
    <article className="versus">
      <span className="material-symbols-outlined icon" onClick={()=>{ navigate('/'); }}>home</span>
      <h2 className="category_title">{category}</h2>
      {length === 16 && <div className="round"> 16강 </div>}
      {length === 8 && <div className="round"> 8강 </div>}
      {length === 4 && <div className="round"> 4강 </div>}
      {length ===  2  && <div className="round">결승</div>}
      <div className="versus_box">
      <ul className="versus_item">
      {
        display.map((item)=>(
          <li 
          >
            <span>{item.name}</span>
            <figure
            key={item.id} 
            onClick={()=>{ 
              clickHandler(item); 
              if( length === 2){
                navigate('/winner',{ state:{ winner: item}});
              }
            }}>
              <img src={`${item.img}`}/>
            </figure>
          </li>
        ))
      }

      </ul>
      
      <p>
        <strong>VS</strong>
        <span> 당신의 선택은? </span>
      </p>
      </div>
    </article>
  )
}

export default Versus