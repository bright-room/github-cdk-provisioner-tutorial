export const Visibility = {
  Public: "public",
  Private: "private",
} as const
export type Visibility = (typeof Visibility)[keyof typeof Visibility]

export const Permission = {
  Admin: "admin",
  Maintain: "maintain",
  Push: "push",
  Triage: "triage",
  Pull: "pull",
} as const
export type Permission = (typeof Permission)[keyof typeof Permission]
