
const qrcode = require('qrcode');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { number } = req.body;
  if (!number) {
    return res.status(400).json({ message: 'Nomor tidak boleh kosong' });
  }

  try {
    // Simulasi pembuatan pairing (ubah URL ini ke endpoint bot kamu jika sudah tersedia)
    const dummyText = `PAIRING:${number}`;

    const qr = await qrcode.toDataURL(dummyText);
    res.status(200).json({ qr });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghasilkan QR' });
  }
};
