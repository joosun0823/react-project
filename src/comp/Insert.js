import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

function Insert() {
  const {data} = useContext(MyContext);
  const [inputData, setInputData] = useState([
    {
      id: 1,
      name: '',
      img: '',
    },
    {
      id: 2,
      name: '',
      img: '',
    },
    {
      id: 3,
      name: '',
      img: '',
    },
    {
      id: 4,
      name: '',
      img: '',
    },
    {
      id: 5,
      name: '',
      img: '',
    },
    {
      id: 6,
      name: '',
      img: '',
    },
    {
      id: 7,
      name: '',
      img: '',
    },
    {
      id: 8,
      name: '',
      img: '',
    },
  ]);



  useEffect(()=>{
    setInputData(data["커스텀"])
  },[])


  const navigate = useNavigate();

  const startGame = () => {
    // 모든 입력 필드가 비어 있지 않은지 확인하는 조건
    if (inputData.every(item => item.name.trim() !== '')) {
      const updatedData = inputData.map((item) => ({
        ...item,
        name: item.name || '빈 이름',
        img: `${item.img}`, 
      }));
  
      navigate('/versus', { state: { inputData: updatedData } });
    } else {
      // 모든 입력 필드가 채워지지 않았을 때 처리할 로직 추가
      alert('모든 창을 채워주세요.');
    }
  };

  const handleInputChange = (index, value) => {

    const updatedData = [...inputData];
    updatedData[index].name = value;
    setInputData(updatedData);
  };

  return (
    <article className="insert">
      <div className="insert_input">
      {inputData.map((item, index) => (
        <input type="name"
          key={item.id}
          value={item.name}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      </div>
      <button onClick={startGame}>시작하기</button>
    </article>
  );
}

export default Insert;