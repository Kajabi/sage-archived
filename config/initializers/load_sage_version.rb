frontend_package_contents = JSON.parse(
                              File.read(
                                File.join(Rails.root, 'package.json')
                              )
                            )
version_rails = SageRails::VERSION
version_frontend = frontend_package_contents["version"]
version_warning = (version_frontend == version_rails) ? ""  : "WARNING – Sage Rails & Sage Frontend don't have matching version numbers:&nbsp;&nbsp;"

$SAGE_VERSION = "#{version_warning}📦 Package: v#{version_frontend}&nbsp;&nbsp;&nbsp;🧰 Gem: v#{version_rails}"
$SAGE_VERSION_URL = "https://github.com/Kajabi/sage/releases/tag/v#{version_frontend}"
