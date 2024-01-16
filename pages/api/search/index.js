export default async function handler(req, res) {
  res.status(400).json({ message: "Debe especificar el query de busqueda" });
}
