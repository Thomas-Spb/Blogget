import cls from './Layout.module.css';

export const Layout = ({ children }) => {
  return (<div className={cls.container}>{children}</div>)
}