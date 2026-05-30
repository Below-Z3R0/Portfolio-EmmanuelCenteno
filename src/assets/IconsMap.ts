import { ReactIcon, DockerIcon, NodeIcon, SupaBaseIcon, TypeScriptIcon, HamburNavIcon, LanguageIcon, LinkedInIcon, MailIcon, DayAndNightIcon, TailwindIcon, PostGresSQLIcon, FigmaIcon, HTML5Icon, GitHubIcon, GitIcon, NextIcon } from './Icons'

export const ICON_MAP: Record<string, React.ComponentType<any>> = {
  react: ReactIcon,
  node: NodeIcon,
  supabase: SupaBaseIcon,
  typescript: TypeScriptIcon,
  hamburnav: HamburNavIcon,
  linkedin: LinkedInIcon,
  language: LanguageIcon,
  mail: MailIcon,
  daynight: DayAndNightIcon,
  tailwind: TailwindIcon,
  postgressql: PostGresSQLIcon,
  figma: FigmaIcon,
  html5: HTML5Icon,
  github: GitHubIcon,
  docker: DockerIcon,
  next: NextIcon,
  git: GitIcon
};