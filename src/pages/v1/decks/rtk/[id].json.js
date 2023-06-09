import { RTKDecks } from "../../../../data/decks";

export const get = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify(RTKDecks[id])
  }
}

export function getStaticPaths () {
  const paths = []

  for (const key in RTKDecks) {
    paths.push({ params: { id: key } })
  }

  return paths;
}