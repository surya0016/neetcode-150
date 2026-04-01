const isAnagram = (s:string, t:string) => {
  if (s.length !== t.length){
    return false
  }

  const mapS = new Map()
  const mapT = new Map()

  for (let i = 0; i < s.length; i++) {
    const skey = s[i]
    const tkey = t[i] 

  //   if (mapS.has(skey)){
  //     mapS.set(skey, mapS.get(skey) + 1);
  //   }else{
  //     mapS.set(skey, 1)
  //   }
  //
  //   if (mapT.has(tkey)){
  //     mapT.set(tkey, mapT.get(tkey) + 1);
  //   }else{
  //     mapT.set(tkey, 1)
  //   }

    mapS.set(skey, (mapS.get(skey) ?? 0) +1)
    mapT.set(tkey, (mapT.get(tkey) ?? 0) +1)
  }

  if(mapS.size !== mapT.size){
    return false;
  }

  for(const[key, value] of mapS){
    if(!mapT.has(key)){
      return false;
    }

    if(mapT.get(key) !== value){
      return false;
    }
  }

  return true;
}

const result = isAnagram('racecar', 'carrace')
console.log(result)
