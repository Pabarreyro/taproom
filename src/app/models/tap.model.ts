export class Tap {
  level: number = 124;
  percent: string = (Math.floor(this.level /124) * 100).toString() + "%";
  updateLevel = function(decrement){
    if (this.level - parseInt(decrement) > 0) {
      this.level -= parseInt(decrement);
    } else {
      console.log("Please replace this beer");
    }
  };

  constructor (public name: string, public brand: string, public pricePerPint: number, public alcoholContent: number, public imgString: string) {}
}
