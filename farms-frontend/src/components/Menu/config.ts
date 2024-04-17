import { MenuEntry } from '@birbswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `/`,
  },
  {
    label: "Exchange",
    icon: "TradeIcon",
    href: `/swap`,
  },
  {
    label: "Liquidity",
    icon: "LiquidityIcon",
    href: "/pool",
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Referral program",
    icon: "ReferralIcon",
    href: "/referral",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.pancakeswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Docs",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com",
      },
    ],
  },
]

export default config
