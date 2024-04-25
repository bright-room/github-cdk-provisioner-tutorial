export const TeamIdentify = {
  /**
   * When adding a team, an identifier needs to be added.
   * This identifier is used for resource references.
   */
  Administrator: "administrator",
  AdministratorOwner: "administrator-owner",
  AdministratorAudit: "administrator-audit",
  Developer: "developer",
  DeveloperFte: "developer-fte",
  DeveloperFteSecret: "developer-fte-secret",
}
export type TeamIdentify = (typeof TeamIdentify)[keyof typeof TeamIdentify]

export const Privacy = {
  Secret: "secret",
  Closed: "closed",
} as const
export type Privacy = (typeof Privacy)[keyof typeof Privacy]

export const Role = {
  Member: "member",
  Maintainer: "maintainer",
} as const
export type Role = (typeof Role)[keyof typeof Role]
