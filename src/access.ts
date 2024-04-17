/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser?.userRole === 'admin',
    canUser: currentUser,

  };
}
