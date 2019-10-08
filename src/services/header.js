export default function Config(token) {
  const parser = JSON.parse(token);
  return {
    headers: { Authorization: `bearer ${parser.id}` },
  };
}
