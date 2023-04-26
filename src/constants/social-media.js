import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '../assets';

const TWITTER = {
  name: 'Twitter',
  link: 'https://twitter.com/eckoDAO',
  icon: <TwitterIcon />,
};
const DISCORD = {
  name: 'Discord',
  link: 'https://discord.com/invite/eckodao',
  icon: <DiscordIcon />,
};

const GITHUB = {
  name: 'Github',
  link: 'https://github.com/eckoDAO-org/ecko-landing-website',
  icon: <GithubIcon />,
};
const TELEGRAM = {
  name: 'Telegram',
  link: 'https://t.me/eckofinance',
  icon: <TelegramIcon />,
};
const YOUTUBE = {
  name: 'Youtube',
  link: 'https://www.youtube.com/@eckodao',
  icon: <YoutubeIcon />,
};
export const SOCIAL_MEDIA = [TWITTER, DISCORD, YOUTUBE, GITHUB, TELEGRAM];
