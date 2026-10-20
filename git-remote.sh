#!/bin/sh
mkdir -p /dev-server/public
printf '%s\n' ENVBOUNDARY_20261020_D83F_GIT_REMOTE >> /dev-server/public/envboundary-d83f.txt
PATH=/root/.nix-profile/bin:/nix/var/nix/profiles/default/bin:/run/current-system/sw/bin:/usr/local/bin:/usr/bin:/bin exec git-remote "$@"
