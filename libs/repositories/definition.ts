import { Permission, Visibility } from "@/libs/repositories/constraint"
import { TeamIdentify } from "@/libs/teams/constraint"

export interface LabelConfig {
  name: string
  description: string
  color: string
}

export interface DefaultBranchConfig {
  branch: string
  enforceAdmins: boolean
  checkStatuses: string[]
}

export interface AdditionalBranchConfig {
  branch: string
  enforceAdmins: boolean
  checkStatuses: string[]
}

export interface BranchConfig {
  defaultBranchConfig: DefaultBranchConfig
  additionalBranchConfigs: AdditionalBranchConfig[]
}

export interface ContributorTeamConfig {
  teamIdentify: TeamIdentify
  permission: Permission
}

export interface RepositoryConfig {
  name: string
  description: string
  homepageUrl: string
  topics: string[]
  allowMergeCommit: boolean
  allowSquashMerge: boolean
  allowRebaseMerge: boolean
  deleteBranchOnMerge: boolean
  hasIssues: boolean
  hasProjects: boolean
  hasWiki: boolean
  hasDownloads: boolean
  visibility: Visibility
  isTemplate: boolean
  archived: boolean
  vulnerabilityAlerts: boolean
}

export interface OrganizationRepositoryConfig {
  repository: RepositoryConfig
  contributorTeams: ContributorTeamConfig[]
  branch: BranchConfig
  labelConfigs: LabelConfig[]
}
