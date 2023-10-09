
  numberOfPages() {
    return Math.ceil(this.userData.length / this.pageSize);
  }

  get result() {
    return this.userData.filter(item => item.checked);
  }


