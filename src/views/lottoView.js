import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/message.js';
import MATCHES from '../constants/matches.js';

const LOTTO_VIEW = Object.freeze({
  getUserInputTotalBuyPrice() {
    return Console.readLineAsync(MESSAGES.userInputLottoBuyTotalPrice);
  },
  getUserInputCorrectNumber() {
    return Console.readLineAsync(MESSAGES.userInputLottoCorrectNumber);
  },
  getUserInputBonusNumber() {
    return Console.readLineAsync(MESSAGES.userInputLottoBonusNumber);
  },
  printBuyMessage(count) {
    Console.print(`${count}${MESSAGES.buyMessage}`);
  },
  printLottoList(lottoList) {
    lottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  },
  printResult(result) {
    Console.print(MESSAGES.totalWinning);
    Object.keys(result).forEach((key) => {
      Console.print(`${MATCHES[key].message} - ${result[key]}개`);
    });
  },
  printRateOfReturn(roi) {
    Console.print(`총 수익률은 ${roi}%입니다.`);
  },
});

export default LOTTO_VIEW;
