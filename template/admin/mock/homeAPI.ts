const users = [
  { name: 'Umi', nickName: 'U', gender: 'MALE' },
  { name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {

  'GET /api/v1/home/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
