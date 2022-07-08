const users = [
  { name: 'Umi', nick_name: 'U', gender: 'MALE' },
  { name: 'Fish', nick_name: 'B', gender: 'FEMALE' },
];

const user =  { name: 'Umi', nick_name: 'U', gender: 'MALE' }


export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'POST /api/v1/user/login': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
      data: user

    });
  },
};
