class DB{
  constructor(id, key, code){
    this.id = id;
    this.key = key;
    this.code = code;
    this.dt;
  }
  compress(dt){
    let output = "";
    for (var i = 0; i < dt.length; i++) {
        output += dt[i].charCodeAt(0).toString(2) + " ";
    }
    return output;
  }
}
