import { TableColumns } from 'naive-ui/es/data-table/src/interface';

import { IWsMessage } from '@/interface';
import { formatTime } from '@/router/utils';

export const columnsConfig: TableColumns<IWsMessage> = [
  {
    title: 'id',
    key: 'id',
    align: 'center',
    width: 100,
    fixed: 'left',
  },
  {
    title: '内容',
    key: 'content',
    align: 'center',
    width: 150,
  },
  {
    title: '用户名',
    key: 'username',
    align: 'center',
    width: 150,
  },
  {
    title: '原内容',
    key: 'origin_content',
    align: 'center',
    width: 150,
  },
  {
    title: '原用户名',
    key: 'origin_username',
    align: 'center',
    width: 150,
  },
  {
    title: '备注',
    key: 'remark',
    align: 'center',
    width: 150,
  },
  {
    title: '发送时间',
    key: 'send_msg_time',
    align: 'center',
    width: 200,
    render(row) {
      return formatTime(+row.send_msg_time!);
    },
    fixed: 'right',
  },
];
