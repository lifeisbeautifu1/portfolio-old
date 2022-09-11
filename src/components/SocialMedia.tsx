import { BsTelegram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a
      rel="noreferrer"
      href="https://github.com/lifeisbeautifu1"
      target="_blank"
      style={{ cursor: 'pointer' }}
    >
      <BsTelegram />
    </a>
    <a
      rel="noreferrer"
      href="https://github.com/lifeisbeautifu1"
      target="_blank"
      style={{ cursor: 'pointer' }}
    >
      <BsGithub />
    </a>
  </div>
);

export default SocialMedia;
