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
    let separate = output.split(" ")
    let se1s = [];
    let se2s = [];
    for(s in separate){
      if(eval(s % 2) == 0){
        se2s.push(separate[s])
      }
      else{
        se1s.push(separate[s])
      }
    }
    console.log(se1s)
    console.log(se2s)
  }
}
