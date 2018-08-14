export default {
  getList: config => {
    return {
      code: 200,
      data: {
        list1: [
          {
            id: '123456',
            status: '1',
            custom: 'custom',
            name: '张三',
            bought: '1',
            photo: '//i2.letvimg.com/lc07_img/201701/05/20/58/avatar5.png',
            datetime: 1487695862000,
            tags: ['1', '2', '3', '4']
          },
          {
            id: '234234',
            status: '2',
            custom: 'custom',
            name: '李四',
            bought: '0',
            photo: '//i2.letvimg.com/lc07_img/201701/05/20/58/avatar5.png',
            datetime: 1487692862000,
            tags: ['1', '2', '3', '4']
          },
          {
            id: '456456',
            status: '1',
            custom: 'custom',
            name: '王五',
            bought: '1',
            photo: '//i2.letvimg.com/lc07_img/201701/05/20/58/avatar5.png',
            datetime: 1487693862000,
            tags: ['1', '2', '3', '4']
          },
          {
            id: '456456',
            status: '1',
            custom: 'custom',
            name: '王五',
            bought: '0',
            photo: '//i2.letvimg.com/lc07_img/201701/05/20/58/avatar5.png',
            datetime: 1487694862000,
            tags: ['1', '2', '3', '4']
          }
        ]
      }
    }
  }
}
