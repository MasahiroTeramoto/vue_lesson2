const years = [],
  months = [],
  days = [];

for (let i = 0; i < 31; i++) {
  years.push({
    year: String(1989 + i),
    japanese: `平成${i + 1}年`
  });
}

for (let i = 0; i < 12; i++) {
  months.push(i + 1);
}

for (let i = 0; i < 31; i++) {
  days.push(i + 1);
}

export { years, months, days };
