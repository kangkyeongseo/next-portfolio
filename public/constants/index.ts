export const carrer = [
  {
    title: '웅진씽크빅 Udemy',
    subTitle: '[10주 완성! 프로젝트 캠프]',
    period: '2023.06.05 ~ 08.11',
    awards: '우수수료상',
  },
  {
    title: '유데미 X 웅진씽크빅 X 인사이드아웃',
    subTitle: '[앱/웹 개발자 인턴형 프로그램]',
    period: '2023.12.18 ~ 2024.02.16',
    awards: '최우수팀',
  },
];

export const buttons = [
  {
    title: 'Github',
    href: 'https://github.com/kangkyeongseo',
    color: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900',
  },
  {
    title: 'Velog',
    href: 'https://velog.io/@kldream/posts',
    color: 'bg-emerald-600',
    hoverColor: 'hover:bg-emerald-700',
  },
];

export const skills = [
  { title: 'Language', skill: ['JavaScript', 'TypeScript'] },
  {
    title: 'Language',
    skill: ['HTML', 'CSS', 'SCSS', 'StyledComponent', 'TailwindCSS'],
  },
  {
    title: 'Framework',
    skill: ['React', 'Next'],
  },
  {
    title: 'Library',
    skill: [
      'Redux',
      'Recoil',
      'Zustand',
      'ReactQuery',
      'SWR',
      'ReactHookForm',
      'Express',
      'SocketIO',
      'PeerJS',
      '...',
    ],
  },
  {
    title: 'DB / BaaS',
    skill: ['MongoDB', 'FireBase', 'PocketBase'],
  },
];

export const projects = [
  {
    title: '인터버스',
    contributor: 2,
    summary: [
      '자바스크립트 게임 프레임워크인 Phaser3를 사용하여 메타버스 환경 제작',
      'Socket.io를 아용한 라이브 채팅과 플레이어들의실시간 상태 동기화',
      'PeerJS를 사용하여 브라우저 간에 비디오, 오디오 스트림 전송',
      'URL과 Cookie를 활용한 방 공유 및캐릭터 저장',
    ],
    website: 'https://www.interverse.kr',
    github: 'https://github.com/Team94/interverse',
    skills: [
      'Phaser3',
      'React',
      'Redux',
      'TypeScript',
      'Tailwind',
      'Socket.io',
      'PeerJS',
    ],
    intro: [
      '웹을 통해 다양한 서비스를 만들고자 기획하고 제작한 프로젝트입니다. 코로나 시기 이후 비대면 서비스가 활성화되었고, Zoom과 같은 화상 통화 서비스를 회의, 강의 및 면접 등에 많이들 사용했습니다.',
      '이러한 서비스를 사용자들이 더 간편하고 즐겁게 이용할 수 있게 메타버스 환경의 화상 및 채팅 서비스를 제작하였습니다.',
    ],
    review: [
      'Phaser3와 Socket.io를 이용하여 플레이어들 간의 상호작용을 구현하는 작업이 즐거웠습니다. 그전까지 WebSocket을 사용하면서 단순한 채팅 데이터만을 주고받았지만 해당 프로젝트에서 채팅뿐만 아니라 움직임 및 상태 등을 동기화시키는 작업을 통해 WebSocket을 더욱 이해할 수 있었습니다.',
    ],
    gifName: 'interverse',
    mainColor: 'bg-purple-600',
    subColor: 'bg-yellow-400',
  },
  {
    title: '카페인 스테이션',
    contributor: 1,
    summary: [
      'Next 14의 App Router 사용',
      'Kakao Map API를 활용한 지도 서비스',
      'FireBase(BaaS)를 이용한 데이터베이스',
    ],
    website: 'https://caffeine-station.vercel.app/',
    github: 'https://github.com/kangkyeongseo/next-caffeine-station',
    skills: ['React', 'Redux', 'TypeScript', 'Tailwind', 'FireBase'],
    intro: [
      '카페에서 지인들과 커피를 마시면서 얘기를 나누고 싶을 때는 유명 가맹점에서 편하게 즐기고 싶고 지친 몸에 카페인만을 원할 때는 가성비 좋은 가맹점을 찾는 경우가 있습니다. 그럴 때마다 주위에 해당 가맹점을 지도 앱에서 일일이 찾아보는게 불편하여 제작하였습니다.',
    ],
    review: [
      'Next의 App Router을 학습하고자 진행한 프로젝트입니다. 서버 컴포넌트의 이해, 병렬 라우팅, SSG구성 등 다양한 시도를 하면서 즐겁게 배웠습니다.',
    ],
    gifName: 'caffeinestation',
    mainColor: 'bg-emerald-600',
    subColor: 'bg-amber-400',
  },
  {
    title: 'DesignSystem StoryBook',
    contributor: 2,
    summary: [
      'Figma를 사용하여 직접 UI를 디자인',
      '디자인 시스템 개발 및 스토리북 배포',
      'npm 라이브러리 배포',
    ],
    website: 'https://www.npmjs.com/package/design-system-team94',
    github: 'https://github.com/Team94/DesignSystem-StoryBook',
    skills: ['React', 'TypeScript', 'Tailwind', 'StoryBook'],
    intro: [
      'Figma를 사용하여 직접 UI를 디자인한 후, 디자인 시스템 개발하여 스토리북과 라이브러리에 배포하였습니다.',
      '프로젝트마다 반복되는 컴포넌트 사용이 비효율적인 작업으로 생각되어 디자인 시스템을 만들어 npm에 라이브러리 형태로 배포하여 생산성을 향상하고자 하였습니다.',
    ],
    review: [
      '처음 경험해보는 라이브러리 배포, 개발을 하면서 마주친 이슈들을 팀원분과 해결하면서 많이 배웠습니다. 스프린트 프로젝트를 통해 짧은 기간에 집중된 노력으로 보다 빠르게 프로젝트를 완료할 수 있었습니다. 해당 디자인 시스템을 더욱 발전시켜 앞으로 진행하게 될 많은 프로젝트에서 사용하고싶습니다.',
    ],
    gifName: 'designsystem',
    mainColor: 'bg-pink-500',
    subColor: 'bg-teal-500',
  },
  {
    title: '스팩로그 홈페이지',
    contributor: 4,
    summary: [
      '모노레포를 구성하여 UI 컴포넌트 및 공통 컨벤션 생성',
      'PocketBase(BaaS)를 이용한 백엔드 구축',
      '스프린트하게 진행된 팀프로젝트를 위한 효율적인 협업',
      'Next 14의 App Router 사용',
    ],
    website: 'https://team-5-sfaclog-web.vercel.app/',
    github: 'https://github.com/sfac-team-5/team-5-sfaclog',
    skills: [
      'Next',
      'React',
      'TypeScript',
      'Tailwind',
      'HeadlessUI',
      'NextAuth',
      'Zustand',
      'PocketBase',
      'ReactHookForm',
    ],
    intro: [
      '인사이드 아웃의 인턴 과제인 스팩로그 홈페이지 제작 프로젝트입니다. 디자이너분들과 협얼을 통하여 빠른 기간내에 우선순위를 선정하면서 진행했습니다.',
      'Next 14의 App Router, 모노레포 및 포켓베이스와 같은 새로운 기술과 서비스를 이용해서 만든 홈페이지입니다.',
    ],
    review: [
      '새로운 기술에 관한 공부도 필요하고 짧은 일정 안에 프로젝트를 끝내야 했기 때문에 스프린트한 일정을 소화해야 했습니다. 팀원들과의 커뮤니케이션, 프로젝트의 기능의 우선순위 선정과 같은 협업의 중요성에 대해 많이 배웠습니다. 팀원들과의 원활한 협업 덕분에 인턴 발표회에서 최우수팀에 선정되었습니다.',
    ],
    gifName: 'sfaclog',
    mainColor: 'bg-blue-500',
    subColor: 'bg-white',
  },
];
