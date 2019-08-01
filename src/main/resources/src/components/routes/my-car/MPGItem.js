
export default class MPGItem {
  constructor(string) {
    const arr = string.trim().split(/(\s+)/);
    this.miles = parseFloat(arr[2]);
    this.gallons = parseFloat(arr[6]);
    this.price = parseFloat(arr[10].substring(1));
  }
}