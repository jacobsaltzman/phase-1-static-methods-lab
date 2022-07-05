class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(str){
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let final = []
    let newArray = str.split(" ")
    for (let i = 0; i < newArray.length; i++){
      if (i == 0){
        final.push(this.capitalize(newArray[i]))
      } else{
        if (exceptions.includes(newArray[i])){
          final.push(newArray[i])
        } else {
          final.push(this.capitalize(newArray[i]))
        }
      }
    }
    return final.join(" ")
  }
}