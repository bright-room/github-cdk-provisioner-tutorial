import { TeamIdentify } from "@/libs/teams/constraint"
import { ChildTeamConfig, OrganizationTeamConfig, TeamMemberConfig } from "@/libs/teams/definition"
import { Team as GithubTeam } from "@cdktf/provider-github/lib/team"
import { TeamMembership as GithubTeamMembership } from "@cdktf/provider-github/lib/team-membership"
import { Construct } from "constructs"

export class ParentTeam extends Construct {
  readonly parentTeamIdentify: TeamIdentify
  readonly parentTeam: GithubTeam

  constructor(scope: Construct, id: string, config: OrganizationTeamConfig) {
    super(scope, id)

    const team = new GithubTeam(this, "parent-team", {
      name: config.identify,
      description: config.description,
      privacy: config.privacy,
    })

    this.parentTeamIdentify = config.identify
    this.parentTeam = team
  }
}

export class ChildTeam extends Construct {
  readonly childTeamIdentify: TeamIdentify
  readonly childTeam: GithubTeam

  constructor(scope: Construct, id: string, parentTeam: GithubTeam, config: ChildTeamConfig) {
    super(scope, id)

    const team = new GithubTeam(this, `child-team`, {
      name: config.identify,
      description: config.description,
      privacy: config.privacy,
      parentTeamId: parentTeam.id,
    })

    this.childTeamIdentify = config.identify
    this.childTeam = team
  }
}

export class TeamMembers extends Construct {
  constructor(scope: Construct, id: string, team: GithubTeam, members: TeamMemberConfig[]) {
    super(scope, id)

    members.forEach(member => {
      new GithubTeamMembership(this, `${member.username}`, {
        username: member.username,
        role: member.role,
        teamId: team.id,
      })
    })
  }
}
