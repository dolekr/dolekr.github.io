export interface ProjectSection {
  heading: string
  content: string
  link?: { text: string; href: string }
}

export interface Project {
  title: string
  anchor?: string
  sideImages: boolean
  heroImage: string
  detailImages: string[]
  sections: ProjectSection[]
}

export interface Role {
  title: string
  bullets: string[]
}

export interface Experience {
  company: string
  location: string | null
  period: string
  roles: Role[]
}

export interface Education {
  year: string
  title: string
  institution: string
}

export interface SkillGroup {
  category: string
  items: string[]
}
