import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Insert() {
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

  const navigate = useNavigate();

  const startGame = () => {
    const updatedData = inputData.map((item) => ({
      ...item,
      name: item.name || '빈 이름',
      img: '', 
    }));

    navigate('/versus', { state: { inputData: updatedData } });
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