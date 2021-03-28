export default function dateUtil() {
  // eslint-disable-next-line
  Date.prototype.addDays = function (days: any) {
    const dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days)
    return dat
  }
}
