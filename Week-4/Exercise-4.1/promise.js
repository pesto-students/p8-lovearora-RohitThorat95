const CustomPromiseState = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

class CustomPromise {
  constructor(fn) {
    this.CustomPromiseState = CustomPromiseState.PENDING;
    this.resolver = this.resolver.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenFn = null;
    this.catchFn = null;
    fn(this.resolver, this.rejector);
  }

  resolver(resolvedData) {
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.thenFn && this.thenFn(resolvedData);
    }
    this.CustomPromiseState = CustomPromiseState.RESOLVED;
  }
  rejector(rejectedData) {
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.catchFn && this.thenFn(rejectedData);
    }
    this.CustomPromiseState = CustomPromiseState.REJECTED;
  }
  then(thenFn) {
    this.thenFn = thenFn;
    return this;
  }
  catch(catchFn) {
    this.catchFn = catchFn;
    return this;
  }
}

const getNumber = () => {
  return new CustomPromise((resolve, reject) => {
    let randomNumber = parseInt(Math.random() * 100);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        reject(`${randomNumber} rejected.`);
      }
      resolve(`${randomNumber} resolved.`);
    }, randomNumber * 10);
  });
};

getNumber()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
