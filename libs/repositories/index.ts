import { AdditionalBranch, ContributorTeam, DefaultBranch, Label, Repository } from "@/libs/repositories/constracts"
import { OrganizationRepositoryConfig } from "@/libs/repositories/definition"
import { Teams } from "@/libs/teams/resources"
import { Construct } from "constructs"

export class OrganizationRepositories extends Construct {
  constructor(scope: Construct, id: string, configs: OrganizationRepositoryConfig[], teams: Teams) {
    super(scope, id)

    configs.forEach(config => {
      const repositoryConfig = config.repository
      const { repository } = new Repository(this, `${repositoryConfig.name}`, repositoryConfig)

      const branchConfig = config.branch
      new DefaultBranch(this, `${repositoryConfig.name}-default-branch`, repository, branchConfig)
      new AdditionalBranch(this, `${repositoryConfig.name}-additional-branch`, repository, branchConfig)

      const labelConfigs = config.labelConfigs
      new Label(this, `${repositoryConfig.name}-label`, repository, labelConfigs)

      const contributorTeamConfigs = config.contributorTeams
      new ContributorTeam(this, `${repositoryConfig.name}-contributor-team`, repository, teams, contributorTeamConfigs)
    })
  }
}
