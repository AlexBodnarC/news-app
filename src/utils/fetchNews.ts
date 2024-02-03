export async function fetchNewsIds(limit: number) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error fetching data:", error)

    return null
  }
}

export async function fetchNewsItemById(id: number) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error fetching data:", error)

    return null
  }
}
