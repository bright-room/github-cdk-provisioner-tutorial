import { TeamIdentify } from "@/libs/teams/constraint"
import { Team as GithubTeam } from "@cdktf/provider-github/lib/team"

export class Teams {
  private readonly _map: Map<TeamIdentify, GithubTeam>

  constructor(map: Map<TeamIdentify, GithubTeam>) {
    this._map = map
  }

  find(key: TeamIdentify): GithubTeam {
    if (!this._map.has(key)) {
      throw new Error("key not found.")
    }
    return <GithubTeam>this._map.get(key)
  }
}
