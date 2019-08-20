//создание массива с рандомным набором неповторяющихся чисел

const generateNumbers = (numbersQuantity, maxNumber) => {
  let randomNumbers = [];
  while (randomNumbers.length < numbersQuantity) {
    let randomNumber = Math.floor(Math.random() * maxNumber + 1);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
};

//отправка данных на сервер

const sendInfo = (JsonFile, counter) => {
  let self = this;

  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', '#', true);
  xhr.send(JsonFile);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      if (counter <= 2) {
        counter++;
        setTimeout(sendInfo, 2000);
      } else {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      }
    } else {
      self.setState({infoSent: 1})
    }
  };
};

export { sendInfo, generateNumbers };