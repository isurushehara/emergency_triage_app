const analyzePatient = async (req, res) => {

  const {
    symptoms,
    oxygen,
    heartRate,
  } = req.body;

  let risk = 'Low';
  let recommendation = 'Normal monitoring';

  // Temporary AI logic
  if (oxygen < 85 || heartRate > 120) {
    risk = 'Critical';
    recommendation =
      'Immediate emergency attention required';
  }

  res.json({
    success: true,
    risk,
    recommendation,
    symptoms,
  });
};

module.exports = {
  analyzePatient,
};