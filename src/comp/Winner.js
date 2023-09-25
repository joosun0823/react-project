import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

function Winner() {
  const navigate = useNavigate();
  const location = useLocation();
  const winner = location.state.winner;


  return (
    <article className="winner">
      <span class="material-symbols-outlined icon" onClick={()=>{ navigate('/'); }}>home</span>
        {winner && (
          <div className="winner_">
            
            <p>{winner.name}</p>
            <figure><img src={`${winner.img}`}/></figure>
            <span>우승!</span>
          </div>
        )}

    </article>
  );
}

export default Winner;