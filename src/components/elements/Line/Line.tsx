import classNames from 'classnames';
import './Line.scss';

type Props = {
  vertical?: boolean;
};

const Line: React.FC<Props> = ({ vertical = false }) => {
  return (
    <div
      className={classNames('Line', {
        'Line--vertical': vertical })}
      aria-label={'Line'}/>
  );
};

export default Line;
