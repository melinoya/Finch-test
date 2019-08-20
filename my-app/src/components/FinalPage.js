import React from 'react';

const FinalPAge = (props) => {
  console.log(props)
  return (
      <section className="card">
        <header className="card__header">
          <div className="card__number">
            <span>Билет 1</span>
          </div>
        </header>
        <div className="card__text-info">
          <span>{props.statusWin ? 'Ого, вы выиграли! Поздравляем!' : 'Вы проиграли. Но в следующий раз обязательно повезет!'}</span>
        </div>
      </section>
  );
};

export default FinalPAge;
