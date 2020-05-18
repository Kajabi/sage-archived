# For usage help run: sage-local-link --help
sage_repo_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; cd .. ; pwd -P )

function echo_custom() {
  printf "\n\n\033[0;34m${1} \033[0m${2}\n\033[0;34m----------------------------------------------------------------------------------------------\033[0m\n"
}

function bundle_and_yarn() {
  echo_custom "GEM:" "bundle install"
  bundle install --quiet

  echo_custom "FRONTEND PACKAGE:" "yarn install --force"
  yarn install --silent --force
}

function show_status_of_gem_and_package() {
  echo_custom "GEM:" "Current Bundle Config Entries 💎"
  bundle config

  echo_custom "FRONTEND PACKAGE:" "Current Package Symlinks ⚒️"
  ( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l # <-- This looks up the symlinked node_modules
}

if [ "$1" = "true" ] || [ "$1" = "false" ]; then

  # Uninstall Local Bindings
  if [ "$1" = "false" ]; then
    echo_custom "GEM:" "Removing local Sage gem"

    bundle config --delete disable_local_branch_check
    bundle config --delete local.Sage

    echo_custom "FRONTEND PACKAGE:" "Removing local Sage frontend package"

    yarn unlink sage
    (cd $sage_repo_path; yarn unlink)

    bundle_and_yarn
    echo_custom "Now Using..." "PRODUCTION SAGE ✅"

  # Install Local Bindings
  elif [ "$1" = "true" ]; then
    echo_custom "GEM:" "Use local Sage gem located at: $sage_repo_path"

    bundle config --local disable_local_branch_check true
    bundle config --local local.Sage $sage_repo_path

    echo_custom "FRONTEND PACKAGE:" "Use the local Sage frontend package located at: $sage_repo_path"

    (cd $sage_repo_path; yarn link)
    yarn link sage

    bundle_and_yarn
    echo_custom "Now Using..." "LOCAL SAGE ✅"
  fi;

  show_status_of_gem_and_package

else
  echo_custom "Run inside the of root the Kajabi-Products repo:"
  echo "$ <PATH TO SAGE REPO>/bin/sage-local-link <BOOLEAN>"
fi
