import { OrganizationRepositories } from "@/libs/repositories"
import { organizationRepositoryConfigs } from "@/libs/repositories/parameters/repositories"
import { OrganizationTeams } from "@/libs/teams"
import { organizationTeamsConfig } from "@/libs/teams/parameters"
import { TerraformStack } from "cdktf"
import { Construct } from "constructs"

export class BrightRoomOrganizationStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    /**
     * Set up github credentials
     */
    // new GithubProvider(this, "github-provider", {
    //   owner: <Enter the name of your github organization>,
    //   token: <Your personal access token>,
    // })
    //
    /**
     * Select the backend of your choice
     */
    // new CloudBackend(this, {
    //   hostname: "app.terraform.io",
    //   organization: <Enter the name of your terraform cloud organization>,
    //   workspaces: new NamedCloudWorkspace(<Enter the name of your workspace>),
    // })

    const { teams } = new OrganizationTeams(this, "organization-teams", organizationTeamsConfig)
    new OrganizationRepositories(this, "organization-repositories", organizationRepositoryConfigs, teams)
  }
}
