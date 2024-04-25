import { Privacy, Role, TeamIdentify } from "@/libs/teams/constraint"

export interface OrganizationTeamConfig {
  identify: TeamIdentify
  description: string
  privacy: Privacy
  members: TeamMemberConfig[]
  children: ChildTeamConfig[]
}

export interface ChildTeamConfig {
  identify: TeamIdentify
  description: string
  privacy: Privacy
  members: TeamMemberConfig[]
}

export interface TeamMemberConfig {
  username: string
  role: Role
}
