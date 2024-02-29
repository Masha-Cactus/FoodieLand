/* eslint-disable max-len */
import SubscribeInput from '../elements/SubscribeInput/SubscribeInput';
import './Subscribe.scss';

type Props = {};

const Subscribe: React.FC<Props> = ({}) => {
  return (
    <section className="Subscribe">
      <div className="Subscribe__info">
        <h2 className="Subscribe__title">Deliciousness to your inbox</h2>
        <p className="Subscribe__text">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <SubscribeInput />
    </section>
  );
};

export default Subscribe;
