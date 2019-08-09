declare const __PATH_PREFIX__: string

declare module "typography-theme-wordpress-2016" {
  import { TypographyOptions } from "typography"
  const Theme: TypographyOptions

  export = Theme
}

declare interface Edge<T> {
  readonly node: T
}

declare interface Markdown {
  readonly id: string
  readonly body: string
  readonly excerpt?: string
  readonly fields: {
    readonly slug: string
  }
  readonly frontmatter: {
    readonly date?: string
    readonly draft?: boolean
    readonly path: string
    readonly tags?: readonly string[]
    readonly title?: string
  }
  readonly parent?: {
    readonly absolutePath?: string
    readonly accessTime?: string
    readonly base?: string
    readonly birthTime?: string
    readonly changeTime?: string
    readonly extension?: string
    readonly modifiedTime?: string
    readonly name?: string
    readonly relativeDirectory?: string
    readonly relativePath?: string
    readonly size?: number
    readonly sourceInstanceName?: string
  }
}
