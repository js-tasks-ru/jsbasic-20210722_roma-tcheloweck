function camelize(str) {
  return str.split('-').map(
    a => a[0].toUpperCase() + a.slice(1)
  ).join();
}
