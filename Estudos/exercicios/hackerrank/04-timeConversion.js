// Link do desafio: https://www.hackerrank.com/challenges/time-conversion

const timeConversion = s => {
  if (s.includes("AM") && s.startsWith("12"))
    return s
      .replace("AM", "")
      .split(":")
      .map((n, i) => (i === 0 ? (n = "00") : n))
      .join(":");

  if (s.includes("AM")) return s.replace("AM", "");
  if (s.includes("PM") && s.startsWith("12")) return s.replace("PM", "");

  return s
    .replace("PM", "")
    .split(":")
    .map((n, i) => (i === 0 ? (Number(n) + 12).toString() : n))
    .join(":");
};

console.log(timeConversion("07:05:45PM")); // 19:05:45
