import { useState } from 'react';
import './SubscribeInput.scss';
import classNames from 'classnames';

type Props = {
  gray?: boolean;
};

const SubscribeInput: React.FC<Props> = ({ gray }) => {
  const [value, setValue] = useState('');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <div className={classNames('SubscribeInput', {
      'SubscribeInput--gray': gray,
    })}>
      <input
        type="email"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Your email address..."
        className={classNames('SubscribeInput__input', {
          'SubscribeInput__input--gray': gray,
        })}
      />
      <button className="SubscribeInput__btn" onClick={e => handleClick(e)}>
        Subcribe
      </button>
    </div>
  );
};

export default SubscribeInput;
