import { IForm } from '@/components/Base/Form';
import {
  FormTypeEnum,
  IWsMessage,
  LiveRoomPullIsShouldAuthEnum,
  WsMessageMsgIsShowEnum,
  WsMessageMsgIsVerifyEnum,
} from '@/interface';

export const formConfig = (): IForm<IWsMessage> => {
  return {
    gridSpan: 18,
    formStyle: {
      justifyContent: 'center',
    },
    labelPlacement: 'left',
    formItems: [
      {
        field: 'id',
        type: FormTypeEnum.number,
        label: 'id',
        placeholder: '请输入id',
        rule: { required: true, trigger: 'blur', type: 'number' },
      },
      {
        field: 'msg_type',
        type: FormTypeEnum.number,
        label: '消息类型',
        placeholder: '请输入消息类型',
        rule: { trigger: 'blur', type: 'number' },
      },
      {
        field: 'content_type',
        type: FormTypeEnum.number,
        label: '内容类型',
        placeholder: '请输入内容类型',
        rule: { trigger: 'blur', type: 'number' },
      },
      {
        field: 'content',
        type: FormTypeEnum.input,
        label: '内容',
        placeholder: '请输入内容',
        rule: { trigger: 'blur' },
      },
      {
        field: 'origin_content',
        type: FormTypeEnum.input,
        label: '源内容',
        placeholder: '请输入源内容',
        rule: { trigger: 'blur' },
      },
      {
        field: 'username',
        type: FormTypeEnum.input,
        label: '用户名',
        placeholder: '请输入用户名',
        rule: { trigger: 'blur' },
      },
      {
        field: 'origin_username',
        type: FormTypeEnum.input,
        label: '源用户名',
        placeholder: '请输入源用户名',
        rule: { trigger: 'blur' },
      },
      {
        field: 'is_show',
        type: FormTypeEnum.switch,
        label: '是否展示',
        switchConfig: {
          checkedValue: WsMessageMsgIsShowEnum.yes,
          unCheckedValue: LiveRoomPullIsShouldAuthEnum.no,
          checkedText: '是',
          unCheckedText: '否',
        },
      },
      {
        field: 'is_verify',
        type: FormTypeEnum.switch,
        label: '是否合法',
        switchConfig: {
          checkedValue: WsMessageMsgIsVerifyEnum.yes,
          unCheckedValue: WsMessageMsgIsVerifyEnum.no,
          checkedText: '是',
          unCheckedText: '否',
        },
      },
      {
        field: 'send_msg_time',
        type: FormTypeEnum.datePickerDatetime,
        label: '发送消息时间',
      },
      // {
      //   field: 'cover_img',
      //   type: FormTypeEnum.upload,
      //   uploadConfig: {
      //     max: 1,
      //   },
      //   label: '开播预览图',
      //   placeholder: 'common.placeholderImage',
      // },
      {
        field: 'remark',
        type: FormTypeEnum.input,
        label: '直播间备注',
        placeholder: '请输入直播间备注',
        rule: { trigger: 'blur' },
      },
    ],
  };
};