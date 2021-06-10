// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import axiosData from '../../services/axiosData';

async function captureHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }

  const { base64EncodedImage } = req.body;

  if (!base64EncodedImage || base64EncodedImage.trim().length < 100) {
    res.status(422).json({
      message: 'Image source invalid',
    });
    return;
  }

  try {
    const { data, error } = await axiosData({
      url: `${process.env.REACT_APP_BASE_API_URL}/upload`,
      method: 'POST',
      data: JSON.stringify(req.body),
      signal: false,
    });

    if (!data && !error) {
      res.status(400).json({ error: 'Server not reachable' });
    }
    if (!data) {
      res.status(400).json({ error: error.response ? error.response.data.error : 'Internal Server Error' });
    } else {
      res.status(200).json({ data, message: 'Upload successful!' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message || 'Server not reachable' });
  }
}

export default captureHandler;
