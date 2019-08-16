import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
          {/*className="App-link"*/}
          {/*href="https://reactjs.org"*/}
          {/*target="_blank"*/}
          {/*rel="noopener noreferrer"*/}
        {/*>*/}
          {/*Learn React*/}
        {/*</a>*/}
      {/*</header>*/}

      <main>
        <div className="wrapper">
          <section className="card">
            <header className="card__header">
              <div className="card__number">
                <span>Билет 1</span>
              </div>
              <div className="card__random">
                <div className="card__wand-button"></div>
              </div>
            </header>

            <div className="card__fields">
              <div className="card__field field">
                <header className="field__header">
                  <div className="field__description">
                    <div className="field__number">
                      <span>Поле 1</span>
                    </div>
                    <div className="field__text">
                      <span>Отметьте 8 чисел.</span>
                    </div>
                  </div>
                </header>
                <div className="field__table">
                  <div className="filed__cell ">
                    <span>1</span>
                  </div>
                  <div className="filed__cell ">
                    <span>2</span>
                  </div>
                  <div className="filed__cell">
                    <span>3</span>
                  </div>
                  <div className="filed__cell">
                    <span>4</span>
                  </div>
                  <div className="filed__cell">
                    <span>5</span>
                  </div>
                  <div className="filed__cell">
                    <span>6</span>
                  </div>
                  <div className="filed__cell">
                    <span>7</span>
                  </div>
                  <div className="filed__cell">
                    <span>8</span>
                  </div>
                  <div className="filed__cell">
                    <span>9</span>
                  </div>
                  <div className="filed__cell">
                    <span>10</span>
                  </div>
                  <div className="filed__cell">
                    <span>11</span>
                  </div>
                  <div className="filed__cell">
                    <span>12</span>
                  </div>
                  <div className="filed__cell">
                    <span>13</span>
                  </div>
                  <div className="filed__cell active">
                    <span>14</span>
                  </div>
                  <div className="filed__cell">
                    <span>15</span>
                  </div>
                  <div className="filed__cell">
                    <span>16</span>
                  </div>
                  <div className="filed__cell">
                    <span>17</span>
                  </div>
                  <div className="filed__cell">
                    <span>18</span>
                  </div>
                  <div className="filed__cell">
                    <span>19</span>
                  </div>
                </div>
              </div>
              <div className="card__field field">
                <header className="field__header">
                  <div className="field__description">
                    <div className="field__number">
                      <span>Поле 2</span>
                    </div>
                    <div className="field__text">
                      <span>Отметьте 1 число.</span>
                    </div>
                  </div>
                </header>
                <div className="field__table">
                  <div className="filed__cell">
                    <span>1</span>
                  </div>
                  <div className="filed__cell">
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card__button">
              <button>Показать результат</button>
            </div>

            <div className="card__text-info">
              <span>Ого, вы выиграли! Поздравляем!</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
