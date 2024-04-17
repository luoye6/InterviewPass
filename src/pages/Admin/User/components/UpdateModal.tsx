import { updateUser } from '@/services/backend/userController';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';

interface Props {
  oldData?: API.User;
  modalVisible: boolean;
  columns: ProColumns<API.User>[];
  onSubmit: () => void;
  onCancel: () => void;
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.UserUpdateRequest) => {
  const hide = message.loading('更新中');
  try {
    await updateUser(fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('更新失败，' + error.message);
    return false;
  }
};

/**
 * 更新数据弹窗
 * @param props
 * @constructor
 */
const UpdateModal: React.FC<Props> = (props) => {
  const { oldData, columns, modalVisible, onCancel, onSubmit } = props;
  if (oldData==null) {
    return <></>;
  }

  return (
    <Modal title={'更新'} open={modalVisible} destroyOnClose footer={null} onCancel={onCancel}>
      <ProTable<API.UserUpdateRequest>
        columns={columns}
        form={{
          initialValues: oldData,
        }}
        type="form"
        onSubmit={async (values) => {
          const success = await handleUpdate({
            ...values,
            id: oldData.id,
          });
          if (success) {
            onSubmit?.();
          }
        }}
      />
    </Modal>
  );
};

export default UpdateModal;
