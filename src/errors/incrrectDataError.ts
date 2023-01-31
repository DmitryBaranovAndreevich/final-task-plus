class InCorrectDataError extends Error {
  statusCode;

  constructor(error?: Error) {
    super('Переданны некорректные данные');
    this.statusCode = 400;
  }
}

export default InCorrectDataError;
