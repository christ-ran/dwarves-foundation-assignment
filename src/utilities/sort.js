const quickSort = (data, type) => {
  if (data.length <= 1) {
    return data
  }

  let left = []
  let right = []
  let pivot = data[0]

  for (let i = 1; i < data.length; i++) {
    if (data[i][type] <= pivot[type]) {
      left.push(data[i])
    } else {
      right.push(data[i])
    }
  }

  left = quickSort(left, type)
  right = quickSort(right, type)

  return [...right, pivot, ...left]
}

export { quickSort }
