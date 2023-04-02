class LocaleMissingError extends Error {
  constructor(msg: string) {
    super(`Missing locale: ${msg}`);

    Object.setPrototypeOf(this, LocaleMissingError.prototype);
  }
}

export default LocaleMissingError;
