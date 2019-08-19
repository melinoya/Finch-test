import React from 'react';

const Fields = props => {
  return (
      <div className="card__field field">
        <header className="field__header">
          <div className="field__description">
            <div className="field__number">
              <span>{props.fieldNumber}</span>
            </div>
            <div className="field__text">
              <span>{props.fieldRules}</span>
            </div>
          </div>
        </header>

        <div className='field__table'>
          {props.fieldsQuantity.map(item =>
              <div className={item.cellState + ' filed__cell'}
                   key={'1.' + item.cellNumber}
                   onClick={(key, ticketNum, counterNum, counterName, numQuantity) => props.onClick(item.cellNumber, props.ticketNum, props.counterNum, props.counterName, props.numQuantity)}>
                <span>{item.cellNumber}</span>
              </div>
          )}
        </div>
      </div>
  );
};

export default Fields;

