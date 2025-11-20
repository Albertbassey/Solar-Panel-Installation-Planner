import InstallationRequest from '../models/InstallationRequest.js';

export const createRequest = async (req, res) => {
  const { userId, address, roofSize, preferredDate, notes } = req.body;
  try {
    const request = await InstallationRequest.create({
      user: userId,
      address,
      roofSize,
      preferredDate,
      notes,
    });
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: 'Request creation failed' });
  }
};

export const getUserRequests = async (req, res) => {
  const { userId } = req.params;
  try {
    const requests = await InstallationRequest.find({ user: userId });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
};
