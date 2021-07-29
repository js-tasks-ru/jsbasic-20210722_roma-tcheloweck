let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return a + b;
  },

  mul() {
    return a * b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
