# Sage Local Link Script
#
#   Updates SageRails gem version, Sage frontend package version,
#   creates a version-tagged git commit, pushes to master, and deploys to Docs production
#
#   -----------------------------------------------------
#   USAGE:
#   $ <PATH TO SAGE REPO>/bin/sage-local-link.sh < patch | minor | major >

function echo_custom() {
  printf "\n\n\033[0;34m${1} \033[0m${2}\n\033[0;34m------------------------------------------------\033[0m\n"
}

function echo_custom_error() {
  printf "\n\n\033[0;101m${1} \033[0m${2}\n\033[0;34m------------------------------------------------\033[0m\n"
}


# PREFLIGHT: Run some checks to ensure enviroment is properly configured
# ----------------------------------------------------------------------
echo_custom "PREFLIGHT", "Check arguments, branch status, & deploy access"

# Check script argument
if [ "$1" = "patch" ] || [ "$1" = "minor" ] || [ "$1" = "major" ]; then
  echo_custom_error "Error", "Requires argument 'patch' / 'minor' / 'major'"
  exit 1
fi

# Is the branch clean?
if [ -z ! "$(git status --porcelain)" ]; then
  echo_custom_error "Error", "Branch must be clean"
  exit 1
fi

# Does a git remote location of `heroku master` exist?
if [ -z ! "$(git ls-remote --exit-code --heads heroku master)" ]; then
  echo_custom_error "Error", "Heroku remote git location does not exist. Ensure the Heroku CLI is installed and the remote location has been added 'heroku git:remote -a sage-design-system'"
  exit 1
fi

# PPREPARE
# ----------------------------------------------------------------------
echo_custom "PREPARE", "Ensure master is up to date"

# Ensure the master branch is up to date
git fetch origin master --tags

# Switch to the master branch
git checkout master


# UPDATE
# ----------------------------------------------------------------------
echo_custom "UPDATE", "Bumping the SageRails gem, Sage frontend package, & creating a version-tagged git commit"

# Use the ruby Bump gem to bump SageRails package but DON'T COMMIT, this will be handled by `yarn version`
bump $1 --no-commit

# `yarn version` handles updating package.json and making a version-tagged git commit internally
yarn version --$1


# DEPLOY
# ----------------------------------------------------------------------
echo_custom "DEPLOY", "Push latest tag to master and perform 'yarn run deploy'"

# Pushes the latest version of master back to origin with the new tagged git-commit
git push origin master --tags

# Run the package.json deploy script to push to production Docs site
yarn run deploy

# Success!
echo_custom "Successfully released and deployed version $npm_package_version!"
