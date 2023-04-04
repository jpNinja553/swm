export default function (str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}
