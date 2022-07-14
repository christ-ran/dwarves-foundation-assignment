const findRepo = (data, repo) => {
  const repos = []

  data.map(d => {
    if (d.name.includes(repo)) {
      repos.push(d)
    }
  })

  return repos
}

export { findRepo }
