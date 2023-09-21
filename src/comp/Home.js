import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';
import { useContext } from 'react';

function Home() {

  const {data} = useContext(MyContext);

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategoryData(data[category]);
  };

  return (
    <article className="home">
      <h2>
        이상형 월드컵
      </h2>
      
      <div className="buttons">
        <button className="category_button" onClick={()=>{ 
          handleCategoryClick('남자 연예인') 
          navigate('/versus', {state:{category: '남자 연예인'}})
          }}>남자 연예인</button>
        <button className="category_button" onClick={()=>{ 
        handleCategoryClick('여자 연예인') 
        navigate('/versus', {state:{category: '여자 연예인'}})
        }}>여자 연예인</button>
        <button className="category_button" onClick={()=>{ 
        handleCategoryClick('남자 축구선수') 
        navigate('/versus', {state:{category: '남자 축구선수'}})
        }}>남자 축구선수</button>
        <button className="category_button" onClick={()=>{ 
        handleCategoryClick('귀여운 동물') 
        navigate('/versus', {state:{category: '귀여운 동물'}})
        }}>귀여운 동물</button>
        <p className="button_detail">☆ 위 항목들은 모두 16강으로 이루어져있습니다.</p>
        <span></span>
        <button className="category_button" onClick={()=>{ 
        navigate('/insert')
        }}>내가 만들기</button>
      </div>
    </article>
  )
}


export default Home