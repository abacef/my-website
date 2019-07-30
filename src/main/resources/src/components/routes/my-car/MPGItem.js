
export default class MPGItem {
  constructor(string) {
    const arr = string.trim().split(/(\s+)/);
    this.miles = parseFloat(arr[1]);
    this.gallons = parseFloat(arr[3]);
    this.price = parseFloat(arr[5].substring(1));
  }
}