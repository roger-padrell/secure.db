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
    for(let s in separate){
      if(eval(s % 2) == 0){
        se1s.push(separate[s])
      }
      else{
        se2s.push(separate[s])
      }
    }

    for(let s in se1s){
      se1s[s] = se1s[s].replaceAll("0", this.code[0]).replaceAll("1", this.code[1]);
    }
    for(let s in se2s){
      se2s[s] = se2s[s].replaceAll("0", this.code[2]).replaceAll("1", this.code[3]);
    }
    
    for(let s in separate){
      if(eval(s % 2) == 0){
        separate[s] = se1s[0];
        se1s.shift()
      }
      else{
        separate[s] = se2s[0];
        se2s.shift()
      }
    }
    separate.pop()
    return separate.toString().replaceAll(",", " ");
  }
}
