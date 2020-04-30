# Monkey Patch Webacker's Watched File Location
# Info & Patch Source: https://github.com/rails/webpacker/issues/2487
require 'webpacker'

module Webpacker
  module WatchedFilesDigestPatch
    private

    def watched_files_digest
      Dir.chdir config.root_path do
        super
      end
    end
  end
end

Webpacker::Compiler.prepend Webpacker::WatchedFilesDigestPatch
