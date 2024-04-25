import { BrightRoomOrganizationStack } from "@/libs"
import { App } from "cdktf"

const app = new App()
new BrightRoomOrganizationStack(app, "bright-room-organization-stack")

app.synth()
