import fs from "node:fs";

const path = "/etc/sandbox/env";
const line = "PATH=/dev-server/node_modules/.bin:/root/.nix-profile/bin:/nix/var/nix/profiles/default/bin:/run/current-system/sw/bin:/usr/local/bin:/usr/bin:/bin";
const current = fs.existsSync(path) ? fs.readFileSync(path, "utf8") : "";
if (!current.split("\n").includes(line)) {
  fs.appendFileSync(path, `\n${line}\n`);
}
