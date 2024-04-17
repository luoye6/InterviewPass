import { addUser } from '@/services/backend/userController';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';

interface Props {
  modalVisible: boolean;
  columns: ProColumns<API.User>[];
  onSubmit: () => void;
  onCancel: () => void;
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.UserAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addUser({
      ...fields,
    });
    hide();
    message.success('创建成功');
    return true;
  } catch (error) {
    hide();
    message.error('创建失败');
    return false;
  }
};

/**
 * 创建数据弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { columns, modalVisible, onCancel, onSubmit } = props;

  return (
    <Modal title={'新建'} open={modalVisible} destroyOnClose footer={null} onCancel={onCancel}>
      <ProTable<API.UserAddRequest>
        columns={columns}
        type="form"
        onSubmit={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            onSubmit?.();
          }
        }}
      />
    </Modal>
  );
};

export default CreateModal;
