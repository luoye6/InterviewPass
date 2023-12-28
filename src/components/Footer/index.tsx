import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '程序员小白条';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'gitee',
          title: 'Gitee',
          href: 'https://gitee.com/falle22222n-leaves',
          blankTarget: true,
        },
        {
          key: 'library',
          title: 'GPT 智能图书馆',
          href: 'https://www.xiaobaitiao.top/#/login',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 程序员小白条</>,
          href: 'https://github.com/luoye6',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
