export default async function getData(url) {
  try {
    return await fetch(url)
  } catch (error) {
    return await error
  }
}
