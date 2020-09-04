frontend_package_contents = JSON.parse(
                              File.read(
                                File.join(Rails.root, 'package.json')
                              )
                            )

$SAGE_GIT_TAG = "v#{frontend_package_contents["version"]}"
$SAGE_VERSION = "Frontend: v#{frontend_package_contents["version"]} | Rails: v#{SageRails::VERSION}"
