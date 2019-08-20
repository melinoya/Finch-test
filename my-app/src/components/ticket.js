import React, {Component} from 'react';
import Fields from './Fields'
import FinalPage from './FinalPage'
import {generateNumbers, sendInfo} from './Util'

class Ticket extends Component {
  constructor() {
    super();
    this.JSONfile = null;
    this.counterJSON = 0;
    this.winningStatus = false;
  }

  state = {
    counters: [
      {first: 0},
      {second: 0}
    ],
    firstTicket: [
      {
        cellNumber: 1,
        cellState: null
      },
      {
        cellNumber: 2,
        cellState: null
      },
      {
        cellNumber: 3,
        cellState: null
      },
      {
        cellNumber: 4,
        cellState: null
      },
      {
        cellNumber: 5,
        cellState: null
      },
      {
        cellNumber: 6,
        cellState: null
      },
      {
        cellNumber: 7,
        cellState: null
      },
      {
        cellNumber: 8,
        cellState: null
      },
      {
        cellNumber: 9,
        cellState: null
      },
      {
        cellNumber: 10,
        cellState: null
      },
      {
        cellNumber: 11,
        cellState: null
      },
      {
        cellNumber: 12,
        cellState: null
      },
      {
        cellNumber: 13,
        cellState: null
      },
      {
        cellNumber: 14,
        cellState: null
      },
      {
        cellNumber: 15,
        cellState: null
      },
      {
        cellNumber: 16,
        cellState: null
      },
      {
        cellNumber: 17,
        cellState: null
      },
      {
        cellNumber: 18,
        cellState: null
      },
      {
        cellNumber: 19,
        cellState: null
      }
    ],
    secondTicket: [
      {
        cellNumber: 1,
        cellState: null
      },
      {
        cellNumber: 2,
        cellState: null
      }
    ],
    infoSent: 0
  };

  //функция для отметки полей

  clickHandlerFirst(key, ticketNum, counterNum, counterName, numQuantity) {
    let element = this.state[ticketNum].filter(item => item.cellNumber === key);
    let counter = {...this.state.counters};

    switch (element[0].cellState) {
      case null:
        if (counter[counterNum][counterName] < numQuantity) {
          counter[counterNum][counterName]++;
          element[0].cellState = 'active';
        }
        break;
      case 'active':
        counter[counterNum][counterName]--;
        element[0].cellState = null;
        break;
    }

    this.setState({
      ...this.state,
      counter,
      element
    })
  }

  //заполение рандомных ячеек при клике на Волшебную палочку

  fillInRandomNumb() {
    let firstArray = generateNumbers(8, 19);
    let secondArray = generateNumbers(1, 2);

    let newState = {...this.state};

    newState.firstTicket.forEach(item => {
      item.cellState = null;
    });

    newState.secondTicket.forEach(item => {
      item.cellState = null;
    });

    for (let i = 0; i < firstArray.length; i++) {
      newState.firstTicket[firstArray[i] - 1].cellState = 'active';
    }

    newState.secondTicket[secondArray[0] - 1].cellState = 'active';
    this.setState({newState});

  }

  //фильтр для отмеченных ячеек

  filterCheckedFields(ticketNumber) {
    let checkedFields = this.state[ticketNumber].filter(item => item.cellState === 'active');
    let arrayNumbers = [];
    checkedFields.forEach(item => {
      arrayNumbers.push(+item.cellNumber)
    });

    return arrayNumbers;
  }

  // проверка выигрышных комбинаций

  checkIfWin() {
    let firstRandomNumbers = generateNumbers(8, 19);
    let secondRandomNumbers = generateNumbers(1, 2);

    let checkedFieldsFirst = this.filterCheckedFields('firstTicket');
    let checkedFieldsSecond = this.filterCheckedFields('secondTicket');

    let counterMain = 0;

    for (let i = 0; i < firstRandomNumbers.length; i++) {
      if (checkedFieldsFirst.includes(firstRandomNumbers[i])) {
        counterMain++;
      }
    }

    if (counterMain > 3) {
      this.winningStatus = true;
    } else if (counterMain === 3 && checkedFieldsSecond.includes(secondRandomNumbers[0])) {
      this.winningStatus = true;
    }

    this.JSONfile = JSON.stringify(
        {
          selectedNumber:
              {
                firstField: checkedFieldsFirst,
                secondField: checkedFieldsSecond
              },
          isTicketWon: this.winningStatus
        });

    sendInfo(this.JSONfile, this.counterJSON);
  }

  render() {
    if (this.state.infoSent === 0) {
      return (
          <div>
            <section className="card">
              <header className="card__header">
                <div className="card__number">
                  <span>Билет 1</span>
                </div>
                <div className="card__random">
                  <div onClick={() => this.fillInRandomNumb()}
                       className="card__wand-button">
                    <svg width="20"
                         height="20"
                         viewBox="0 0 20 20"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0716 1.5249C12.4266 1.5249 12.7144 1.81272 12.7144 2.16776V4.71423C12.7144 5.06927 12.4266 5.35709 12.0716 5.35709C11.7165 5.35709 11.4287 5.06927 11.4287 4.71423V2.16776C11.4287 1.81272 11.7165 1.5249 12.0716 1.5249ZM16.3831 4.52589C16.6342 4.27484 16.6342 3.86781 16.3831 3.61676C16.1321 3.3657 15.7251 3.3657 15.474 3.61676L14.1883 4.90247C13.9372 5.15352 13.9372 5.56056 14.1883 5.81161C14.4393 6.06266 14.8464 6.06266 15.0974 5.81161L16.3831 4.52589ZM9.71965 11.1893C9.9707 10.9383 9.9707 10.5313 9.71965 10.2802C9.4686 10.0292 9.06156 10.0292 8.81051 10.2802L1.24005 17.8507C0.988995 18.1017 0.988995 18.5088 1.24005 18.7598C1.4911 19.0109 1.89813 19.0109 2.14918 18.7598L9.71965 11.1893ZM12.7144 11.7857C12.7144 11.4306 12.4266 11.1428 12.0716 11.1428C11.7165 11.1428 11.4287 11.4306 11.4287 11.7857V13.6678C11.4287 14.0228 11.7165 14.3107 12.0716 14.3107C12.4266 14.3107 12.7144 14.0228 12.7144 13.6678V11.7857ZM14.6426 7.9285C14.6426 7.57346 14.9304 7.28564 15.2854 7.28564H17.8569C18.2119 7.28564 18.4997 7.57346 18.4997 7.9285C18.4997 8.28354 18.2119 8.57136 17.8569 8.57136H15.2854C14.9304 8.57136 14.6426 8.28354 14.6426 7.9285ZM6.28544 7.28564C5.9304 7.28564 5.64258 7.57346 5.64258 7.9285C5.64258 8.28354 5.9304 8.57136 6.28544 8.57136H8.85686C9.2119 8.57136 9.49972 8.28354 9.49972 7.9285C9.49972 7.57346 9.2119 7.28564 8.85686 7.28564H6.28544ZM14.1883 10.0453C14.4393 9.79429 14.8464 9.79429 15.0974 10.0453L16.3831 11.3311C16.6342 11.5821 16.6342 11.9891 16.3831 12.2402C16.1321 12.4912 15.7251 12.4912 15.474 12.2402L14.1883 10.9545C13.9372 10.7034 13.9372 10.2964 14.1883 10.0453ZM8.66872 3.61676C8.41766 3.3657 8.01063 3.3657 7.75958 3.61676C7.50853 3.86781 7.50853 4.27484 7.75958 4.52589L9.04529 5.81161C9.29634 6.06266 9.70338 6.06266 9.95443 5.81161C10.2055 5.56056 10.2055 5.15352 9.95443 4.90247L8.66872 3.61676Z"
                            fill="black"/>
                    </svg>
                  </div>
                </div>
              </header>

              <div className="card__fields">

                <Fields fieldNumber={'Поле 1'}
                        fieldRules={'Отметьте 8 чисел.'}
                        fieldsQuantity={this.state.firstTicket}
                        onClick={(key, ticketNum, counterNum, counterName, numQuantity) => this.clickHandlerFirst(key, ticketNum, counterNum, counterName, numQuantity)}
                        ticketNum={'firstTicket'}
                        numQuantity={'8'}
                        counterNum={'0'}
                        counterName={'first'}

                />

                <Fields fieldNumber={'Поле 2'}
                        fieldRules={'Отметьте 1 число.'}
                        fieldsQuantity={this.state.secondTicket}
                        onClick={(key, ticketNum, counterNum, counterName, numQuantity) => this.clickHandlerFirst(key, ticketNum, counterNum, counterName, numQuantity)}
                        ticketNum={'secondTicket'}
                        numQuantity={'1'}
                        counterNum={'1'}
                        counterName={'second'}

                />

              </div>

              <div className="card__button">
                <button onClick={() => this.checkIfWin()}>Показать результат</button>
              </div>
            </section>
          </div>
      );
    } else {
      return (
          <FinalPage statusWin={this.winningStatus}/>
      );
    }

  }
}

export default Ticket;