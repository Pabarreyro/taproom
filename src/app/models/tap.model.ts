export class Tap {
  level: number = 124;
  percent: string = (Math.floor(this.level /124) * 100).toString() + "%";

  constructor (public name: string, public brand: string, public pricePerPint: number, public alcoholContent: number, public imgString: string) {}
}
