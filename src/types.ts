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
