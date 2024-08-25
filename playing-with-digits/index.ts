export class G964 {
  public static digPow = (n: number, p: number) => {
    const raiseDigitToPower = (k: number, power: number) => {
      return Math.pow(k, power);
    };

    const calculatePower = (index: number) => {
      return index + p;
    };
    let sum = 0;
    n.toString()
      .split("")
      .forEach((currentDigit: string, i: number) => {
        sum += raiseDigitToPower(Number(currentDigit), calculatePower(i));
      });

    const resultToAnswerRatio = sum / n;

    return Number.isInteger(resultToAnswerRatio) ? resultToAnswerRatio : -1;
  };
}
