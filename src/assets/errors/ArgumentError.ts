class ArgumentError extends Error {
  constructor(msg: string) {
    super(`Argument error: ${msg}`);

    Object.setPrototypeOf(this, ArgumentError.prototype);
  }
}

export default ArgumentError;
