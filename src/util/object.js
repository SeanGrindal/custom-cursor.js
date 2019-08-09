export function areOptionsEqual(object1, object2) {
  for (var key in object1) {
    if (object1.hasOwnProperty(key)) {
      if (object1[key] === object2[key]) return false
    }
  }

  return true
}
