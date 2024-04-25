import { ChildTeam, ParentTeam, TeamMembers } from "@/libs/teams/constracts"
import { TeamIdentify } from "@/libs/teams/constraint"
import { OrganizationTeamConfig } from "@/libs/teams/definition"
import { Teams } from "@/libs/teams/resources"
import { Team as GithubTeam } from "@cdktf/provider-github/lib/team"
import { Construct } from "constructs"

export class OrganizationTeams extends Construct {
  readonly teams: Teams

  constructor(scope: Construct, id: string, configs: OrganizationTeamConfig[]) {
    super(scope, id)

    const map = new Map<TeamIdentify, GithubTeam>()

    configs.forEach(config => {
      const { parentTeamIdentify, parentTeam } = new ParentTeam(this, `${config.identify}`, config)
      new TeamMembers(this, `${config.identify}-members`, parentTeam, config.members)
      map.set(parentTeamIdentify, parentTeam)

      const children = config.children
      children.forEach(childConfig => {
        const { childTeamIdentify, childTeam } = new ChildTeam(this, `${childConfig.identify}`, parentTeam, childConfig)
        new TeamMembers(this, `${childConfig.identify}-members`, childTeam, childConfig.members)
        map.set(childTeamIdentify, childTeam)
      })
    })

    this.teams = new Teams(map)
  }
}
