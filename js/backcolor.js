const colors = [
  "#6D0D0D",
  "#861919",
  "#540707",
  "#115407",
  "#104309",
  "#0F5E04",
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

document.body.style.backgroundColor = randomColor;
