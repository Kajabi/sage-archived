# For usage help run: sage-local-link --help

YELLOW='\033[0;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

function echo_yellow() {
  printf "\n${YELLOW}${*}${NC}\n"
}

function echo_green() {
  printf "\n${GREEN}${*}${NC}\n"
}

function echo_red() {
  printf "\n${RED}${*}${NC}\n"
}

function echo_divider() {
  echo "-------------------------------------------------"
}

function bundle_and_yarn() {
  bundle install --quiet
  yarn install --silent --force
}

function help() {
  echo_green "Run inside the of root the Kajabi-Products project:"
  echo "> sage-local-link <RELATIVE DIRECTORY OF SAGE GEM> <BOOLEAN>"
  echo_green "Inspect the status for local bundle with:"
  echo "> sage-local-link"
  exit 1
}

if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  help
fi

if [ -z "$1" ] || [ -z "$2" ]; then
  echo_red "ERROR: Requires the relative path of Sage gem"
  help
fi

if [ "$2" = "false" ]; then
  echo_yellow "BUNDLE: Removing local Sage gem"
  echo_divider
  bundle config --delete disable_local_branch_check
  bundle config --delete local.Sage

  echo_yellow "YARN: Removing local Sage frontend package"
  echo_divider
  yarn unlink sage
  (cd $1; yarn unlink)

  bundle_and_yarn
  echo_green "PRODUCTION SAGE is now being used ✅"

elif [ "$2" = "true" ]; then

  echo_yellow "BUNDLE: Use local Sage gem located at: $1"
  echo_divider
  bundle config --local disable_local_branch_check true
  bundle config --local local.Sage $1

  echo_yellow "YARN: Use the local Sage frontend package located at: $1"
  echo_divider
  (cd $1; yarn link)
  yarn link sage

  bundle_and_yarn
  echo_green "LOCAL SAGE is now being used ✅"
fi;

echo_green "CURRENT BUNDLE CONFIG 💎"
echo_divider
bundle config

echo_green "CURRENT LINKED FRONTEND PACKAGES ⚒️"
echo_divider
( ls -l node_modules ; ls -l node_modules/@* ) | grep ^l # <-- This looks up the sage symlink
