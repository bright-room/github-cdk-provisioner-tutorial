import { BranchConfig, ContributorTeamConfig, LabelConfig, RepositoryConfig } from "@/libs/repositories/definition"
import { Teams } from "@/libs/teams/resources"
import { Branch as GithubBranch } from "@cdktf/provider-github/lib/branch"
import { BranchProtectionV3 } from "@cdktf/provider-github/lib/branch-protection-v3"
import { IssueLabels, IssueLabelsLabel } from "@cdktf/provider-github/lib/issue-labels"
import { Repository as GithubRepository } from "@cdktf/provider-github/lib/repository"
import { TeamRepository } from "@cdktf/provider-github/lib/team-repository"
import { Construct } from "constructs"

export class ContributorTeam extends Construct {
  constructor(
    scope: Construct,
    id: string,
    repository: GithubRepository,
    teams: Teams,
    configs: ContributorTeamConfig[]
  ) {
    super(scope, id)

    configs.forEach(config => {
      const team = teams.find(config.teamIdentify)
      new TeamRepository(this, `contributor-team-${config.teamIdentify}`, {
        teamId: team.id,
        repository: repository.name,
        permission: config.permission,
      })
    })
  }
}

export class Label extends Construct {
  constructor(scope: Construct, id: string, repository: GithubRepository, labelConfigs: LabelConfig[]) {
    super(scope, id)

    const issueLabels = labelConfigs.map(parameter => {
      return {
        name: parameter.name,
        description: parameter.description,
        color: parameter.color,
      } as IssueLabelsLabel
    })

    new IssueLabels(this, `issue-labels`, {
      repository: repository.name,
      label: issueLabels,
    })
  }
}

export class DefaultBranch extends Construct {
  constructor(scope: Construct, id: string, repository: GithubRepository, branchConfig: BranchConfig) {
    super(scope, id)

    const defaultBranchConfig = branchConfig.defaultBranchConfig
    new BranchProtectionV3(this, "default-branch-protection-v3", {
      repository: repository.name,
      branch: defaultBranchConfig.branch,
      enforceAdmins: defaultBranchConfig.enforceAdmins,
      requiredPullRequestReviews: {
        requiredApprovingReviewCount: 1,
        dismissStaleReviews: true,
        requireCodeOwnerReviews: true,
      },
      requiredStatusChecks: {
        strict: defaultBranchConfig.checkStatuses.length != 0,
        checks: defaultBranchConfig.checkStatuses,
      },
    })
  }
}

export class AdditionalBranch extends Construct {
  constructor(scope: Construct, id: string, repository: GithubRepository, branchConfig: BranchConfig) {
    super(scope, id)

    const defaultBranchConfig = branchConfig.defaultBranchConfig
    const additionalBranchConfigs = branchConfig.additionalBranchConfigs
    additionalBranchConfigs.forEach(additionalBranchConfig => {
      new GithubBranch(this, `additional-branch-${additionalBranchConfig.branch}`, {
        branch: additionalBranchConfig.branch,
        repository: repository.name,
        sourceBranch: defaultBranchConfig.branch,
      })

      new BranchProtectionV3(this, `additional-branch-${additionalBranchConfig.branch}-protection-v3`, {
        repository: repository.name,
        branch: additionalBranchConfig.branch,
        enforceAdmins: additionalBranchConfig.enforceAdmins,
        requiredPullRequestReviews: {
          requiredApprovingReviewCount: 1,
          dismissStaleReviews: true,
          requireCodeOwnerReviews: true,
        },
        requiredStatusChecks: {
          strict: additionalBranchConfig.checkStatuses.length != 0,
          checks: additionalBranchConfig.checkStatuses,
        },
      })
    })
  }
}

export class Repository extends Construct {
  readonly repository: GithubRepository

  constructor(scope: Construct, id: string, repositoryConfig: RepositoryConfig) {
    super(scope, id)

    this.repository = new GithubRepository(this, "repository", {
      name: repositoryConfig.name,
      description: repositoryConfig.description,
      homepageUrl: repositoryConfig.homepageUrl,
      topics: repositoryConfig.topics,
      allowMergeCommit: repositoryConfig.allowMergeCommit,
      allowSquashMerge: repositoryConfig.allowSquashMerge,
      allowRebaseMerge: repositoryConfig.allowRebaseMerge,
      deleteBranchOnMerge: repositoryConfig.deleteBranchOnMerge,
      hasIssues: repositoryConfig.hasIssues,
      hasProjects: repositoryConfig.hasProjects,
      hasWiki: repositoryConfig.hasWiki,
      hasDownloads: repositoryConfig.hasDownloads,
      autoInit: true,
      visibility: repositoryConfig.visibility,
      isTemplate: repositoryConfig.isTemplate,
      archived: repositoryConfig.archived,
      vulnerabilityAlerts: repositoryConfig.vulnerabilityAlerts,
      lifecycle: {
        preventDestroy: false,
        ignoreChanges: ["auto_init"],
      },
    })
  }
}
