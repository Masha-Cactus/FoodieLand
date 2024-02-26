import './TimeIcon.scss';

type Props = {
  time: number;
};

const TimeIcon: React.FC<Props> = ({ time }) => {
  return (
    <div className='TimeIcon'>
      <span className='TimeIcon__icon'/>
      <span className='TimeIcon__title'>{`${time} Minutes`}</span>
    </div>
  );
};

export default TimeIcon;

