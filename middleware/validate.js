const validate = (req, res, next) => {
  // Pastikan body ada dan bukan kosong
  if (!req.body || Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ message: 'Body request kosong. Pastikan Content-Type: application/json dan isi data dengan benar.' });
  }

  const { title, description, priority, due_date } = req.body;

  if (!title || !description || !priority || !due_date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  next();
};

module.exports = validate;
