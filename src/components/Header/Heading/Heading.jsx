import cls from './Heading.module.css';

export const Heading = ({ text }) => {
  return (
    <h1 className={cls.heading}>{text}</h1>
  )
}