class UserController {
  calculateDiscount(price, discountPercent) {
    const discountAmount = price * (discountPercent / 100);
    return price - discountAmount;
  }

  validateEmail(email) {
    return email.includes('@') && email.includes('.');
  }
}

module.exports = new UserController();
