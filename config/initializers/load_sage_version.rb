frontend_package_contents = JSON.parse(
                              File.read(
                                File.join(Rails.root, 'package.json')
                              )
                            )
$SAGE_VERSION_GEM = SageRails::VERSION
$SAGE_VERSION_FRONTEND = frontend_package_contents["version"]
$SAGE_VERSION_URL = "https://github.com/Kajabi/sage/releases/tag/v#{$SAGE_VERSION_FRONTEND}"
