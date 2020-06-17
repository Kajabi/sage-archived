frontend_package_contents = JSON.parse(
                              File.read(
                                File.join(Rails.root, 'package.json')
                              )
                            )

$SAGE_VERSION = frontend_package_contents["version"]
