interface Number {
  toStorageNumber(decimalPlaces?: number): string;
}

Number.prototype.toStorageNumber = function (decimalPlaces = 2) {
  let unit = '';
  let value = 0;

  if (this >= 0 && this < 1024) {
    unit = 'B';
    value = this;
  } else if (this >= 1024 && this / 1024 < 1024) {
    value = this / 1024;
    unit = 'KB';
  } else if (this / 1024 >= 1024 && this / 1024 / 1024 < 1024) {
    unit = 'MB';
    value = this / 1024 / 1024;
  } else {
    unit = 'GB';
    value = this / 1024 / 1024 / 1024;
  }

  return (
    Number(parseFloat(value).toFixed(decimalPlaces))
      .toString()
      .replace('.', ',') +
    ' ' +
    unit
  );
};