frontend_package_contents = JSON.parse(
                              File.read(
                                File.join(Rails.root, 'package.json')
                              )
                            )

frontend_version = "#{frontend_package_contents["version"]}"

$SAGE_VERSION = frontend_version
